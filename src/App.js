import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PageHeroSection from "./components/PageHeroSection/PageHeroSection";
import Footer from "./components/Footer/Footer";
import Recipes from "./components/Recipes";
import Loading from "./components/Loading/Loading";
import Recipe from "./Pages/Recipe";
import AddRecipe from "./Pages/AddRecipe";
import FilterRecipes from "./components/FilterRecipes/FilterRecipes";

function App() {
  const [recipeItems, setRecipeItems] = useState();
  // eslint-disable-next-line no-unused-vars

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
  const renderFilter = (recipeItems) => {
    if (!recipeItems) return <Loading />;
    const allCatagories = [
      "all",
      ...new Set(recipeData.map((item) => item.catagory)),
    ];
    return (
      <FilterRecipes filterItems={filterItems} catagories={allCatagories} />
    );
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
        <Route path="/add">
          <AddRecipe />
        </Route>
        <Route path="/:id">
          <Recipe />
        </Route>
        <Route exact path="/">
          {renderFilter(recipeItems)}
          {renderRecipes(recipeItems)}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
