import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={20} valueB={10} />;
}

function Sum({ valueA, valueB }) {
  return valueA + valueB;
}
