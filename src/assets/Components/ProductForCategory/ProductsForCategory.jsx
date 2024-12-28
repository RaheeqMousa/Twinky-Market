import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loading from '../Loading/Loading';
import {Route, Routes, useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function App() {

  const { categoryName } = useParams();
  const [error,setError]=useState(null);
  const [products,setProducts]=useState([]);
  const [loading,setIsLoading]=useState(true) ;

  const getProducts=async()=>{
    try{
      const {data}=await axios.get(`https://dummyjson.com/products/category/${categoryName}?limit=15`);
      setProducts(data.products);
      setError(null);

    }catch(er){
      setError(er.message);
    }finally{
      setIsLoading(false);
    }
  }


  useEffect(()=>{
    getProducts();
  },[])
  
  if(loading)
    return <Loading />;

  

  return (
    <>
    {
      products.length === 0 ? <div>Wait...</div> :
      <div className='container'>
                      <div className='row'>
                          {products.map((c) => (
                              <div className={`col-xl-4 col-lg-4 col-md-6 mb-4`} key={c.id}>
                                  <img src={c.thumbnail} alt={c.title} />
                                  <h2>{c.title}</h2>
                                  <Link to={`/product/${c.id}`}>More Details</Link>
                              </div>
                          ))}
                      </div>
                  </div>
    }
    </>  
  )
}
