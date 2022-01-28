import React from 'react';
import { motion } from "framer-motion"

export default function Juego({ juego }) {
    return <motion.article
        initial={{
            opacity: 0
        }}
        transition={{
            duration: 0.5
        }}
        animate={{
            opacity: 1
        }}
        className='bg-white shadow-md'>
        <div className='p-2'>
            <h3 className='text-2xl font-bold'>{juego.nombre}</h3>
            <p className='my-3'>{juego.consola}</p>
        </div>
        <img src={juego.imagen}></img>
    </motion.article>;
}
