import React from 'react';
import Page from '../components/Page'
import { useSelector } from 'react-redux';
import Products from '../components/Products';

export default function cart() {
    const { items } = useSelector(state => state.cart)
    return <Page>
        <section>
            <Products products={items}></Products>
        </section>
    </Page>;
};