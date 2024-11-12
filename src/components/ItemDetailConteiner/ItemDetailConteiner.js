
import Counter from "../Count/countList"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailConteiner.css'
import { useParams, useNavigate } from "react-router-dom"
import { getDoc,doc } from "firebase/firestore"
import { baseDate } from "../../services/firebase"

const ItemDetailConteiner = () =>{
   const [detailProduct,setDetailProduct] = useState(null)
   const {productId} = useParams()
   const navigate = useNavigate()
    
    
    useEffect(()=>{
        const docRef = doc(baseDate, 'products',productId)
        getDoc(docRef).then(response => {
            const data = response.data()
            const productAdapted = {id:response.id, ...data}
            setDetailProduct(productAdapted)
        })
       
    },[productId])
    if (!detailProduct) {
        return <p>Cargando...</p>
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