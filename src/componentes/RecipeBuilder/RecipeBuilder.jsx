import React, { useState } from 'react';
import './RecipeBuilder.css'; // CSS del propio componente


// permite al usuario construir y guardar una receta con nombre e ingredientes seleccionados. Pasamos las siguientes props
const RecipeBuilder = ({ ingredients, recipeName, updateRecipeName, saveRecipe }) => {

  // Función para guardar la receta
  const handleSaveRecipe = () => {

    // Verifica si el nombre de la receta está vacio.
    if (!recipeName.trim()) {
      alert('Por favor, ingresa un nombre para la receta.');
      return;
    }

    // Verifica si la lista de la receta está vacia.
    if (ingredients.length === 0) {
      alert('No puedes guardar una receta sin ingredientes.');
      return;
    }

    saveRecipe(); // Llama a la función pasada desde el padre para guardar la receta

    
  };

  return (
    <div className="recipe-panel">
      <h3>Construye tu Receta</h3>
      <input
        type="text"
        className="recipe-name-input"
        placeholder="Nombre de la receta"
        value={recipeName}
        onChange={(e) => updateRecipeName(e.target.value)}
      />
      <ul className="selected-ingredients">
        {ingredients.length > 0 ? (
          ingredients.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No hay ingredientes seleccionados aún</li>
        )}
      </ul>
      <button className="save-recipe-button" onClick={handleSaveRecipe}>
        Guardar Receta
      </button>
    </div>
  );
};

export default RecipeBuilder;
