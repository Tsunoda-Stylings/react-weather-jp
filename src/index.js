import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="渋川" />

        <p className="info mt-3">
          このページは
          <a
            href="https://github.com/Tsunoda-Stylings/Weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            オープンソースコード
          </a>
          を使用して
          <a
            href="https://www.linkedin.com/in/jasmine-tsunoda89/?locale=ja_JP"
            target="_blank"
            rel="noopener noreferrer"
          >
            角田ジャスミン
          </a>
          &nbsp;によって作成およびコーディングされました。
        </p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
