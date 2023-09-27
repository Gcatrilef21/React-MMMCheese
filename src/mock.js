const cheeses = [
    {
        id: 1,
        image: 'gouda.png',
        name: 'Gouda',
        price: 5.990,
        stock: 6,
        description: 'Queso weno',
        country:'Paises Bajos'
    }/*,  {
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
        price: 23.990,
        country: 'Francia'
    }, {
        id: 7,
        image: 'tulum.png',
        name: 'Tulum',
        price: 14.990,
        country: 'Turco'
    }, {
        id: 8,
        image: 'emmental.png',
        name: 'Emmental',
        price: 9.990,
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
        price: 14.990,
        country: 'Ingles'
    }, {
        id: 11,
        image: 'stilton.png',
        name: 'Stilton',
        price: 15.990,
        country: 'Ingles'
    }, {
        id: 12,
        image: 'feta.png',
        name: 'Feta',
        price: 5.990,
        country: 'Griego'
    }, {
        id: 13,
        image: 'parmesano.png',
        name: 'Parmesano',
        price: 5.990,
        country: 'Italiano'
    }, {
        id: 14,
        image: 'mozzarella.png',
        name: 'Mozzarella',
        price: 12.590,
        country: 'Italiano'
    }, {
        id: 15,
        image: 'gorgonzola.png',
        name:   'Gorgonzola',
        price: 15.990,
        country: 'Italiano'
    }, {
        id: 16,
        image: 'mascarpone.png',
        name: 'Mascarpone',
        price: 16.990,
        country: 'Italiano'
    }, {
        id: 17,
        image: 'provolone.png',
        name: 'Provolone',
        price: 19.990,
        country: 'Italiano'
    }, {
        id: 18,
        image: 'cabrales.png',
        name: 'Cabrles',
        price: 10.990,
        country: 'Español'
    }, {
        id: 19,
        image: 'manchego.png',
        name: 'Manchego',
        price: 14.990,
        country: 'Español'
    }, {
        id: 20,
        image: 'mahones.png',
        name: 'Mahones',
        price: 14.990,
        country: 'Español'
    } */
]


export const getCheeses = () =>{

    return new Promise ((resolve) => {
        setTimeout (() => {
            return resolve (cheeses)
        },500)
    })
}

export const getIdCheeses = (idCheese) =>{

    return new Promise ((resolve) => {
        setTimeout(()=> {
            console.log({idCheese})
            const cheese = cheeses.find((chees)=> chees.id === idCheese ) 
            if (cheese) return resolve (cheese)
        }, 500)
    })
    
}