import { useStore } from "../data/store.js";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import arrow from "../img/back.png";
import PopUp from "./PopUp.jsx";

const CheckoutPage = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const navigate = useNavigate();
  const {
    checkoutList,
    deleteFromCheckout,
    checkoutTotal,
    deleteChekoutList,
    addToyToCheckout,
    countTotalCheckout,
    deleteThatToyFromList,
  } = useStore((state) => ({
    checkoutList: state.checkoutList,
    deleteFromCheckout: state.deleteFromCheckout,
    checkoutTotal: state.checkoutTotal,
    deleteChekoutList: state.deleteChekoutList,
    addToyToCheckout: state.addToyToCheckout,
    countTotalCheckout: state.countTotalCheckout,
    deleteThatToyFromList: state.deleteThatToyFromList,
  }));

  // lägger till antal på leksaken om man vill ha fler
  const handelPlusOne = (item) => {
    addToyToCheckout(item);
    countTotalCheckout();
  };
  const handleBuyButtonClick = () => {
    setShowPopUp(true);
    setTimeout(() => {
      setShowPopUp(false);
      deleteChekoutList();
      navigate("/");
    }, 2000);
  };

  return (
    <section className="checkout-section">
      <NavLink to="/">
        <img className="arrow" src={arrow} alt="" />
      </NavLink>
      <h2 className="h2-cart">Din varukorg</h2>
      <div className="checkout-div">
        {checkoutList.map((item) => (
          <div className="checkout-toy-card" key={item.key}>
            <div className="toy-name-delet-btn">
              <p className="checkout-toy-name">{item.name}</p>
              <button
                onClick={() => deleteThatToyFromList(item, item.key)}
                className="delete-btn">
                🗑️
              </button>
            </div>
            <div className="info-toy">
              <div className="img-checkout-div">
                <img className="checkout-img" src={item.img} alt="" />{" "}
              </div>
              <p>{item.price}kr</p>{" "}
              <button
                className="minus-btn"
                onClick={() => deleteFromCheckout(item.key)}>
                -
              </button>{" "}
              <p>{item.quantity}</p>
              <button className="plus-btn" onClick={() => handelPlusOne(item)}>
                +
              </button>
            </div>
          </div>
        ))}
        {checkoutList.length === 0 ? (
          <p className="inget-kundvagn, total-price">Inget i varukorgen</p>
        ) : (
          <p className="total-price"> Totalsumma: {checkoutTotal} kr</p>
        )}
        <button
          style={{ display: checkoutTotal === 0 ? "none" : "block" }}
          className="buy-btn"
          onClick={handleBuyButtonClick}>
          Köp
        </button>
        {showPopUp && <PopUp />}
      </div>
    </section>
  );
};

export default CheckoutPage;
