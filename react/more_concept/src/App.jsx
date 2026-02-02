import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CurrentUserContext = createContext(null);
function App() {
  const [user, setUser] = useState("");
  return (
    <CurrentUserContext value={[user, setUser]}>
      <Form />
    </CurrentUserContext>
  );
}

const Form = () => {
  return (
    <Panel title="Welcome">
      <LoginButton />
    </Panel>
  );
};

const LoginButton = () => {
  const [user, setUser] = useContext(CurrentUserContext);
  if (user !== null) {
    return <p>you logged in as {user.name}</p>;
  }
};
