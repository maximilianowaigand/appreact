import './ItemDetail.css'

const ItemDetail = ({name,img,price,stock}) =>{

    return(
        <div className="detailProduct">
               <img src={img} style={{width:150}} alt={name}/>
               <h2>{name}</h2> 
               <p>${price}</p>
               <p>Stock:{stock}</p>
        </div>
    )
}

export default ItemDetail