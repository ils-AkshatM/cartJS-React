import React from 'react';
import { PRODUCTS } from '../pages/productDetails';
import { Product } from '../pages/product';

export const Products = () => {
  return (
    <div className='Shop'>
       <div className='shopTitle'>
        <h1>Speedy</h1>
       </div>
       <div className='Products'> 
       {PRODUCTS.map((product) => 
       <Product data={product} />
       )} 
       </div>
    </div>
  )
}

