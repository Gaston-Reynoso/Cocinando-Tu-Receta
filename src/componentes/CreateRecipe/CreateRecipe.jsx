import React, { useState } from 'react'; // Para manejar el estado
import './CreateRecipe.css'; 
import IngredientsList from '../IngredientList/IngredientList';
import RecipeBuilder from '../RecipeBuilder/RecipeBuilder';



const CreateRecipe = () => {
  // Estado para poner los ingredientes actuales que se agregan a la receta
  const [ingredients, setIngredients] = useState([]);
  // Estado para guardar el nombre de la receta
  const [recipeName, setRecipeName] = useState('');

   // Estado para guardar todas las recetas 
  // Inicializamos las recetas obteniendo los datos almacenados en el localStorage
  // Si no hay datos en el localStorage, se inicializa vacío
  const [recipes, setRecipes] = useState(() => {
    
    return JSON.parse(localStorage.getItem('recipes')) || [];
  });


  // Función para agregar un nuevo ingrediente a la lista
  const addIngredient = (ingredient) => {
     // Usamos el estado previo de ingredientes y añadimos el nuevo ingrediente
    setIngredients((prev) => [...prev, ingredient]);
  };

  // Función para eliminar un ingrediente de la lista actual de ingredientes
  const removeIngredient = (indexToRemove) => {
    // Filtramos los ingredientes, salvo el del indice especifico
    setIngredients((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  // Función para actualizar el nombre de la receta
  const updateRecipeName = (name) => {
    // nombre de la receta

    setRecipeName(name);
  };


  // Función para guardar una nueva receta
  const saveRecipe = () => {

    // Validar que el nombre de la receta no esté vacío
    if (!recipeName.trim()) {
      alert('Por favor, ingresa un nombre para la receta.');
      return; // Detiene la ejecución si no hay nombre
    }

    // Validar que la lista de ingredientes no esté vacia
    if (ingredients.length === 0) {
      alert('No puedes guardar una receta sin ingredientes.');
      return; // Detiene la ejecución si no hay ingrediente
    }

    const newRecipe = { name: recipeName, ingredients };

    // Actualizar el estado local
    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);

    // Guardar en localStorage
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));

    // Limpiar los campos
    setRecipeName('');
    setIngredients([]);

    alert('¡Receta guardada con éxito!');
  };

  return (
    <section className="create-recipe">
      <h2 className="section-title">¡Crea tu receta!</h2>
      <div className="create-recipe-container">
        <IngredientsList
          ingredients={ingredients}
          addIngredient={addIngredient}
          removeIngredient={removeIngredient}
        />
        <RecipeBuilder
          ingredients={ingredients}
          recipeName={recipeName}
          updateRecipeName={updateRecipeName}
          saveRecipe={saveRecipe}
        />
      </div>
    </section>
  );
};


export default CreateRecipe