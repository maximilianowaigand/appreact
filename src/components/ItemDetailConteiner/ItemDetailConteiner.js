
import { getProductById } from "../../asyncMock"
import Counter from "../Count/countList"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailConteiner.css'
import { useParams, useNavigate } from "react-router-dom"

const ItemDetailConteiner = () =>{
   const [detailProduct,setDetailProduct] = useState(null)
   const {productId} = useParams()
   const navigate = useNavigate()
    
    
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
        <Counter {...detailProduct}/>
        <button onClick={()=> navigate(-1)}>volver</button>
        </div>
     )
}

export default ItemDetailConteiner