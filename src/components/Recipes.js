import React from "react";
import { Link } from "react-router-dom";

function Recipes({ items }) {
  return (
    <>
      <div className="section">
        {items.map((recipeItem) => {
          const { id, title, image, cuisine, calories, servings } = recipeItem;
          return (
            <article key={id} className="recipe-item">
              <Link to={`/${id}`}>
                <img className="recipe-img" src={image} alt={title} />
              </Link>
              <h2 className="recipe-title">{title}</h2>
              <h4 className="recipe-type">{cuisine}</h4>
              <h4 className="recipe-cal">{calories} calories</h4>
              <h4 className="recipe-serv">Serves {servings}</h4>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default Recipes;
