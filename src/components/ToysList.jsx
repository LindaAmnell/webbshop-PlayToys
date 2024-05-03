import { getToys } from "../data/crud.js";
import { useStore } from "../data/store.js";
import cart from "../img/cart.png";
import login from "../img/login.icon.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import searchIcon from "../img/Search.png";

const ToysList = () => {
  const [messages, setMessages] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const { sortToys, toys, setToys, addToyToCheckout, countTotalCheckout } =
    useStore((state) => ({
      toys: state.toys,
      setToys: state.setToys,
      addToyToCheckout: state.addToyToCheckout,
      countTotalCheckout: state.countTotalCheckout,
      sortToys: state.sortToys,
    }));
  useEffect(() => {
    const fetchToys = async () => {
      const fetchedToys = await getToys();
      setToys(fetchedToys);
    };
    fetchToys();
  }, []);

  // filtrerar listan när man söker på leksaker, som jag sedan mapar ut
  const filteredToys = toys.filter(
    (toy) =>
      toy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      toy.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //gör så att leksakerna sorteras
  const handleSortToy = (event) => {
    sortToys(event.target.value);
  };
  // skriver ut ett meddelande att du har lag till leksaken i kundvagnen
  const handleAddToyToCheckout = (t) => {
    addToyToCheckout(t);
    setMessages((prevMessages) => ({
      ...prevMessages,
      [t.key]: "Tillagd i varukorgen",
    }));
    setTimeout(() => {
      setMessages((prevMessages) => ({ ...prevMessages, [t.key]: "" }));
    }, 1500);
  };

  return (
    <section className="toys-main">
      <NavLink to="/Checkout">
        <img
          onClick={countTotalCheckout}
          className="cart-icon"
          src={cart}
          alt="cartchekout"
        />
      </NavLink>
      <div className="search-dropdown-section">
        <div className="search-section">
          <img className="search-icon" src={searchIcon} alt="sök-icon" />

          <input
            type="text"
            placeholder="Sök leksaker"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="dropdown-section">
          <select onChange={handleSortToy}>
            <option value="default">Sortera efter</option>
            <option value="name-ascending">A-Ö</option>
            <option value="price-rising">Pris stigande</option>
            <option value="price-falling">Pris fallande</option>
          </select>
        </div>
      </div>
      <h2>Leksaker</h2>
      <div className="toys-meny">
        {filteredToys.map((t, item) => (
          <section className="toys-section" key={t.key}>
            <img className="toys-img" src={t.img} alt="bild" />
            <h4 className="toys-name">{t.name}</h4>
            {messages[t.key] && (
              <div className="added-messages">{messages[t.key]}</div>
            )}
            <div className="toys-info">
              <p className="toys-price">{t.price} kr</p>
              <button
                onClick={() => handleAddToyToCheckout(t)}
                className="add-btn">
                Lägg till
              </button>
            </div>
          </section>
        ))}
      </div>
      <footer>
        <NavLink to="/toLogin">
          {" "}
          <img className="login-icon" src={login} alt="" />
        </NavLink>
      </footer>
    </section>
  );
};
export default ToysList;
