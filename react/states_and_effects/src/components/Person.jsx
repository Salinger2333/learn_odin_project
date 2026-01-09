import { useState } from "react";
import { NameInput } from "./NameInput";

export function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Wick",
    age: 100,
  });

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };
  const handleFirstName = (e) => {
    setPerson({ ...person, firstName: e.target.value });
  };
  const handleLastName = (e) => {
    setPerson({ ...person, lastName: e.target.value });
  };
  return (
    <>
      <h1>{person.firstName + " " + person.lastName}</h1>
      <h2>{person.age}</h2>
      <NameInput
        label={"first name"}
        id={"firstName"}
        value={person.firstName}
        onChange={handleFirstName}
      ></NameInput>
      <NameInput
        label={"last name"}
        id={"lastName"}
        value={person.lastName}
        onChange={handleLastName}
      ></NameInput>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}
