import { useState,useContext } from "react";
import './count.css'
import { Link } from "react-router-dom";
import { CartProvider } from "../../context/CartContext";

const Counter = ({detailProduct}) =>{
    const [count,setCount] = useState(0)

    const {addItem} = useContext(CartProvider)
    

    const onAdd = ()=>{
        const productToAdd = {...detailProduct,quantity:count}
        addItem(productToAdd)
    }


    const increment = ()=>{
      count < detailProduct.stock && setCount(count + 1)
    }

    const decrement = ()=>{
        count > 0 && setCount(count -1)  
    }

    return(
        <div className="count">

                
                <button onClick={increment}>+</button>
                <h3>{count}</h3>
                <button onClick={decrement}>-</button>
                <button onClick={onAdd} >Agregar Carrito</button>
                <Link to='/cart'>Comprar ahora</Link>
    
        </div>
    )

}
export default Counter