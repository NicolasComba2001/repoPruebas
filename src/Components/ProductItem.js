import React from 'react';

export default function ProductItem({producto, addToCart}){
    const {id, name, price} = producto;
    return(
        <article>   
            <h4>{name}</h4>
            <h5>${price}</h5>
            <button onClick={()=>addToCart(id)}>AGREGAR</button>
        </article>
    );
}