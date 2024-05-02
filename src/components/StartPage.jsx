import ToysList from "./ToysList";
// import { useStore } from "../data/store";

const StartPage = () => {
  //   const sortToysByType = useStore((state) => state.sortToysByType);

  //   const handleSortByType = (toyType) => {
  //     sortToysByType(toyType);
  //   };
  //   const toyTypeFilter = useStore((state) => state.toyTypeFilter);

  return (
    <main>
      <section className="start-section">
        <h2>Kategorier</h2>
        <div className="type-toy-div">
          <button className="type-btn">Hinkset</button>
          <button className="type-btn">Pool</button>
          <button className="type-btn">Sluss</button>
          <button className="type-btn">Alla leksaker</button>
        </div>
      </section>
      <ToysList />
    </main>
  );
};

export default StartPage;
