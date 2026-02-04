import { useRef, useState } from "react";
import "./AniRef.css";
export const AniRef = () => {
  const boxRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const handleStartAnimation = () => {
    setIsAnimating(true);
    boxRef.current.style.transform = "translateX(100px)";
    setTimeout(() => {
      boxRef.current.style.transform = "";
    }, 1000);
  };

  return (
    <div className="App">
      <div className={`box ${isAnimating ? "is-animating" : ""}`} ref={boxRef}>
        <p>Hello, I'm an animated box!</p>
      </div>
      <button onClick={handleStartAnimation}>Start Animation</button>
    </div>
  );
};
