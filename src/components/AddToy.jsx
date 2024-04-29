import { useState } from "react";
import { useStore } from "../data/store.js";
import { addToy, getToys } from "../data/crud.js";
const AddToy = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const setToys = useStore((state) => state.setToys);

  const handelAddToy = async (event) => {
    setIsLoading(true);
    const newToy = { name: name, img: img, price: price, type: type };
    try {
      await addToy(newToy);
      setName("");
      setImg("");
      setPrice("");
      setType("");
      setToys(await getToys());
    } catch {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="add-toy-section">
      <div className="add-toy">
        <label>Namn:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}></input>
      </div>
      <div className="add-toy">
        <label>Bildlänk:</label>
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}></input>
      </div>
      <div className="add-toy">
        <label>Kategori:</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}></input>
      </div>
      <div className="add-toy">
        <label>Pris:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}></input>
      </div>

      <button disabled={isLoading} className="add-btn" onClick={handelAddToy}>
        Spara
      </button>
    </section>
  );
};

export default AddToy;
