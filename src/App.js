import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={HomePage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
