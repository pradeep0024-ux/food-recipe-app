import React from "react";
import { useNavigate } from "react-router-dom";
import "./RecipeForm.css"; // Import external CSS

function RecipeSummary() {
  const navigate = useNavigate();
  const recipes = JSON.parse(localStorage.getItem("recipeData")) || [];

  if (recipes.length === 0) {
    return <p className="container">No recipes found. Please add a recipe first.</p>;
  }
  
  return (
    <div className="container">
      <h1>Recipe Summary</h1>

      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-card">
          <h2>{recipe.recipeName}</h2>
          <p><strong>Cook Time:</strong> {recipe.cookTime} minutes</p>
          <p><strong>Instructions:</strong> {recipe.cookingInstruction}</p>

          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>{ing.amount} {ing.unit} {ing.ingredient}</li>
            ))}
          </ul>
        </div>
      ))}

      <button onClick={() => navigate("/")} className="add-btn">Add Another Recipe</button>
    </div>
  );
}

export default RecipeSummary;
