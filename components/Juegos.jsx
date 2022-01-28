import React from 'react';
import Juego from './Juego';

export default function Juegos({ juegos }) {
    return <section className='grid sm:grid-cols-3 gap-5'>
        {juegos.map(juego => <Juego juego={juego} key={juego.nombre} />)}
    </section>;
}
