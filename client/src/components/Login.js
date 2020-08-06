import React, { useState, useEffect } from "react";
import axios from "axios";
// import { graphql } from "react-apollo";
// import { useLazyQuery } from "@apollo/react-hooks";
// import * as compose from "lodash.flowright";
// import { login } from "../queries";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const { data } = await axios.post("http://localhost:9000/login", {
        email,
        password,
      });
      console.log(data);
      console.log(JSON.stringify(data));
      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("user", JSON.stringify(data));
      history.push("/feed");
    } catch (err) {
      console.log(err);
    }
  };

  //   };
  return (
    <div className="form">
      <div className="title">Login</div>
      <input
        className="input"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        placeholder="Email"
      />
      <input
        type="password"
        className="input"
        value={password}
        //   onPressEnter={handleLogin}
        onChange={({ target: { value } }) => setPassword(value)}
        placeholder="Password"
      />
      <br />

      <button
        className="button"
        type="primary"
        onClick={handleLogin}
        //   loading={loading}
        //   disabled={!username.length || !password.length}
      >
        Login
      </button>
      <br />
    </div>
  );
};

export default Login;
