import React, { useState, useEffect } from "react";
import axios from "axios";
// import { graphql } from "react-apollo";
// import { useLazyQuery } from "@apollo/react-hooks";
// import * as compose from "lodash.flowright";
// import { login } from "../queries";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleRegister = async () => {
    try {
      if (email !== "" && mobile !== "" && name !== "" && password !== "") {
        const { data } = await axios.post("http://localhost:9000/register", {
          email,
          password,
          name,
          mobile,
        });
        history.push("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  //   };
  return (
    <div className="form">
      <div className="title">Register</div>

      <input
        className="input"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
        placeholder="Name"
      />
      <input
        className="input"
        value={mobile}
        onChange={({ target: { value } }) => setMobile(value)}
        placeholder="Mobile Number"
      />

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
        onClick={handleRegister}
        //   loading={loading}
        //   disabled={!username.length || !password.length}
      >
        Register
      </button>
      <br />
    </div>
  );
};

export default Register;
