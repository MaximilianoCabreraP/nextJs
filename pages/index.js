import { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

import Saludo from '../components/Saludo'
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
  const [open, setOpen] = useState(false)
  return (
    <Page>
      <Products products={products} />
      <br /> <hr /> <br />
      <Products products={juegos} />
    </Page>
  )
}
