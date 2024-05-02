import { getToys } from "../data/crud.js";
import { useStore } from "../data/store.js";
import cart from "../img/cart.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import searchIcon from "../img/Search.png";

const ToysList = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
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

  // söker på leksaker efter namn och typ
  const filteredToys = toys.filter(
    (toy) =>
      toy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      toy.type.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //gör så att leksakerna sorteras
  const handleSortToy = (event) => {
    sortToys(event.target.value);
  };

  return (
    <main className="toys-main">
      <NavLink to="/Chekout">
        <img
          onClick={countTotalCheckout}
          className="cart-icon"
          src={cart}
          alt="cartchekout"
        />
      </NavLink>
      <div className="search-dropdown-section">
        <div className="search-section">
          <img
            onClick={() => setIsSearchVisible(!isSearchVisible)}
            className="search-icon"
            src={searchIcon}
            alt="sök-icon"
          />
          {isSearchVisible && (
            <input
              type="text"
              placeholder="Sök leksaker"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          )}
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
            <div className="toys-info">
              <p className="toys-price">{t.price} kr</p>
              <button onClick={() => addToyToCheckout(t)} className="add-btn">
                Lägg till
              </button>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};
export default ToysList;
