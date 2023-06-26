import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './modules/Home';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import Product from './Components/Product';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/products/:id' element={<Product/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
