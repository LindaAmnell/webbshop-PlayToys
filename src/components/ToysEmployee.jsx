import { getToys, deleteToy } from "../data/crud.js";
import AddToy from "./AddToy.jsx";
import EditToy from "./EditToy.jsx";
import { useStore } from "../data/store.js";
import { useEffect, useState } from "react";

const ToysEmployee = (toy) => {
  const [showAddToy, setShowAddToy] = useState(false);
  const [showEditToy, setShowEditToy] = useState(false);
  const [selectedToy, setSelectedToy] = useState(null);
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

  const handleEditToy = (toy) => {
    setSelectedToy(toy);
    setShowEditToy(true);
  };

  const handleCloseEditToy = () => {
    setShowEditToy(false);
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
                🗑️
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
