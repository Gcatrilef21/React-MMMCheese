import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getIdCheeses } from "../../mock"



const ItemDetailContainer = ()=> {

    const [cheese, setCheese] = useState ()

    useEffect(() => {
        getIdCheeses()
            .then(resp => {setCheese(resp)})
            .catch(err => { console.error(err) })
    },[])

    return(
        <section>
            <ItemDetail {...cheese}/>
        </section>
    )

}

export default ItemDetailContainer