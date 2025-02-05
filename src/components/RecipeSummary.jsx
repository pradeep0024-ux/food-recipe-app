import React from "react";
import { useNavigate } from "react-router-dom";
import "./RecipeForm.css"; // Import external CSS

function RecipeSummary() {
  const navigate = useNavigate();
  const recipeData = JSON.parse(localStorage.getItem("recipeData"));

  if (!recipeData) return <p className="container">No recipe found. Please add a recipe first.</p>;

  return (
    <div className="container">
      <h1>Recipe Summary</h1>

      <div className="recipe-card">
        <h2>{recipeData.recipeName}</h2>
        <p><strong>Cook Time:</strong> {recipeData.cookTime} minutes</p>
        <p><strong>Instructions:</strong> {recipeData.cookingInstruction}</p>

        <h3>Ingredients:</h3>
        <ul>
          {recipeData.ingredients.map((ing, index) => (
            <li key={index}>{ing.amount} {ing.unit} {ing.ingredient}</li>
          ))}
        </ul>
      </div>

      <button onClick={() => navigate("/")} className="add-btn">Add Another Recipe</button>
    </div>
  );
}

export default RecipeSummary;
