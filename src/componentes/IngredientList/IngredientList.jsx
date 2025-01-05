import React, { useState } from 'react';
import './IngredientList.css'; // CSS del propio componente


// Funcion que maneja la lista de ingredientes y permite agregar o eliminar ingredientes. Pasamos como props del padre:
const IngredientsList = ({ ingredients, addIngredient, removeIngredient }) => {
// Estado para guardar el valor del nuevo ingrediente
  const [newIngredient, setNewIngredient] = useState('');


  // Función para agregar un ingrediente nuevo
  const handleAddIngredient = () => {

     // Con esto verificamos que el campo no esté vacío para agregar el ingrediente
    if (newIngredient.trim()) {
      addIngredient(newIngredient); // Llama a la función del padre
      setNewIngredient(''); // Limpia el input
    }
  };

  return (
    <div className="ingredients-panel">
      <h3>Lista de Ingredientes</h3>
      <div className="add-ingredient-form">
        <input
          type="text"
          className="ingredient-input"
          placeholder="Añadir ingrediente"
          value={newIngredient}
          onChange={(e) => setNewIngredient(e.target.value)}
        />
        <button className="add-button" onClick={handleAddIngredient}>
          Añadir
        </button>
      </div>
      <ul className="ingredient-list">
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient}
            <button onClick={() => removeIngredient(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;
