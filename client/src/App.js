import React from "react";
import "./App.scss";
import Login from "./components/Login";
import Main from "./components/Main";
import Register from "./components/Register";
import Feed from "./components/Feed";
// import User from "./components/User";
// import Drawer from "./components/Drawer";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* <Drawer /> */}
      <Header />
      <Switch>
        <div className="content">
          <Route exact path="/" component={Main} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/feed" component={Feed} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
