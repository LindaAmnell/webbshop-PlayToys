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

  const handleDeleteToy = async () => {
    await deleteToy(toy.key);
    const toysFromDb = await getToys();
    setToys(toysFromDb);
  };
  const handelAddToy = () => {
    setShowAddToy(!showAddToy);
  };
  useEffect(() => {
    const fetchToys = async () => {
      const fetchedToys = await getToys();
      setToys(fetchedToys);
    };
    fetchToys();
  }, []);

  return (
    <main>
      <h2>Leksaker</h2>
      <div className="add-toy-div">
        {showAddToy && <AddToy />}
        <button onClick={handelAddToy}>Lägg till leksak</button>
      </div>
      {toys.map((t, item) => (
        <section className="toys-section" key={t.key}>
          <img className="toys-img" src={t.img} alt="bild" />
          <h4 className="toys-name">{t.name}</h4>
          <div className="toys-info">
            <p className="toys-price">{t.price} kr</p>
            <button onClick={handleDeleteToy}>Tabort</button>
            <button>Ändra</button>
          </div>
        </section>
      ))}
    </main>
  );
};

export default ToysEmployee;
