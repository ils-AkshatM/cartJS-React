import React from 'react';
import Hero  from '../../Components/Hero';
import Products from '../../Components/Products';

const Home = () => {
  return (
    <>
    <Hero />
    <h2 className='text-6xl font-bold text-center mt-20'>Products </h2>
    <Products />
    </>
  )
}

export default Home;
