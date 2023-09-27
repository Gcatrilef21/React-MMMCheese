import { useEffect, useState } from "react"
import { getIdCheeses } from "../../mock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"



const ItemDetailContainer = ()=> {

    const [cheese, setCheese] = useState (null)

    const {idCheese} = useParams()

    useEffect(() => {
        getIdCheeses(+idCheese)
            .then(resp => {setCheese(resp)})
            .catch(err => { console.error(err) })
    },[idCheese])

    return(
        <section>
            <ItemDetail {...cheese}/>
        </section>
    )

}

export default ItemDetailContainer