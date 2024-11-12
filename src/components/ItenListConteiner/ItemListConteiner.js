import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList.js"
import { useParams } from "react-router-dom"
import { getDocs, collection, query,where } from "firebase/firestore"
import { baseDate } from "../../services/firebase/index.js"






const ItemListConteiner = ({greeting}) =>{

   const [products, setProducts] = useState([])
   const [loading, setLoading] = useState(true)

   const {categoryId} = useParams()

    useEffect(()=>{
      setLoading(true)

      const collectionRef = categoryId 
      ? query(collection(baseDate, 'products'),where('category','==',categoryId))
      : collection(baseDate, 'products')

      getDocs(collectionRef).then(response =>{
         const productAdapted = response.docs.map(doc => {
            const data = doc.data()


            return {id:doc.id,...data}
         })

         setProducts(productAdapted)

 }).finally(()=>{
      setLoading(false)
 })
    },[categoryId])


    if(loading){
      return <h1>cargando...</h1>
    }


 return (
    <div >
        <h1>{greeting}</h1>
        
        <ItemList products={products}/>
    </div>
    

 )
}
export default ItemListConteiner