import { useState } from "react";
import { handleValidationToy } from "../data/validering.js";
import { editToy, getToys } from "../data/crud";
import { useStore } from "../data/store.js";
const EditToy = ({ toys, onClose }) => {
  const [name, setName] = useState(toys.name);
  const [img, setImg] = useState(toys.img);
  const [price, setPrice] = useState(toys.price);
  const [type, setType] = useState(toys.type);
  const [errors, setErrors] = useState({
    name: "",
    price: "",
    type: "",
    img: "",
  });
  const setToys = useStore((state) => state.setToys);

  const handleSave = async () => {
    const updatedToy = {
      name,
      img,
      price,
      type,
    };
    await editToy(toys.key, updatedToy);
    const updetedList = await getToys();
    setToys(updetedList);
    onClose();
  };

  return (
    <>
      <section className="change-Info">
        <section className="change">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onBlur={(e) => handleValidationToy(e, errors, setErrors)}
            onChange={(e) => setName(e.target.value)}
          />
          <p className={errors.name ? "error" : "shown"}>
            {errors.name ? errors.name : "Placeholder text"}
          </p>
        </section>
        <section className="change">
          <label>Bild</label>
          <input
            type="text"
            name="img"
            value={img}
            onBlur={(e) => handleValidationToy(e, errors, setErrors)}
            onChange={(e) => setImg(e.target.value)}
          />{" "}
          <p className={errors.img ? "error" : "shown"}>
            {errors.img ? errors.img : "Placeholder text"}
          </p>
        </section>
        <section className="change">
          <label>Pris</label>
          <input
            type="text"
            name="price"
            value={price}
            onBlur={(e) => handleValidationToy(e, errors, setErrors)}
            onChange={(e) => setPrice(e.target.value)}
          />
          <p className={errors.price ? "error" : "shown"}>
            {errors.price ? errors.price : "Placeholder text"}
          </p>
        </section>
        <section className="change">
          <label>Type</label>
          <input
            type="text"
            name="type"
            value={type}
            onBlur={(e) => handleValidationToy(e, errors, setErrors)}
            onChange={(e) => setType(e.target.value)}
          />
          <p className={errors.type ? "error" : "shown"}>
            {errors.type ? errors.type : "Placeholder text"}
          </p>
        </section>
        <button
          disabled={!name || !price || !img || !type}
          className="save-btn"
          onClick={handleSave}>
          Spara
        </button>
        <button onClick={onClose} className="close-btn-change">
          {" "}
          Avbryt
        </button>
      </section>
    </>
  );
};

export default EditToy;
