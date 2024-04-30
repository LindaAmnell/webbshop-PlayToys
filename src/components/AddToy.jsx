import { useState } from "react";
import { useStore } from "../data/store.js";
import { handleValidationToy } from "../data/validering.js";
import { addToy, getToys } from "../data/crud.js";
// import close from "../img/cross.icon.png";
const AddToy = ({ onAddSuccess, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const setToys = useStore((state) => state.setToys);
  const [errors, setErrors] = useState({
    name: "",
    price: "",
    type: "",
    img: "",
  });

  const handelAddToy = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const newToy = { name: name, img: img, price: price, type: type };
    try {
      await addToy(newToy);
      setName("");
      setImg("");
      setPrice("");
      setType("");
      setToys(await getToys());
      onAddSuccess();
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
          name="name"
          type="text"
          value={name}
          onBlur={(e) => handleValidationToy(e, errors, setErrors)}
          onChange={(e) => setName(e.target.value)}></input>
        <p className={errors.name ? "error" : "shown"}>
          {errors.name ? errors.name : "Placeholder text"}
        </p>
      </div>
      <div className="add-toy">
        <label>Bildlänk:</label>
        <input
          name="img"
          type="text"
          value={img}
          onBlur={(e) => handleValidationToy(e, errors, setErrors)}
          onChange={(e) => setImg(e.target.value)}></input>
        <p className={errors.img ? "error" : "shown"}>
          {errors.img ? errors.img : "Placeholder text"}
        </p>
      </div>
      <div className="add-toy">
        <label>Kategori:</label>
        <input
          name="type"
          type="text"
          value={type}
          onBlur={(e) => handleValidationToy(e, errors, setErrors)}
          onChange={(e) => setType(e.target.value)}></input>
        <p className={errors.type ? "error" : "shown"}>
          {errors.type ? errors.type : "Placeholder text"}
        </p>
      </div>
      <div className="add-toy">
        <label>Pris:</label>
        <input
          name="price"
          type="number"
          value={price}
          onBlur={(e) => handleValidationToy(e, errors, setErrors)}
          onChange={(e) => setPrice(e.target.value)}></input>
        <p className={errors.price ? "error" : "shown"}>
          {errors.price ? errors.price : "Placeholder text"}
        </p>
      </div>

      <button
        disabled={!name || !price || !img || !type}
        className="add-btn"
        onClick={handelAddToy}>
        Spara
      </button>
      <button onClick={onClose} className="close-btn">
        {" "}
        Avbryt
      </button>
    </section>
  );
};

export default AddToy;
