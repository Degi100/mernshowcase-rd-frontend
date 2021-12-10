import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../AppContext";

const Nav = () => {
  const {currentUser} = useContext(AppContext);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Welcome</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/admin">Admin</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        {currentUser.login && ( 
        <li>
          <NavLink to="/logout">Logout</NavLink>
        </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
