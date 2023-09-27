const cheeses = [
    {
        id: 1,
        image: 'gouda.png',
        name: 'Gouda',
        price: 5.990,
        stock: 16,
        description: 'Queso weno',
        country:'Paises Bajos'
    },  
    {
        id: 2,
        image: 'edam.png' ,
        name: 'Edam',
        price: 9.990,
        stock: 20,
        country:'Paises Bajos'
    }, {
        id: 3,
        image: 'maasdam.png',
        name: 'Maasdam',
        stock: 15,
        price: 10.990,
        country: 'Países Bajos'
    }, {
        id: 4,
        image: 'brie.png',
        name: 'Brie',
        price: 15.990,
        stock: 10,
        country: 'Francia'
    }, {
        id: 5,
        image:'camembert.png',
        name: 'Camembert',
        price: 18.990,
        stock: 4,
        country: 'Francia'
    }, {
        id: 6,
        image:'roquefort.png',
        name: 'Roquefort',
        stock: 10,
        price: 23.990,
        country: 'Francia'
    }, {
        id: 7,
        image: 'tulum.png',
        name: 'Tulum',
        price: 14.990,
        stock: 5,
        country: 'Turco'
    }, {
        id: 8,
        image: 'emmental.png',
        name: 'Emmental',
        price: 9.990,
        stock: 12,
        country: 'Suizo'
    }, {
        id: 9,
        image: 'appenzeller.png',
        name: 'Appenzeller',
        price: 15.990,
        country: 'Suizo'
    }, {
        id: 10,
        image: 'cheddar.png',
        name: 'Cheddar',
        stock: 20,
        price: 14.990,
        country: 'Ingles'
    }, {
        id: 11,
        image: 'stilton.png',
        name: 'Stilton',
        stock: 8,
        price: 15.990,
        country: 'Ingles'
    }, {
        id: 12,
        image: 'feta.png',
        name: 'Feta',
        price: 5.990,
        stock: 8,
        country: 'Griego'
    }
]


export const getCheeses = () =>{

    return new Promise ((resolve) => {
        setTimeout (() => {
            return resolve (cheeses)
        },1500)
    })
}

export const getCheesesById = (id) =>{

    return new Promise ((resolve, reject) => {
        setTimeout(()=> {
            console.log({idCheese})
            const cheese = cheeses.find((chees)=> chees.id === id) 
            if (cheese) return resolve (cheese)
            return reject({ error: 'No Encontrado' })
        }, 1500)
    })
    
}