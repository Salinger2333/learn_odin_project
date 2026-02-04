import { useEffect, useRef, useState } from "react";

export function Counter() {
  let [count, setCount] = useState(0);
  let [delay, setDelay] = useState(1000);

  useInterval(() => {
    setCount(count + 1);
  }, delay);

  const handleChange = (e) => {
    const value = e.target.value;
    setDelay(Number(value));
  };
  return (
    <>
      <h1>{count}</h1>
      <input value={delay} onChange={handleChange}></input>
    </>
  );
}

const useInterval = (callback, delay) => {
  const cbRef = useRef(null);
  useEffect(() => {
    cbRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      let id = setInterval(() => cbRef.current(), delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
