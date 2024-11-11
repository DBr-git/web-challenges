export function App(Header, Form, Cardlist) {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}
