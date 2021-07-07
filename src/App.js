import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
<<<<<<< HEAD
import AddPlants from "./components/AddPlant";
import Plant from "./components/Plant";
=======
import PlantDescription from "./components/PlantDescription";
import MyJungle from "./components/MyJungle";
>>>>>>> dcf89707e7849dca3005174dc3e223c93e875bb0

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
<<<<<<< HEAD
        <Route exact path="/" component={HomePage} />
        <Route path="/add-planta" component={AddPlants} />
        <Route path="/my-jungle" component={Plant} />
=======
        {/* <MyJungle /> */}
        {/* <PlantDescription /> */}
        <Route exact path="/" component={HomePage} />
        <Route path="/guia-plantas/:descricao" component={PlantDescription} />
        <Route path="/my-jungle" component={MyJungle} />
>>>>>>> dcf89707e7849dca3005174dc3e223c93e875bb0
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
