import React, { useState } from 'react';
import CreateRecipe from "./componentes/CreateRecipe/CreateRecipe"
import Header from "./componentes/Header/Header"
import Home from "./componentes/Home/Home"
import RecipeHistory from './componentes/RecipeHistory/RecipeHistory';
import Footer from './componentes/Footer/Footer';

const App = () => {

  const [currentView, setCurrentView] = useState("home");

  return (
    <>
      <header>
        {/* para que sea la seccion raiz */}
      <Header setView={setCurrentView} /> 
      </header>
      
      
      <main>
       
        {currentView === "home" && <Home setView={setCurrentView} />}
        {currentView === "create-recipe" && <CreateRecipe />}
        {currentView === "recipe-history" && <RecipeHistory />}
        
      </main>
      
      <footer>
      <Footer/>
      </footer>
      
      
    </>
  )
}

export default App
