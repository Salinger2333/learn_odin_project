import { useState } from "react";
import "./App.css";
import { Link } from "react-router";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <h2 onClick={() => setCount(count + 1)}>{count}</h2>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
