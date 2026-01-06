import { useState } from "react";
import "./App.css";
import { Greeting, Test } from "./components/Greeting.jsx";
import { Animals } from "./components/Animals.jsx";

function List(props) {
  return (
    <>
      {!props.animals && <div className="load">loading</div>}
      {props.animals && props.animals.length > 0 && (
        <ul>
          {props.animals.map((animal) => {
            return animal.startsWith("L") && <li key={animal}>{animal}</li>;
          })}
        </ul>
      )}
      {props.animals && props.animals.length === 0 && (
        <div>There are no animals in the list!</div>
      )}
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <>
      <p>start learn React</p>
      <Greeting></Greeting>
      <Test></Test>
      <h1>Some Animals</h1>
      <List animals={animals}></List>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
