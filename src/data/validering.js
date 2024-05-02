const handleValidationToy = (event, errors, setErrors) => {
  const { name, value } = event.target;
  let error = "";
  switch (name) {
    case "name":
      error = value.trim() === "" ? "Skriv in ett namn i fältet" : "";
      break;
    case "img":
      error = value.trim() === "" ? "Lägg in en bildlänk i fältet" : "";
      break;
    case "price":
      error = value.trim() === "" ? "Skriv i siffror" : "";
      break;
    case "type":
      error = value.trim() === "" ? "Skriv in typ av produkt" : "";
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
