import {useState, useEffect } from "react";
import getProducts from "../../products";
import ItemList from "../ItemList/ItemList.js";
import "./ItemListContainer.css"

const ItemListContainer = (props)=>{

        const [products, setProducts]= useState([]);

        useEffect(() =>{
            getProducts().then(prods => {
                setProducts(prods)
            })
        }, []) 
    
    
    return(
        <div className="productos">
             <ItemList productos = {products}/>               
        </div>
        )
}

export default ItemListContainer