import cart from './assets/carrito.jpg';
import './CardWidget.css'




const CardWidget = () =>{
    return (
        <button className="carrito">
            <img className="imagenCarrito" src={cart} alt='cart-widget'/>
        </button>
    )
}
export default CardWidget