import Item from "../Item/item"


const ItemList = ({cheeses}) => {

    return (
        <div>
            {cheeses.map(ches => <Item key={ches.id} {...ches} /> )}
        </div>
    )
}

export default ItemList