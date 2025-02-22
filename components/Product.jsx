import React from 'react';
import { motion } from "framer-motion"
import { useDispatch } from 'react-redux';

import { addToCart, removeFromCart, reduceFromCart, sumToCart, saveCart } from '../features/Cart';


import { GrAddCircle, GrSubtractCircle, GrTrash } from 'react-icons/gr';


export default function Product({ product }) {
    const dispatch = useDispatch();
    const agregarAlCarrito = () => {
        dispatch(addToCart(product))
        dispatch(saveCart())
    }
    const removerDelCarrito = () => {
        dispatch(removeFromCart(product))
        dispatch(saveCart())
    }
    const restarDelCarrito = () => {
        dispatch(reduceFromCart(product))
        dispatch(saveCart())
    }
    const sumarAlCarrito = () => {
        dispatch(sumToCart(product))
        dispatch(saveCart())
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
            <h3 className='text-2xl font-bold'>{product.name}</h3>
            <p className='my-3'>{product.description}</p>
            {product.quantity ?
                <>
                    <div className="flex justify-between">
                        <div className="">
                            <button onClick={restarDelCarrito} disabled={product.quantity == 1} className="mx-2 my-1 disabled:opacity-60"><GrSubtractCircle /></button>
                            Cantidad:  {product.quantity}
                            <button onClick={sumarAlCarrito} disabled={product.stock == product.quantity} className="mx-2 my-1 disabled:opacity-60"><GrAddCircle /></button>
                        </div>
                        <div >
                            <button onClick={removerDelCarrito} className="my-2 my-1 text-xs text-red-600">Eliminar </button>
                        </div>
                    </div>
                </> :
                <>
                    <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
                </>
            }
        </div>
        <img src={product.img}></img>
    </motion.article>;
}
