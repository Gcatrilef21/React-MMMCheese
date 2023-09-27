import { useState, useEffect } from "react";
import { getCheeses } from '../../../mock'
import { Link } from 'react-router-dom'
import './cheeses.css'

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

    if (loading) return <p>Cargando Quesos...</p>

    return (
        <section className="load-product">
            <h1>Nuestros Productos</h1>
            {cheeses.map (({id, image,name,price,stock})=> (
            <>
            <div key={id} className="card">
                <img className="imgProduct" src={`/images/${image}`} alt={name}/>
            <h3>{name}</h3>
            <div className="card-info">
                <p>Precio: {price}</p>
                <p>Stock: {stock}</p>
            </div>
            <footer>
                <Link to ={`/products/${id}`} className="card-footer">detalle...</Link>
            </footer>
            </div>
            </>
        ))}
    </section>
    )
}

export default Products