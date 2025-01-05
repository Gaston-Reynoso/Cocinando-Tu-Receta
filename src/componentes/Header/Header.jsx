import './Header.css'
// import logo from './assets/LOGO.jpg'

const Header = ({ setView }) => {  //Le pasamos el estado para navegar entre las distintas secciones


    
  return (
    <>
      <header>
        <nav>
          <div className="container-nav">
            <div className="logo">
                {/* <img src={logo} alt="" /> */}
                <h1 onClick={() => setView("home")}>Cocinando tu Receta</h1> {/* Poner icono?? */}
            </div> 
            <div className='nav-bar'>                
                <ul className='items'>
                    <li onClick={() => setView("home")} className='item'>Home</li>
                    <li onClick={() => setView("create-recipe")} className='item'>Crear Receta</li>
                    <li onClick={() => setView("recipe-history")} className='item'>Recetas</li>
                </ul>
            </div>   
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
