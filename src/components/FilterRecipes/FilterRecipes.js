import React from "react";
import AddButton from "../AddButton/AddButton";

function FilterRecipes({ catagories, filterItems }) {
  return (
    <>
      <div className="btn-container">
        {catagories.map((catagory, index) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => filterItems(catagory)}
            >
              {catagory}
            </button>
          );
        })}
        <AddButton />
      </div>
    </>
  );
}

export default FilterRecipes;
