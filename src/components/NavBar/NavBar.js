import './NavBar.css'
import logo from './assets/logo.jpg'
import CardWidget from '../CardWidget/CardWidget';

const NavBar = () =>{

    return (
        <nav className="navbar"> 
             <div className="nombre"to='/'>
    
        <img className="logo" src={logo} alt='logo'/>
        <h3 >mundo instumentos</h3>
        </div>
            <div className="button">
            <button>guitarras</button>
            <button>Amplificadores</button>
            <button>accesorios</button>
            </div>
            
            <CardWidget/>
        </nav>
        
    );
};

export default NavBar