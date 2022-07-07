import React, { useReducer } from 'react';
import CartItem from './CartItem';
import ProductItem from './ProductItem';
import { TYPES } from './ShoppingActions';
import { shoppingInitialState, shoppingReducer } from './ShoppingReducer';

export default function ShoppingCart(){
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const {products, cart} = state;

    const addToCart = (id)=>{
        //el payload seria decirle, agrega al carrito solo el producto que tenga ese ID
       dispatch({
           type: TYPES.ADD_TO_CART, payload: id
       })
    }
    const delFromCart = (id,all=false)=>{
        if(all){
            dispatch({
                type: TYPES.REMOVE_ALL_FROM_CART, payload: id
            });
        }else{
            dispatch({
                type:TYPES.REMOVE_ONE_FROM_CART, payload: id
            });
        }
    }
    const clearCart =()=>{
        dispatch({
            type: TYPES.CLEAR_CART
        })
    }
    return(
        <section>
            <h2>carrito de compras</h2>
            <h3>productos</h3>
            <article className="box grid-responsive">
                {
                products.map((product,indice)=><ProductItem key={product.id} producto={product} addToCart={addToCart}></ProductItem>)
                }
            </article>
            <h3>Carrito</h3>
            <article className="box">
                {
                    cart.map((item,indice) => <CartItem key={indice} producto={item} delFromCart={delFromCart}></CartItem>)
                }
                <button onClick={clearCart}>LIMPIAR CARRITO</button>
            </article>
        </section>
    );
}