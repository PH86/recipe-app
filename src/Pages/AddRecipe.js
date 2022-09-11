import React, { useCallback, useContext } from "react";
import "./AddRecipe.css";
import { RecipeContext } from "../context/Context";
import Ingredients from "../components/Form/Ingrdients/Ingredients";
import Instructions from "../components/Form/Instructions/Instructions";

const AddRecipe = () => {
  const { recipeData, setRecipeData } = useContext(RecipeContext);

  const handleInputOnChange = useCallback(
    (event) => {
      setRecipeData((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    },
    [setRecipeData]
  );

  return (
    <div className="form-container">
      <h1>Add Recipe</h1>
      <form className="form-list-container">
        <div className="first-container">
          <label className="form-label">
            Title
            <input
              className="form-input"
              type="text"
              id="title"
              name="title"
              value={recipeData.title}
              onChange={(e) => handleInputOnChange(e)}
              required
            />
          </label>
          <label className="form-label">
            Catagory
            <input
              className="form-input"
              type="text"
              id="catagory"
              name="catagory"
              placeholder="Catagory"
              value={recipeData.catagory}
              onChange={(e) => handleInputOnChange(e)}
              required
            />
          </label>
        </div>
        <div className="second-container">
          <label className="form-label">
            Cuisine
            <input
              className="form-input"
              type="text"
              id="cuisine"
              name="cuisine"
              placeholder="Cuisine"
              value={recipeData.cuisine}
              onChange={(e) => handleInputOnChange(e)}
              required
            />
          </label>
          <label className="form-label">
            Servings
            <input
              className="form-input"
              type="text"
              id="servings"
              name="servings"
              placeholder="Servings"
              value={recipeData.servings}
              onChange={(e) => handleInputOnChange(e)}
              required
            />
          </label>
          <label className="form-label">
            Calories
            <input
              className="form-input"
              type="text"
              id="calories"
              name="calories"
              placeholder="Calories"
              value={recipeData.calories}
              onChange={(e) => handleInputOnChange(e)}
              required
            />
          </label>
        </div>
        <label className="form-label">
          Image URL
          <input
            className="form-input"
            type="text"
            id="image"
            name="image"
            placeholder="Image URL"
            value={recipeData.image}
            onChange={(e) => handleInputOnChange(e)}
            required
          />
        </label>
        <div className="list-container">
          <Ingredients />
          <Instructions />
        </div>
        <button
          className="submit-button"
          type="button"
          onClick={() => console.log(recipeData)}
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
