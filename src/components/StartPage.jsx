import startpageimg from "../img/start.png";
import { NavLink } from "react-router-dom";

const StartPage = () => {
  return (
    <main>
      <section className="img-start-section">
        <img className="img-start" src={startpageimg} alt="" />
        <h2 className="link">
          {" "}
          <NavLink className="link-toys" to="/toymeny">
            Leksaker
          </NavLink>
        </h2>
      </section>
    </main>
  );
};

export default StartPage;
