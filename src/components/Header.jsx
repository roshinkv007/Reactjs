import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Header = () => {
  const [auth, setAuth] = useState("Login");
  const onlineStatus = useOnlineStatus()
 

  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <div className="nav-items">
        <ul className="nav">
          <li>Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/About"}>
            <li>About</li>
          </Link>
          <Link to={"/Contact"}>
            <li>Contact</li>
          </Link>
          <li>Cart</li>
          <button
            className="btn-login"
            onClick={() => {
              auth === "Login" ? setAuth("Log out") : setAuth("Login");
            }}
          >
            {auth}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;