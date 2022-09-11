import React, { useState, useContext } from "react";
import { RecipeContext } from "../../../context/Context";
import "../FormStyles.css";

const Instructions = () => {
  const { recipeData, setRecipeData } = useContext(RecipeContext);
  const [instructionInput, setInstructionInput] = useState("");

  const addInstruction = () => {
    if (!instructionInput) return null;
    setRecipeData((prev) => ({
      ...prev,
      instructions: [...prev.instructions, instructionInput],
    }));
    setInstructionInput("");
  };

  const removeInstruction = (instruction) => {
    setRecipeData((prev) => ({
      ...prev,
      instructions: prev.instructions.filter((item) => item !== instruction),
    }));
  };
  return (
    <div className="single-list-container">
      <h2>Instructions</h2>
      <div className="list-input-container">
        <input
          className="form-input"
          type="text"
          id="instructionsInput"
          name="instructionsInput"
          placeholder="Instruction"
          value={instructionInput}
          onChange={(e) => setInstructionInput(e.target.value)}
        />
        <button
          type="button"
          className="add-button"
          onClick={() => addInstruction()}
        >
          add
        </button>
      </div>
      <ol className="list-item-container-ul">
        {recipeData.instructions.map((instruction) => {
          return (
            <div key={instruction} className="list-item-container">
              <li className="list-item-container-ol">{instruction}</li>
              <button
                className="remove-button"
                type="button"
                onClick={() => removeInstruction(instruction)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </ol>
    </div>
  );
};

export default Instructions;
