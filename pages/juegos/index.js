import React from 'react';
import axios from 'axios'
import Page from '../../components/Page';
import Products from '../../components/Products';

export async function getServerSideProps({ req }) {
    const { data: juegos } = await axios.get(`http://${req.headers.host}/api/juegos`)

    return {
        props: {
            juegos
        }
    }
}


export default function index({ juegos }) {
    return <Page>
        <main>
            <Products products={juegos} />
        </main>
    </Page>;
}
