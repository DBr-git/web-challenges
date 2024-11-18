import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Article Title</h2>
      <lable htmlFor="article__input">Article Input</lable>
      <input id="article__input"></input>
      <a className="article__link" href="https://github.com/DBr-git">
        Text content
      </a>
    </article>
  );
}
