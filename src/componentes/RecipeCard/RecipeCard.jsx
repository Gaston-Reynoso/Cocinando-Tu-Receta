import React from 'react';
import './RecipeCard.css'; // Estilo del componente

const RecipeCard = ({ recipe, onDelete }) => {
  return (
    <div className="recipe-card">
      <h3 className="recipe-title">{recipe.name}</h3>
      <ul className="recipe-ingredients">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="ingredient-item">
            {ingredient}
          </li>
        ))}
      </ul>
      <button className="delete-button" onClick={onDelete}>
        Eliminar
      </button>
    </div>
  );
};

export default RecipeCard;
