import { getToys } from "../data/crud.js";
// import { useState } from "react";
import { useStore } from "../data/store.js";

const ToysList = () => {
  const { toys, setToys, addToyToCheckout, CheckoutList } = useStore(
    (state) => ({
      toys: state.toys,
      setToys: state.setToys,
      addToyToCheckout: state.addToyToCheckout,
      CheckoutList: state.CheckoutList,
    })
  );

  const handeleGetToys = async () => {
    setToys(await getToys());
  };
  console.log("Checkout list content:", CheckoutList);

  return (
    <main className="toys-meny">
      <h2>Leksaker</h2>

      <button onClick={handeleGetToys}>gettoys</button>
      {toys.map((t) => (
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
