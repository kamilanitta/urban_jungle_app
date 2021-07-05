import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

import PlantCard from "./PlantCard";

class HomePage extends Component {
  state = {
    categoryPlants: [],
  };

  render() {
    return <PlantCard />;
  }
}

export default HomePage;
