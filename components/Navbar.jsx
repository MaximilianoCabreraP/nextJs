import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const [show, setShow] = useState(false)
  const { items: cart } = useSelector((state) => state.cart)

  let itemsCarrito = cart ? cart.reduce((accumulator, item) => accumulator + item.cantidad, 0) : 0;
  // console.log("Cart length: ", cart.length);
  // cart.map(c => console.log(c, c.cantidad))

  return <nav className='bg-white shadow-md mb-5 py-3 px-5 sm:px-0'>
    <div className='flex justify-between max-w-4xl mx-auto'>
      <Link href={"/"}>Inicio</Link>

      <ul className={`gap-5 ${show ? "flex" : "hidden"} sm:flex`}>
        <li><Link href="/productos">Productos</Link></li>
        <li><Link href="/juegos">Juegos</Link></li>
        <li><Link href="/cart">{`Carrito ${itemsCarrito}`}</Link></li>
      </ul>
      <button className='sm:hidden' onClick={() => { setShow(!show) }}>Menu</button>
    </div>
  </nav>;
}