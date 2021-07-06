import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

import HomePage from "./components/HomePage";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" component={HomePage} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
