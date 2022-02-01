import React from 'react';
import { motion } from "framer-motion"
import { useDispatch } from 'react-redux';

import { addToCart, removeFromCart, reduceFromCart, sumToCart } from '../features/Cart';

export default function Product({ product }) {
    const dispatch = useDispatch();
    const agregarAlCarrito = () => {
        dispatch(addToCart(product))
    }
    const removerDelCarrito = () => {
        dispatch(removeFromCart(product))
    }
    const restarDelCarrito = () => {
        dispatch(reduceFromCart(product))
    }
    const sumarAlCarrito = () => {
        dispatch(sumToCart(product))
    }
    return <motion.article
        initial={{
            opacity: 0
        }}
        transition={{
            duration: 2
        }}
        animate={{
            opacity: 1
        }}
        className='bg-white shadow-md'>
        <div className='p-2'>
            <h3 className='text-2xl font-bold'>{product.name ? product.name : product.nombre}</h3>
            <p className='my-3'>{product.description ?? product.consola}</p>
            {product.quantity ?
                <>
                    Cantidad:  {product.quantity} <br />
                    <button onClick={restarDelCarrito}>-</button><br />
                    <button onClick={removerDelCarrito}>Remover del Carrito</button> <br />
                    <button onClick={sumarAlCarrito}>+</button>
                </> :
                <>
                    <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
                </>
            }
        </div>
        <img src={product.img ?? product.imagen}></img>
    </motion.article>;
}
