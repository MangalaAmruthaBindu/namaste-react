const heading = React.createElement(
  "h1",
  { id: "heading" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1"),
    React.createElement("h1", {}, "I'm h2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
