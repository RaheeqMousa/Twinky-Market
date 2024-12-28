import React, {useEffect, useState} from 'react';
import  Navbar  from './assets/Components/Navbar/Navbar';
import  Footer  from './assets/Components/Footer/Footer';
import Product from './assets/Components/Products/Product';
import ProductsForCategory from './assets/Components/ProductForCategory/ProductsForCategory';
import axios from "axios";
import Loading from './assets/Components/Loading/Loading';
import {Route, Routes} from 'react-router-dom'
import Categories from './assets/Components/Categories/Categories';
import {Link} from 'react-router-dom';
import ProductDetails from './assets/Components/Product/ProductDetails';
import Home from './assets/Components/Home/Home';
import CreateProduct from './assets/Components/Create Product/CreateProduct';

export default function App() {


  

  return (
    <>
      <Navbar />
  
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/ProductsForCategory/:categoryName" element={<ProductsForCategory />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Product />} />
          <Route path="*" element={<h2>PAGE NOT FOUND!</h2>} />
          <Route path="/createProduct" element={<CreateProduct />} />
      </Routes>


      <Footer /> 
    </>  
  )
}
