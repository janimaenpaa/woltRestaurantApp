import React, { useState, useEffect } from "react";

import axios from "axios";

import "./App.css";
import "typeface-roboto";

import Restaurants from "./components/Restaurants";
import RestaurantSorter from "./components/RestaurantSorter";

// Sorts a list alphabetically in ascending order
function compareAsc(a, b) {
  const restaurantA = a.name.toUpperCase();
  const restaurantB = b.name.toUpperCase();

  let comparison = 0;
  if (restaurantA > restaurantB) {
    comparison = 1;
  } else if (restaurantA < restaurantB) {
    comparison = -1;
  }
  return comparison;
}

// Sorts a list alphabetically in descending order
function compareDesc(a, b) {
  const restaurantA = a.name.toUpperCase();
  const restaurantB = b.name.toUpperCase();

  let comparison = 0;
  if (restaurantA > restaurantB) {
    comparison = 1;
  } else if (restaurantA < restaurantB) {
    comparison = -1;
  }
  return comparison * -1;
}

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isAscending, setIsAscending] = useState(false);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/restaurants").then(response => {
      console.log("promise fulfilled");
      setRestaurants(response.data);
    });
  }, []);
  console.log("render", restaurants.length, "restaurants");

  const handleSorting = () => {
    if (!isAscending) {
      setRestaurants(restaurants.sort(compareAsc));
      setIsAscending(true);
    } else {
      setRestaurants(restaurants.sort(compareDesc));
      setIsAscending(false);
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <h2>WoltRestaurantApp</h2>
      </div>
      <RestaurantSorter
        isAscending={isAscending}
        handleSorting={handleSorting}
      />
      <Restaurants restaurants={restaurants} />
    </div>
  );
};

export default App;
