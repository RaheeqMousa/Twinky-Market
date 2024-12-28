import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loading from '../Loading/Loading';
import {Route, Routes} from 'react-router-dom'
import {Link} from 'react-router-dom'
import useFetch from '../hooks/useFetch';

export default function Product() {

  const {data,error,isLoading}=useFetch(`https://dummyjson.com/products?limit=15`);
    console.log(data);
  if(isLoading)
      return <Loading />;

  return (
    <>
    {
        data.length==0?<div>wait ..</div>:
        <div className='container'>
                        <div className='row'>
                            {data.products.map((c) => (
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
