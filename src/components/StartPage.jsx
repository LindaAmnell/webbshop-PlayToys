import ToysList from "./ToysList";

const StartPage = () => {
  return (
    <main>
      <section className="start-section">
        <h2>Kategorier</h2>
        <div className="type-toy-div">
          <button className="type-btn">Hinkset</button>
          <button className="type-btn">Pool</button>
          <button className="type-btn">Sluss</button>
        </div>
      </section>
      <ToysList />
    </main>
  );
};

export default StartPage;
