import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Page({ children }) {
  return <div className='bg-gray-100'>
    <Navbar />
    <main className='max-w-4xl mx-auto px-5 sm:px-0'>
      {children}
    </main>
    <Footer />
  </div>;
}
