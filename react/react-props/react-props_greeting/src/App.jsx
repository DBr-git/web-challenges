import "./styles.css";

export default function App() {
  return <Greeting name="Galadriel" />;
}

function Greeting({ name }) {
  return name === "Niklas" ? <h1>Hello, Coach!</h1> : <h1>Hello, {name}!</h1>;
}
