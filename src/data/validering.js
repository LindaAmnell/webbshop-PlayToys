const handleValidationToy = (event, errors, setErrors) => {
  const { name, value } = event.target;
  let error = "";
  switch (name) {
    case "name":
      error = value.trim() === "" ? "Namnet är obligatoriskt" : "";
      break;
    case "img":
      error = value.trim() === "" ? "Bildlänk är obligatorisk" : "";
      break;
    case "price":
      error = value.trim() === "" ? "Kräver siffer format" : "";
      break;
    case "type":
      error = value.trim() === "" ? "Typ av leksak är obligatorisk" : "";
      break;
    default:
      break;
  }
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: error,
  }));
};

export { handleValidationToy };
