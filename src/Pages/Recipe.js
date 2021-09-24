import React from "react";
import { useParams } from "react-router-dom";
import recipes from "../data";

function Recipe() {
  const { id } = useParams();
  const singleRecipe = recipes.filter((recipe) => recipe.id === id);
  return (
    <>
      {singleRecipe.map((item) => (
        <article key={item.id} className="recipe-item">
          <h2 className="recipe-title">{item.title}</h2>
          <img
            className="recipe-img-single"
            src={item.image}
            alt={item.title}
          />
          <div className="no-mobile-group">
            <div className="sub-no-mobile-group">
              <h3>Ingredients</h3>
              <ul className="recipe-ingredient-container">
                {item.ingredients.map((ingredient) => (
                  <li className="recipe-ingredient">{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="sub-no-mobile-group">
              <h3>Instructions</h3>
              <div className="instruction-container">
                <ol>
                  {item.instructions.map((instruction) => (
                    <li className="recipe-instruction">{instruction}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default Recipe;
