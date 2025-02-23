import React from "react";
import ReactDOM from "react-dom";
import ModelViewer from "./ModelViewer";

const App = () => {
  return (
    <div>
      <h1>MMD to Minecraft Converter</h1>
      <ModelViewer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
