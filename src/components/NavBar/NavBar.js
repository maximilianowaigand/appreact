import './NavBar.css'
import logo from './assets/logo.jpg'
import CardWidget from '../CardWidget/CardWidget';
import { NavLink } from 'react-router-dom';


const NavBar = () =>{

    return (
        <nav className="navbar"> 
             <NavLink className="nombre"  to='/'>
                <img className="logo" src={logo} alt='logo'/>
                <h3>Mundo Instrumentos</h3>
                    
             </NavLink> 
    
        
            <div className="button-container">
            <NavLink to={`/category/guitarra`}>Guitarra</NavLink> 
            <NavLink to={`/category/amplificador`}>Amplificadores</NavLink>
            <NavLink to={`/category/bajo`}>Bajos</NavLink>
            </div>
            
            <CardWidget/>
        </nav>
        
    );
};

export default NavBar