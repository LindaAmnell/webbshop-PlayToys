import ToysList from "./ToysList";
import { useStore } from "../data/store";

const StartPage = () => {
  const selectToysCategory = useStore((state) => state.selectToysCategory);

  const handleSortByType = (type) => {
    selectToysCategory(type);
  };

  return (
    <main>
      <section className="start-section">
        <h2>Kategorier</h2>
        <div className="type-toy-div">
          <button
            className="type-btn"
            onClick={() => handleSortByType("hinkset")}>
            Hinkset
          </button>
          <button className="type-btn" onClick={() => handleSortByType("pool")}>
            Pool
          </button>
          <button
            className="type-btn"
            onClick={() => handleSortByType("sluss")}>
            Sluss
          </button>
        </div>
      </section>
      <ToysList />
    </main>
  );
};

export default StartPage;
