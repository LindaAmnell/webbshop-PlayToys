import { getToys, deleteToy } from "../data/crud.js";
import AddToy from "./AddToy.jsx";
import EditToy from "./EditToy.jsx";
import { useStore } from "../data/store.js";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ToysEmployee = (toy) => {
  const [showAddToy, setShowAddToy] = useState(false);
  const [showEditToy, setShowEditToy] = useState(false);
  const [selectedToy, setSelectedToy] = useState(null);
  const { toys, setToys } = useStore((state) => ({
    toys: state.toys,
    setToys: state.setToys,
  }));
  // tarbort leksak från listan
  const handleDeleteToy = async (key) => {
    await deleteToy(key);
    const toysFromDb = await getToys();
    setToys(toysFromDb);
  };
  // gör så att man kan se addToy för att lägga till leksak
  const handleShowAddToy = () => {
    setShowAddToy(!showAddToy);
  };
  // gör så att man gömmer addToy
  const handleAddToySave = () => {
    setShowAddToy(false);
  };
  // gör så man ser eddittoy ( ändra leksak)
  const handleEditToy = (toy) => {
    setSelectedToy(toy);
    setShowEditToy(true);
  };
  // gör så man gömmer eddittoy
  const handleCloseEditToy = () => {
    setShowEditToy(false);
  };
  return (
    <main className="employe-toys-section">
      <NavLink to="/">
        <button className="sign-out-btn">Logga ut</button>
      </NavLink>
      <div className="add-toy-div">
        {showAddToy && (
          <AddToy
            onAddSuccess={handleAddToySave}
            onClose={() => setShowAddToy(false)}
          />
        )}{" "}
        <div className="add-toy-div">
          {!showAddToy && (
            <button className="add-toy-to-list" onClick={handleShowAddToy}>
              Lägg till leksak
            </button>
          )}
          {showEditToy && (
            <EditToy toys={selectedToy} onClose={handleCloseEditToy} />
          )}
        </div>
      </div>
      <section className="toy-grid">
        {toys.map((t, item) => (
          <section className="toys-section" key={t.key}>
            <img className="toys-img" src={t.img} alt="bild" />
            <h4 className="toys-name">{t.name}</h4>
            <div className="toys-info">
              <p className="toys-price">{t.price} kr</p>
              <button
                className="deletetoy-btn"
                onClick={() => handleDeleteToy(t.key)}>
                Tabort
              </button>
              <button
                className="changetoy-btn"
                onClick={() => handleEditToy(t)}>
                ✏️
              </button>
            </div>
          </section>
        ))}
      </section>
    </main>
  );
};

export default ToysEmployee;
