import React, { useState, useContext } from "react";
import { RecipeContext } from "../../../context/Context";
import "../FormStyles.css";

const Ingredients = () => {
  const { recipeData, setRecipeData } = useContext(RecipeContext);
  const [ingredientInput, setIngredientInput] = useState("");
  const addIngredient = () => {
    if (!ingredientInput) return null;
    setRecipeData((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, ingredientInput],
    }));
    setIngredientInput("");
  };

  const removeIngredient = (ingredient) => {
    setRecipeData((prev) => ({
      ...prev,
      ingredients: prev.ingredients.filter((item) => item !== ingredient),
    }));
  };

  return (
    <div className="single-list-container">
      <h2>Ingredients</h2>
      <div className="list-input-container">
        <input
          className="form-input"
          type="text"
          id="ingredientsInput"
          name="ingredientsInput"
          placeholder="Add ingredient"
          value={ingredientInput}
          onChange={(e) => setIngredientInput(e.target.value)}
        />
        <button
          type="button"
          className="add-button"
          onClick={() => addIngredient()}
        >
          add
        </button>
      </div>
      <ul className="list-item-container-ul">
        {recipeData.ingredients.map((ingredient) => {
          return (
            <div key={ingredient} className="list-item-container">
              <li className="list-item-container-li">{ingredient}</li>
              <button
                className="remove-button"
                type="button"
                onClick={() => removeIngredient(ingredient)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Ingredients;
