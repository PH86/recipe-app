import React, { useState, useCallback } from "react";

const AddRecipe = () => {
  const [recipeForm, setRecipeForm] = useState({});
  const [ingredientInput, setIngredientInput] = useState("");
  // const [instructionInput, setInstructionInput] = useState("");

  //   "id": "1",
  // "title": "chilli",
  // "image": "https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/2817/letterbox_Veggie-chilli593_copy.jpg",
  // "catagory": "main",
  // "cuisine": "mexican",
  // "servings": 4,
  // "calories": 353,

  const addIngredient = () => {
    if (ingredientInput) {
      setRecipeForm((prev) => ({
        ...prev,
        ingredients: [...prev.ingredients, ingredientInput],
      }));
      setIngredientInput("");
    }
  };

  const removeIngredient = (ingredient) => {
    setRecipeForm((prev) => ({
      ...prev,
      ingredients: prev.ingredients.filter((item) => item !== ingredient),
    }));
  };

  const handleInputOnChange = useCallback(
    (e) => {
      setRecipeForm((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
    [setRecipeForm]
  );
  return (
    <div>
      <h1>Add Recipe</h1>
      <form>
        <input
          className="form-input"
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={recipeForm.title}
          onChange={(e) => handleInputOnChange(e)}
          required
        />
        <input
          className="form-input"
          type="text"
          id="img"
          name="img"
          placeholder="Image URL"
          value={recipeForm.image}
          onChange={(e) => handleInputOnChange(e)}
          required
        />
        <input
          className="form-input"
          type="text"
          id="catagory"
          name="catagory"
          placeholder="Catagory"
          value={recipeForm.catagory}
          onChange={(e) => handleInputOnChange(e)}
          required
        />
        <input
          className="form-input"
          type="text"
          id="cuisine"
          name="cuisine"
          placeholder="Cuisine"
          value={recipeForm.cuisine}
          onChange={(e) => handleInputOnChange(e)}
          required
        />
        <input
          className="form-input"
          type="text"
          id="servings"
          name="servings"
          placeholder="Servings"
          value={recipeForm.servings}
          onChange={(e) => handleInputOnChange(e)}
          required
        />
        <input
          className="form-input"
          type="text"
          id="calories"
          name="calories"
          placeholder="Calories"
          value={recipeForm.calories}
          onChange={(e) => handleInputOnChange(e)}
          required
        />
        <h2>Ingredients</h2>
        <ul className="form-list">
          {recipeForm.ingredients?.map((ingredient) => {
            return (
              <div className="form-list-item-container">
                <li className="form-list-item">{ingredient}</li>
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
        <div className="form-list-subcontainer">
          <input
            className="form-input"
            type="text"
            id="ingredientsInput"
            name="ingredientsInput"
            placeholder="Ingredient"
            value={ingredientInput}
            onChange={(e) => setIngredientInput(e.target.value)}
          />
          <div className="requirment-button-container">
            <button
              type="button"
              className="standard-button"
              onClick={() => addIngredient()}
            >
              add
            </button>
            {/* {  <button
                type="button"
                className="standard-button"
                onClick={() => clearJobFormArray("requirementEssential")}
              >
                clear
              </button>} */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
