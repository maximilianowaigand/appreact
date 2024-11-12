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

      const totalCompra = () => {
        return cart.reduce((acc,product) => acc + product.quantity * product.price,0)
      }

      const subTotal = (id) => {
        const product = cart.find(prod => prod.id === id);  // Busca el producto por id
            if (product) {
            return product.quantity * product.price;
      }
    }

      const totalItemsInCart = () => {
        return cart.reduce((total, product) => total + product.quantity, 0);
      };
    
      const removeItem =(id)=>{
          const cartWithoutProduct = cart.filter(prod => prod.id !== id)
          setCart(cartWithoutProduct)
      }

    return (
        <CartContext.Provider value={{ addItem, cart,totalItemsInCart,removeItem,isInCart,totalCompra,subTotal }}>

            {children}

        </CartContext.Provider>
        
    ) 
}