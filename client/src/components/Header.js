import React from "react";
import { useHistory } from "react-router-dom";

const Header = ({ loggedIn, setLoggedIn }) => {
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    setLoggedIn(false);
    history.push("/login");
  };
  return (
    <div className="header">
      <div className="left-menu"></div>
      <div className="logo">Xelpmoc</div>
      <div className="right-menu">
        {loggedIn ? (
          <button
            className="button"
            style={{ color: "black" }}
            onClick={logout}
          >
            Logout
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Header;
