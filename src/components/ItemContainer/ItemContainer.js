import '../../App.css'
import { useEffect, useState } from 'react'
import { getCheeses } from '../../mock'
import ItemList from '../ItemList/ItemList'

const ItemContainer = ({greeting}) => {

    const [cheeses, setCheese] = useState ([])
    const [loading, setLoading] = useState (false)


    useEffect(()=> {
        setLoading(loading)
        getCheeses()
            .then((cheeses) => setCheese(cheeses))
            /* .catch(error => console.log(error)) */
    }, [])



    return(
        <section>
            <h1 className='greeting'>{greeting}</h1>
            <ItemList cheeses={cheeses} />
        </section>
    )
}

export default ItemContainer


