import { useState } from "react";
import './count.css'

const Counter = ({onAdd}) =>{
    const [count,setCount] = useState(0)

    const increment = ()=>{
            setCount(count + 1)
    }

    const decrement = ()=>{
        if(count > 0){
            setCount(count -1)
        }
        
    }

    return(
        <div className="count">

                
                <button onClick={increment}>+</button>
                <h3>{count}</h3>
                <button onClick={decrement}>-</button>
                <button onClick={onAdd}>Agregar Carrito</button>
    
        </div>
    )

}
export default Counter