import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList.js"
import { useParams } from "react-router-dom"
import { getCategoryById } from "../../asyncMock"







const ItemListConteiner = ({greeting}) =>{

   const [products, setProducts] = useState([])
   const [loading, setLoading] = useState(true)

   const {categoryId} = useParams()

    useEffect(()=>{
      setLoading(true)

      const asyncFunction = categoryId ? getCategoryById : getProducts

 asyncFunction(categoryId).then(response =>{
         setProducts(response)

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