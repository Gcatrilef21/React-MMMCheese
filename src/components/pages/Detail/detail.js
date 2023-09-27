import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getIdCheeses } from "../../../mock"


const Detail = () => {

    const [cheese, setCheese] = useState (null)

    const { idCheese } = useParams()

    useEffect (()=>{

        getCheesesById(idCheese)
            .then(cheese => {setCheese (cheese)} )  
            .catch(err => console.error(err))

    },[idCheese])
    

    return (
        <section>
            <h1>Detalle</h1>
            {cheese.map (({id, image,name,price,stock})=> (
            <div key={id} class="card">
            <img className="imgProduct" src={image} alt={name}/>
            <h3>{name}</h3>
            <div className="precio">
                <p>Precio: {price}</p>
                <p>Stock: {stock}</p>
            </div>
            <footer>
            <CounterApp initial={0} stock={stock} onAdd={(quantity) => console.log('Productos Agregados', quantity)}/>
            </footer>
        </div>
        ))}
    </section>

        
    )
    
}

export default Detail