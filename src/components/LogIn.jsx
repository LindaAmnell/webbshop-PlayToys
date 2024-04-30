import { useState } from "react";
import { NavLink } from "react-router-dom";

const LogIn = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const checkLogin = () => {
    if (user !== "admin" || password !== "password") {
      setErrorMessage("Fel användarnamn eller lösenord.");
      return false;
    }
    return true;
  };
  const handleLogIn = () => {
    if (checkLogin()) {
      console.log("Inloggning lyckades!");
    }
  };
  return (
    <section className="login-section">
      <div className="login-div">
        <div className="login-form">
          <label> Användarnamn </label>
          <input
            type="text"
            value={user}
            onChange={(event) => setUser(event.target.value)}
          />
        </div>
        <div className="login-form">
          <label> Lösenord: </label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <NavLink to="/toyEmployee">
          <button className="login-btn" onClick={handleLogIn}>
            Logga in
          </button>
        </NavLink>
      </div>
    </section>
  );
};
export default LogIn;
