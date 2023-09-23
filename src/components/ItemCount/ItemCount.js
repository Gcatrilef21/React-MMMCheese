
import { useState } from "react"

const CounterApp = ({initial, stock, onAdd}) => {

    const [ quantity, setQuantity ] = useState ( initial );

    const increse = () => {
        if (quantity < stock){
            setQuantity ( quantity + 1 )
        }
    };
    const decrease = () => {
        if (quantity > 1){
            setQuantity ( quantity - 1 )
        }
    };

    return (
        <>
            <div className="counter">
                <button className="button" onClick={decrease}> - </button>
                <h4>{quantity}</h4>
                <button className="button" onClick={increse}> + </button>
            </div>
            <div>
            <button className="button" onClick={() => onAdd(quantity)} disabled = {!stock} > Add to Cart </button>
            </div>
        </>
    )

}
export default CounterApp