import { getToys, deleteToy, addToy, editToy } from "../data/crud.js";
import AddToy from "./AddToy.jsx";
import { useStore } from "../data/store.js";
import { useEffect, useState } from "react";

const ToysEmployee = (toy) => {
  const [showAddToy, setShowAddToy] = useState(false);
  const { toys, setToys } = useStore((state) => ({
    toys: state.toys,
    setToys: state.setToys,
  }));

  const handleDeleteToy = async (key) => {
    if (!key) {
      return;
    }
    await deleteToy(key);
    const toysFromDb = await getToys();
    setToys(toysFromDb);
  };
  const handleShowAddToy = () => {
    setShowAddToy(!showAddToy);
  };
  const handleAddToySave = () => {
    setShowAddToy(false);
  };

  useEffect(() => {
    const fetchToys = async () => {
      const fetchedToys = await getToys();
      setToys(fetchedToys);
    };
    fetchToys();
  }, []);

  return (
    <main className="employe-toys-section">
      <h2>Leksaker</h2>
      <div className="add-toy-div">
        {showAddToy && (
          <AddToy
            onAddSuccess={handleAddToySave}
            onClose={() => setShowAddToy(false)}
          />
        )}
        {!showAddToy && (
          <button onClick={handleShowAddToy}>Lägg till leksak</button>
        )}
      </div>
      <section className="toy-grid">
        {toys.map((t, item) => (
          <section className="toys-section" key={t.key}>
            <img className="toys-img" src={t.img} alt="bild" />
            <h4 className="toys-name">{t.name}</h4>
            <div className="toys-info">
              <p className="toys-price">{t.price} kr</p>
              <button onClick={() => handleDeleteToy(t.key)}>Tabort</button>
              <button>Ändra</button>
            </div>
          </section>
        ))}
      </section>
    </main>
  );
};

export default ToysEmployee;
