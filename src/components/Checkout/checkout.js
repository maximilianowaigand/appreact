import { useContext,useState } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc,getDocs, collection,query,where,documentId,writeBatch } from "firebase/firestore"
import { baseDate } from "../../services/firebase"
import { NotificationContext } from "../../notification/NotificationService"


const Checkout = () =>{

   const { cart,totalCompra,clearCart } = useContext(CartContext)
   const {setNotification} = useContext(NotificationContext)
   const [orderId, setOrderId] = useState(null)
   const [loading, setLoading] = useState(false)

   const createOrder = async () =>{
      
      setLoading(true)
      try{
         const objOrder = {
      buyer:{
         name:"maxi waigand",
         phone: "123456",
         mail:"maxiwaigand@gamil.com"
      },
      items:cart,
      total: totalCompra()

   }
   const batch = writeBatch(baseDate)

   const outOfStock = []

   const ids = cart.map(prod => prod.id)

   const productsRef = collection(baseDate, 'products')

   const productsAddedFromFirestone = await getDocs(query(productsRef,where(documentId(), 'in',ids)))

   const { docs } = productsAddedFromFirestone

   docs.forEach(doc => {

      const dataDoc = doc.data()
      const stockBaseDato = dataDoc.stock

      const productAddedToCart = cart.find(prod => prod.id === doc.id)
      const prodQuantity = productAddedToCart?.quantity

      if(stockBaseDato >= prodQuantity){
         batch.update(doc.ref, {stock: stockBaseDato - prodQuantity})
      }else{
         outOfStock.push({ id:doc.id, ...dataDoc})

      }
   })

   if(outOfStock.length === 0){

      await batch.commit()

      const orderRef  = collection(baseDate, 'orders')

      const orderAdded = await addDoc( orderRef, objOrder)

      clearCart()

      setNotification('success',`Su compra se genero exitosamente.` )

      setOrderId(orderAdded.id)

      
   }else{
      setNotification('error', 'Hay productos fuera de stock')
   }

   

      }catch(error){
         setNotification('error', 'Ocurrió un error al procesar su compra. Inténtelo nuevamente.')
      } finally {
         setLoading(false)
      }

      


   }

   if(loading){
      return(
         <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
          </div>
      )
      
    }
   
   
   
   
   return (
    <div> 
      <h1>Finalizar Compra</h1>
      <button onClick={createOrder}>generar orden</button>
      {orderId && <h4>Su número de comprobante es: {orderId}</h4>}
    </div>
   )
} 

export default Checkout