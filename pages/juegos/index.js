import React from 'react';
import axios from 'axios'
import Page from '../../components/Page';
import Juegos from '../../components/Juegos';

export async function getServerSideProps({ req }) {
    // Lunes: Una solución a este problema
    const { data: juegos } = await axios.get(`http://${req.headers.host}/api/juegos`)

    return {
        props: {
            juegos
        }
    }
}


export default function index({ juegos }) {
    return <Page>
        <main className='p-5'>
            <Juegos juegos={juegos} />
        </main>
    </Page>;
}
