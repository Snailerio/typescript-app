import ProductTile from "./components/ProductTile";
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ProductTile loading={true} text="potato" bg="blue" />
        <ProductTile loading={true} text="tomato" bg="red" h="300px" />
        <ProductTile loading={false} text="tomato" />
        <ProductTile loading={false} text="tomato" />
        <ProductTile loading={false} text="tomato" />
        <ProductTile loading={false} text="tomato" />
        <ProductTile loading={false} text="tomato" />
        <ProductTile loading={false} text="tomato" />
        <ProductTile loading={false} text="tomato" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
