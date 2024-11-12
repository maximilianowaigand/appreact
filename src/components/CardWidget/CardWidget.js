
import './CardWidget.css'
import { useContext } from 'react'
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';







const CardWidget = () =>{

    const { totalItemsInCart } = useContext(CartContext);
    
    
    
    

    return (
            <Link to={`/cart`} className="carrito">
            <img className="imagenCarrito" src='/images/carrito.jpg' alt='cart-widget'/>
            <div>{totalItemsInCart()}</div>
            </Link>
          
        
    )
}
export default CardWidget