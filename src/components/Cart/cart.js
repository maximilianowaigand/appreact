import { CartContext } from "../../context/CartContext"
import { useContext } from "react"


const Cart = ()=>{
    
    const { cart,totalCompra,removeItem,subTotal } = useContext(CartContext);
    
    return(
        <div>
            
             <h2>Carrito de Compras</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>Cantidad: {product.quantity}</p>
              <p>Precio: ${product.price}</p>
              <p>subtotal:{subTotal(product.id)}</p>
              <button onClick={() => removeItem(product.id)}>borrar producto</button>
              
            </li>
          ))}
          <h2>total de la compra:{totalCompra()} </h2>
        </ul>
      ) : (
        <p>El carrito está vacío.</p>
      )}
        </div>

    )
}

export default Cart