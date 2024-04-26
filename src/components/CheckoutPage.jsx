import { useStore } from "../data/store.js";
import { NavLink } from "react-router-dom";
import arrow from "../img/back.png";
const CheckoutPage = () => {
  const { checkoutList, deleteFromCheckout, checkoutTotal, deleteChekoutList } =
    useStore((state) => ({
      checkoutList: state.checkoutList,
      deleteFromCheckout: state.deleteFromCheckout,
      checkoutTotal: state.checkoutTotal,
      deleteChekoutList: state.deleteChekoutList,
    }));

  return (
    <section className="checkout-section">
      <NavLink to="/toymeny">
        <img className="arrow" src={arrow} alt="" />
      </NavLink>
      <h2 className="h2-cart">Din varukorg</h2>
      <div className="checkout-div">
        {checkoutList.map((item) => (
          <div className="checkout-toy-card" key={item.key}>
            <div className="toy-name-delet-btn">
              <p className="checkout-toy-name">{item.name}</p>
              <button
                onClick={() => deleteFromCheckout(item.key)}
                className="delete-btn">
                🗑️
              </button>
            </div>
            <div className="info-toy">
              <img className="checkout-img" src={item.img} alt="" />{" "}
              <p>{item.price}kr</p> <button>-</button> <p>{item.quantity}</p>
              <button>+</button>
            </div>
          </div>
        ))}
        {checkoutList.length === 0 ? (
          <p className="inget-kundvagn, total-price">Inget i varukorgen</p>
        ) : (
          <p className="total-price"> Totalsumma: {checkoutTotal} kr</p>
        )}
      </div>
      <button onClick={deleteChekoutList} className="buy-btn">
        Köp
      </button>
    </section>
  );
};

export default CheckoutPage;
