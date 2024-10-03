
import products from "../../products/productos"
import Counter from "../Count/countList"



const ItemListConteiner = ({greeting}) =>{

    

 return (
    <div>
        <h1>{greeting}</h1>
        { products.map(prod => {
            return (
                <div>
                    <img src={prod.img} alt={prod.name} width='100px' />
                    <p>precio:${prod.price}</p>
                    <p>{prod.name}</p>
                    <Counter/>
                    
                    
                </div>
            )
        })

        }

    </div>
    



 )
}
export default ItemListConteiner