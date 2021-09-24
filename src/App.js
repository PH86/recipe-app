import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PageHeroSection from "./components/PageHeroSection";
import Recipes from "./components/Recipes";
import Recipe from "./Pages/Recipe";
import items from "./data";
import FilterRecipes from "./components/FilterRecipes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const allCatagories = ["all", ...new Set(items.map((item) => item.catagory))];

function App() {
  const [recipeItems, setRecipeItems] = useState(items);
  // eslint-disable-next-line no-unused-vars
  const [catagories, setCatagories] = useState(allCatagories);

  const filterItems = (catagory) => {
    if (catagory === "all") {
      setRecipeItems(items);
      return;
    }
    const newItems = items.filter((item) => item.catagory === catagory);
    setRecipeItems(newItems);
  };

  return (
    <Router>
      <Navbar />
      <PageHeroSection
        src="https://crossroads.ca/wp-content/uploads/2020/06/cooking-banner-d.jpg"
        recipeName="Welcome"
        calories="Go Beyond"
      />
      <Switch>
        <Route path="/:id">
          <Recipe />
        </Route>
        <Route exact path="/">
          <FilterRecipes filterItems={filterItems} catagories={catagories} />
          <Recipes items={recipeItems} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
