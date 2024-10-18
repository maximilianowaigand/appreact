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
            <NavLink to={`/category/guitarra`} className="button">Guitarra</NavLink> 
            <NavLink to={`/category/amplificador`} className="button">Amplificadores</NavLink>
            <NavLink to={`/category/bajo`} className="button">Bajos</NavLink>
            </div>
            
            <CardWidget/>
        </nav>
        
    );
};

export default NavBar