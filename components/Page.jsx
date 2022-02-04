import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCart } from '../features/Cart';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Page({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, [])
  return <div className='bg-gray-100'>
    <Navbar />
    <main className='max-w-4xl mx-auto px-5 sm:px-0'>
      {children}
    </main>
    <Footer />
  </div>;
}
