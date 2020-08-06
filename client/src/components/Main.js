import React from "react";
import { useHistory } from "react-router-dom";

const Main = () => {
  const history = useHistory();

  return (
    <div className="main">
      <div className="title">Welcome to Facelook</div>
      <div className="button-group">
        <button className="button" onClick={() => history.push("/login")}>
          Login
        </button>
        <button className="button" onClick={() => history.push("/register")}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Main;
