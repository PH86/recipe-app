import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PageHeroSection from "./components/PageHeroSection/PageHeroSection";
import Footer from "./components/Footer/Footer";
import Recipes from "./components/Recipes";
import Recipe from "./Pages/Recipe";
import items from "./data";
import FilterRecipes from "./components/FilterRecipes/FilterRecipes";

const allCatagories = ["all", ...new Set(items.map((item) => item.catagory))];

function App() {
  const [recipeItems, setRecipeItems] = useState();
  // eslint-disable-next-line no-unused-vars
  const [catagories, setCatagories] = useState(allCatagories);
  const [recipeData, setRecipeData] = useState();

  async function fetchRecipes() {
    const res = await fetch(
      "https://recipe-heroku-server.herokuapp.com/recipes"
    );
    const json = await res.json();
    setRecipeData(json);
    setRecipeItems(json);
  }

  useEffect(() => {
    fetchRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterItems = (catagory) => {
    if (catagory === "all") {
      setRecipeItems(recipeData);
      return;
    }
    const newItems = recipeData?.filter((item) => item.catagory === catagory);
    setRecipeItems(newItems);
    console.log(newItems);
  };

  const renderRecipes = (recipeItems) => {
    if (!recipeItems) return null;
    return <Recipes items={recipeItems} />;
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
          {renderRecipes(recipeItems)}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
