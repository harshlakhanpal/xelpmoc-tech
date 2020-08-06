const express = require("express");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./db");

const matchPasswords = (user, password) => user.password === password;
const signToken = (id) => jwt.sign({ id }, "secrettoken");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Working");
});

app.get("/check", async (req, res) => {
  const user = await db("users").where({ id: req.body.id });
  res.send({ user });
});

app.get("/posts", async (req, res) => {
  const posts = await db("posts");
  res.send(posts);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).send("Email & Password are required.");

  const [user] = await db("users").where({
    email,
  });
  if (!user) return res.status(401).send("Invalid Email.");

  if (!matchPasswords(user, password))
    return res.status(401).send("Invalid Email/password.");

  delete user.password;
  const token = signToken(user.id);

  res.json({ ...user, token });
});

app.post("/register", async (req, res) => {
  // const data = _.pick(req.body, [
  //   "name",
  //   "username",
  //   "password",
  //   "email",
  //   "mobile",
  // ]);
  // const { error } = Joi.validate(data, RegisterSchemaValidator);
  // if (error) return res.status(400).send(error.details[0].message);

  const { body } = req;
  const { mobile, email } = body;

  const [userExists] = await db("users").where({ mobile }).orWhere({ email });
  if (userExists) return res.status(401).send("Mobile/email already exists.");

  const [userId] = await db("users").insert({
    ...body,
  });

  const token = signToken(userId);
  res.send({ ...body, token, userId });
});

app.post("/post", async (req, res, next) => {
  await db("posts").insert({ ...req.body });
  res.send({ ...req.body });
});

const start = async () => {
  app.listen("9000", console.log(`Listening on port 9000`));
};

start();
