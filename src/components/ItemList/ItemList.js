import Item from "../Item/Item"


const ItemList = (props) =>{

    return(
        <div>
            {props.productos.map(prod =><Item key={prod.id} {...prod}/>) }
        </div>
          
            
    )
}
export default ItemList