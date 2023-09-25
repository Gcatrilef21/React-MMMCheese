import CounterApp from "../ItemCount/ItemCount"


const ItemDetail = ({ name, image, price, stock, description})  => {

    return (
        <div class="card">
            <img class="imgProduct" src={image} alt={name}/>
            <h3>{name}</h3>
            <div class="precio">
                <p>Precio: {price}</p>
                <p>Stock: {stock}</p>
                <p>Descripcion: {description}</p>
            </div>
            <footer>
            <CounterApp initial={0} stock={stock} onAdd={(quantity) => console.log('Productos Agregados', quantity)}/>
            </footer>
        </div>
    )


}

export default ItemDetail