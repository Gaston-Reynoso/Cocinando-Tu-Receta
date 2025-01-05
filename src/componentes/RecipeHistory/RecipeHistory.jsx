import React, { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard'; // Importamos el componente RecipeCard
import './RecipeHistory.css'; // Estilo del componente

const RecipeHistory = () => {
  const [recipes, setRecipes] = useState([]);

  // Cargar recetas desde LocalStorage al montar el componente
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(savedRecipes);
  }, []);

  // Función para eliminar una receta
  const handleDeleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  };

  return (
    <section className="recipe-history">
      <h2 className="section-title">Recetas Guardadas</h2>
      <div className="recipes-container">
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              recipe={recipe}
              onDelete={() => handleDeleteRecipe(index)}
            />
          ))
        ) : (
          <p className="no-recipes-message">No hay recetas guardadas aún.</p>
        )}
      </div>
    </section>
  );
};

export default RecipeHistory;
