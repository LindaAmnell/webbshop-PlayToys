import { Outlet, NavLink } from "react-router-dom";
import palm from "../img/loggan.png";
import palm2 from "../img/loggan.1.png";
import login from "../img/login.icon.png";
import "../css/startpage.css";
import "../css/toyslist.css";
import "../css/checkout.css";
import "../css/toysEmployee.css";
import "../css/editToy.css";
import "../css/addToy.css";
import "../css/validering.css";
import "../css/login.css";
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
    <footer>
      <NavLink to="/toLogin">
        {" "}
        <img className="login-icon" src={login} alt="" />{" "}
      </NavLink>
    </footer>
  </>
);

export default Root;
