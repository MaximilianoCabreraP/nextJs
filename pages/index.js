import { useState } from 'react'
import axios from 'axios'

import Page from '../components/Page'
import Products from '../components/Products'

export async function getServerSideProps({ req }) {
  const { data: products } = await axios.get(`http://${req.headers.host}/api/productos/filtrar?popular=true`)
  const { data: juegos } = await axios.get(`http://${req.headers.host}/api/juegos?popular=true`)

  return {
    props: {
      products,
      juegos
    }
  }
}
export default function Home({ products, juegos }) {
  return (
    <Page>
      <Products products={products} />
      <br /> <hr /> <br />
      <Products products={juegos} />
    </Page>
  )
}
