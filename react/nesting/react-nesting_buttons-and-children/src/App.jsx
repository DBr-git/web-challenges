import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Press Me</Button>
      <Button>Im a Button</Button>
      <Button>Me too</Button>
      <Button>Dont forget me</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
