import { Link } from "react-router-dom"

const Item = ({img,name,price,id })=>{
    return(
        <div>
            <img src={img} style={{width:100}} alt={name}/>
            <h2>{name}</h2>
            <h3>{price}</h3>
            <footer>
                <Link to={`/detail/${id}`}>ver detalle</Link>

            </footer>
        </div>

    )


}
export default Item