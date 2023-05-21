import List from "./List";
import data from "./data";
import { useState } from "react";

const App = () => {
  const [people, setPeople] = useState(data);

  const clickHandler = () => {
    setPeople([]);
  };

  return (
    <>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button className="btn btn-block" type="button" onClick={clickHandler}>
          Clear List
        </button>
      </section>
    </>
  );
};
export default App;
