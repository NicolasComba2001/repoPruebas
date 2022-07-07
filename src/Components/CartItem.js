import React from 'react';

export default function CartItem({producto, delFromCart}){
    let {id, name, price, cantidad} = producto
    return(
        <section>
            <h3>Producto: {name}</h3>
            <h4>Precio: ${price}.00 x {cantidad} = ${price * cantidad}.00</h4>
            <button onClick={()=>delFromCart(id)}>Eliminar item</button><br/>
            <button onClick={()=>delFromCart(id,true)}>Eliminar todos</button>
        </section>
    );
}