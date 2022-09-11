import React, { createContext, useState } from "react";

export const RecipeContext = createContext({});

export const RecipeContextProvider = ({ children }) => {
  const [recipeData, setRecipeData] = useState({
    title: "",
    image: "",
    cuisine: "",
    servings: "",
    calories: "",
    ingredients: [],
    instructions: [],
  });
  const value = { recipeData, setRecipeData };
  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};
