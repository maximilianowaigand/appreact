import './ItemDetail.css'

const ItemDetail = ({detailProduct}) =>{

    const {name, img,price} = detailProduct
    return(
        <div className="detailProduct">
               <img src={img} style={{width:150}} alt={name}/>
               <h2>{name}</h2> 
               <p>{price}</p>
        </div>
    )
}

export default ItemDetail