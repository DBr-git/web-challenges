import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("You clicked me!");
  }
  return <Button color="blue" text="Hello World" onClick={handleClick} />;
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      style={{ backgroundColor: color }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
