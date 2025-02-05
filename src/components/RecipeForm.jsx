import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RecipeForm.css"; // Import external CSS

function RecipeForm() {
  const [recipeName, setRecipeName] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [cookingInstruction, setCookingInstruction] = useState("");
  const [ingredientInputs, setIngredientInputs] = useState([{ ingredient: "", amount: "", unit: "cup" }]);

  const navigate = useNavigate();

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...ingredientInputs];
    updatedIngredients[index][field] = value;
    setIngredientInputs(updatedIngredients);
  };

  const addIngredientField = () => {
    setIngredientInputs([...ingredientInputs, { ingredient: "", amount: "", unit: "cup" }]);
  };

  const removeIngredientField = (index) => {
    setIngredientInputs(ingredientInputs.filter((_, i) => i !== index));
  };

  const submitRecipe = () => {
    if (recipeName && cookTime && cookingInstruction && ingredientInputs.length) {
      const newRecipe = { recipeName, cookTime, cookingInstruction, ingredients: ingredientInputs };
      localStorage.setItem("recipeData", JSON.stringify(newRecipe));
      navigate("/summary");
    }
  };

  return (
    <div className="container">
      <h1>Add a New Recipe</h1>

      <input value={recipeName} onChange={(e) => setRecipeName(e.target.value)} type="text" placeholder="Recipe Name" />
      <input value={cookTime} onChange={(e) => setCookTime(e.target.value)} type="number" placeholder="Cook Time (minutes)" />
      <textarea value={cookingInstruction} onChange={(e) => setCookingInstruction(e.target.value)} placeholder="Cooking Instructions"></textarea>

      <h2>Ingredients</h2>
      {ingredientInputs.map((ing, index) => (
        <div key={index} className="ingredient-container">
          <input value={ing.ingredient} onChange={(e) => handleIngredientChange(index, "ingredient", e.target.value)} type="text" placeholder="Ingredient" />
          <input value={ing.amount} onChange={(e) => handleIngredientChange(index, "amount", e.target.value)} type="text" placeholder="Amount" />
          <select value={ing.unit} onChange={(e) => handleIngredientChange(index, "unit", e.target.value)}>
            <option value="cup">Cup</option>
            <option value="tbsp">Tbsp</option>
            <option value="tsp">Tsp</option>
            <option value="oz">Oz</option>
            <option value="lb">Lb</option>
          </select>
          <button onClick={() => removeIngredientField(index)} className="remove-btn">✖</button>
        </div>
      ))}
      <button onClick={addIngredientField} className="add-btn">+ Add Ingredient</button>
      <button onClick={submitRecipe} className="submit-btn">Submit Recipe</button>
    </div>
  );
}

export default RecipeForm;
