
import './CardWidget.css'
import { useContext } from 'react'
import { CartContext } from "../../context/CartContext";







const CardWidget = () =>{

    const { totalItemsInCart } = useContext(CartContext);
    
    console.log( totalItemsInCart() )
    
    

    return (
        <button className="carrito">
            <img className="imagenCarrito" src='/images/carrito.jpg' alt='cart-widget'/>
            <div>{totalItemsInCart()}</div>
        </button>
    )
}
export default CardWidget