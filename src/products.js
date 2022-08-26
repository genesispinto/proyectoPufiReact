const products = [{
    id: 1,
    title: 'Pufi Rain',
    description: 'texto ',
    price: 14000,
    pictureUrl:'./img/producto1.jpeg',
    pictureAnime:'./img/paraguas.png'
},
{
    id: 2,
    title: 'Pufi Puff',
    description: 'texto',
    price: 20000,
    pictureUrl:'./img/producto2.jpeg',
    pictureAnime:'./img/cart.png'

},
{
    id: 3,
    title: 'Pufi Cart',
    description: 'texto',
    price: 12000,
    pictureUrl:'./img/producto3.jpeg',
    pictureAnime:'./img/puff.png',
    

},
{
    id: 4,
    title: 'Pufi Nap',
    description: 'texto',
    price: 5000,
    pictureUrl:'./img/producto4.jpeg',
    pictureAnime:'./img/nap.png'
},
]

const getProducts = () =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(products)
        }, 2000)
    })
}

export default getProducts