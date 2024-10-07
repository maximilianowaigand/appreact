const Item = ({img,name,price })=>{
    return(
        <div>
            <img src={img} alt={name}/>
            <h2>{name}</h2>
            <h3>{price}</h3>
        </div>

    )


}
export default Item