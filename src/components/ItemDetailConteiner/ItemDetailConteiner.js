
import { getProductById } from "../../asyncMock"
import Counter from "../Count/countList"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailConteiner.css'
import { useParams } from "react-router-dom"

const ItemDetailConteiner = () =>{
   const [detailProduct,setDetailProduct] = useState({})
   const {productId} = useParams()
    
    
    useEffect(()=>{
        getProductById(productId).then(response =>{
                setDetailProduct(response)
        })
    },[productId])
    if (!detailProduct) {
        return <p>Cargando...</p>;  // Mientras se carga el producto, mostramos esto
    }

       
    return(
        <div className="ItemDetailConteiner">
         <ItemDetail {...detailProduct}/>
            

        <Counter detailProduct={detailProduct}/>
        </div>
     )
}

export default ItemDetailConteiner