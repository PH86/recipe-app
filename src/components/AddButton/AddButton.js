import React from "react";
import { useHistory } from "react-router-dom";

const AddButton = () => {
  let history = useHistory();

  const handleClick = () => history.push("/add");
  return (
    <button type="button" className="btn" onClick={handleClick}>
      Add Recipe
    </button>
  );
};

export default AddButton;
