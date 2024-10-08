import { useState } from "react";

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
        <div>

            <h3>{count}</h3>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={onAdd}>Agregar Carrito</button>
    
        </div>
    )

}
export default Counter