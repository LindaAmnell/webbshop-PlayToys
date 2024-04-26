import { Outlet, NavLink } from "react-router-dom";

import palm from "../img/loggan.png";
import palm2 from "../img/loggan.1.png";
import "../css/startpage.css";
import "../css/toyslist.css";
const Root = () => (
  <>
    <header>
      <img className="logga" src={palm} alt="" />
      <NavLink className="hedar-text" to="/">
        <h1>PlayToys</h1>{" "}
      </NavLink>
      <img className="logga" src={palm2} alt="" />
    </header>

    <Outlet />
    <footer></footer>
  </>
);

export default Root;
