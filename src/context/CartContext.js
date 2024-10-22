import { useState,createContext } from "react";

export const CartContext = createContext()


export const CartProvider = ({children}) =>{

    const [cart,setCart] = useState([])

    const addItem = (productToAdd) =>{
      if(!isInCart(productToAdd.id)){
        setCart([...cart,productToAdd])
      }
    }

    const isInCart = (id) =>{
      return cart.some(prod => prod.id === id)
    }
      console.log(cart)

      const totalItemsInCart = () => {
        return cart.reduce((total, product) => total + product.quantity, 0);
      };
    
    return (
        <CartContext.Provider value={{ addItem, cart,totalItemsInCart }}>

            {children}

        </CartContext.Provider>
        
    ) 
}