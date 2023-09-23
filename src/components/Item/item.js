/* import './Item.css' */

const Item = ({id, image,nombre, price,stock }) => {

    return (

        <div class="card">
                <img class="imgProduct" src={image} alt={nombre}/>
                <h3>{nombre}</h3>
                <div class="precio">
                    <p>Precio: {price}</p>
                    <p>Stock Disponible: {stock}</p>
                </div>
                <footer>
                    <button class="boton" id={id}>detalle</button>
                </footer>
            </div>
    )
}

export default Item