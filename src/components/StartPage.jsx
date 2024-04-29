// import startpageimg from "../img/start.png";
import { NavLink } from "react-router-dom";
import pingvin from "../img/musse.bucket.png";
import sluss from "../img/play.megabridge.png";
import pool from "../img/play.poolanimal.jpg";

const StartPage = () => {
  return (
    <main>
      <h2 className="link">
        <NavLink className="link-toys" to="/toymeny">
          Leksaker
        </NavLink>
      </h2>
      <section className="img-start-section">
        <h2>Katigorier</h2>
        {/* <div className="img-div">
          <h3>Hinkset</h3>
          <img className="start-img" src={pingvin} alt="" />
        </div>
        <div className="img-div">
          <h3>Slussar</h3>
          <img className="start-img" src={sluss} alt="" />
        </div>
        <div className="img-div">
          <h3>Pooler</h3>
          <img className="start-img" src={pool} alt="" />
        </div> */}
      </section>
    </main>
  );
};

export default StartPage;
