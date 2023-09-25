import { useState, useEffect } from "react";
import { getCheeses } from '../../../mock'

const Products = () =>{

    const [cheeses, setCheese] = useState ([])
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        setLoading(loading)
        getCheeses()
            .then((cheeses) => setCheese(cheeses))
            /* .catch(error => console.log(error)) */
            /* .finally(()) */
    }, [])



    return (
        <section>
            {cheeses.map (({image,name,price,stock})=> (
            <>
            <h1>Nuestros Productos</h1>
            <div class="card">
                <img class="imgProduct" src={image} alt={name}/>
            <h3>{name}</h3>
            <div class="precio">
                <p>Precio: {price}</p>
                <p>Stock Disponible: {stock}</p>
            </div>
            <footer>
                <button className="boton">detalle</button>
            </footer>
            </div>
            </>
        ))}
    </section>
    )
}

export default Products