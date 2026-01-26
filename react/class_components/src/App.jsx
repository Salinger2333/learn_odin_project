
import './App.css'
import React, { useState } from 'react';
import FunctionalInput from './components/FunctionalInput';
import ClassInput from './components/ClassInput';


export default function App() {
  const [heading, setHeading] = useState("Magnificent Monkeys")
  const clickHandler = () => {
    setHeading('Mesiiiii')
  }
  return (
    <>
      {/* <FunctionalInput name="Functional component!" />
      <div className="divider" />
      <ClassInput name="Class based component!" /> */}
      <button type='button' onClick={clickHandler}>
        Click Me
      </button>
      <h1>{heading}</h1>
    </>
  );
}