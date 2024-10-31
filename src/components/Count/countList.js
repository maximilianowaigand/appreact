import { useState, useContext } from "react";
import './count.css'
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { NotificationContext } from "../../notification/NotificationService";


const Counter = ({id,name,price,stock}) =>{
    const [count,setCount] = useState(1)

    const {addItem,isInCart} = useContext(CartContext)
    
    const {setNotification} = useContext(NotificationContext)
    

    const onAdd = (quantity)=>{
        const productToAdd = {id,name,price,quantity}
        addItem(productToAdd)
        if (isInCart(id)) {
            setNotification('info', `Ya tienes ${name} en el carrito`);
        } else {
            addItem(productToAdd);
            setNotification('success', `Se agregó al carrito ${quantity} ${name}`);
        }
    }
        

    const increment = ()=>{
      count < stock && setCount(count + 1)
    }

    const decrement = ()=>{
        count > 1 && setCount(count -1)  
    }

    return(
        <div className="count">

                
                <button onClick={increment}>+</button>
                <h3>{count}</h3>
                <button onClick={decrement}>-</button>
                <button onClick={()=>onAdd(count)} >Agregar Carrito</button>
                <Link to='/cart'>Comprar ahora</Link>
    
        </div>
    )

}
export default Counter