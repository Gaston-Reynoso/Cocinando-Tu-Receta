import React, { useState } from 'react';
import './Home.css'




const Home = ({ setView }) => {


  return (
    <>
    
    
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Descubre el chef que llevas dentro</h1>
        <p className="hero-description">
         Crea recetas únicas con ingredientes seleccionados y descubre el balance perfecto para tu plato.
         </p>
        <button className="hero-button" onClick={() => setView("create-recipe")}>¡Crea tu receta!</button>
      </div>
    </section>
      
    </>
  )
}

export default Home
