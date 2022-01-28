import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [show, setShow] = useState(false)
  return <nav className='bg-white shadow-md mb-5 py-3 px-5 sm:px-0'>
    <div className='flex justify-between max-w-4xl mx-auto'>
      <Link href={"/"}>Inicio</Link>

      <ul className={`gap-5 ${show ? "flex" : "hidden"} sm:flex`}>
        <li><Link href="/productos">Productos</Link></li>
        <li><Link href="/juegos">Juegos</Link></li>
        <li><Link href="/productos">Productos</Link></li>
      </ul>
      <button className='sm:hidden' onClick={() => { setShow(!show) }}>Menu</button>
    </div>
  </nav>;
}