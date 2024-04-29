import { getToys } from "../data/crud.js";
import { useStore } from "../data/store.js";
import cart from "../img/cart.png";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const ToysList = () => {
  const { toys, setToys, addToyToCheckout, checkoutList, countTotalCheckout } =
    useStore((state) => ({
      toys: state.toys,
      setToys: state.setToys,
      addToyToCheckout: state.addToyToCheckout,
      checkoutList: state.checkoutList,
      countTotalCheckout: state.countTotalCheckout,
    }));

  //   const handeleGetToys = async () => {
  //     setToys(await getToys());
  //   };

  useEffect(() => {
    const fetchToys = async () => {
      const fetchedToys = await getToys();
      setToys(fetchedToys);
    };
    fetchToys();
  }, []);

  return (
    <main className="toys-meny">
      <NavLink to="/Chekout">
        <img
          onClick={countTotalCheckout}
          className="cart-icon"
          src={cart}
          alt="cartchekout"
        />
      </NavLink>
      <h2>Leksaker</h2>

      {/* <button>gettoys</button> */}
      {toys.map((t, item) => (
        <section className="toys-section" key={t.key}>
          <img className="toys-img" src={t.img} alt="bild" />
          <h4 className="toys-name">{t.name}</h4>
          <div className="toys-info">
            <p className="toys-price">{t.price} kr</p>
            <button onClick={() => addToyToCheckout(t)} className="add-btn">
              Lägg till
            </button>
          </div>
        </section>
      ))}
    </main>
  );
};
export default ToysList;
