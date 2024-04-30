import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const LogIn = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const error = "Vänligen fyll i användarnamn";
  const errorPass = "Vänligen fyll i lösenord";
  const validateUser = () => {
    if (!user) {
      setUserError(error);
    } else {
      setUserError("");
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError(errorPass);
    } else {
      setPasswordError("");
    }
  };

  const checkLogin = () => {
    return user == "admin" && password == "password";
  };
  const handleLogIn = () => {
    validateUser();
    validatePassword();
    if (user && password) {
      if (checkLogin()) {
        navigate("/toyEmployee");
      } else {
      }
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
            onBlur={validateUser}
            onChange={(event) => setUser(event.target.value)}
          />
          <p className={userError ? "error-user" : "correct-login"}>
            {userError}
          </p>
        </div>
        <div className="login-form">
          <label> Lösenord: </label>
          <input
            type="password"
            value={password}
            onBlur={validatePassword}
            onChange={(event) => setPassword(event.target.value)}
          />
          <p className={passwordError ? "error-user" : "correct-login"}>
            {passwordError}
          </p>
        </div>

        <button className="login-btn" onClick={handleLogIn}>
          Logga in
        </button>
      </div>
    </section>
  );
};
export default LogIn;
