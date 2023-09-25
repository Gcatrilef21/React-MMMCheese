/* import './Item.css' */

const Item = ({ image,name, price,stock }) => {

    return (

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
    )
}

export default Item