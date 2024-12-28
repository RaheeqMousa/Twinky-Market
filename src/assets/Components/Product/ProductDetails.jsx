import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Route, Routes, useParams} from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import Loading from '../Loading/Loading';

export default function Product() {
  const {id}=useParams();
  const {data,error,isLoading}=useFetch(`http://dummyjson.com/products/${id}`);

  if(isLoading){
    return <Loading />
  }

  return (
    <>
    {error? <div className='alert alert-danger'>{error}</div>:''}

<div className='container'>
  <div className='d-flex justify-content-center align-items-center'>
      <div className="card" style={{width: '18rem'}}>
          <img src={data.thumbnail} />
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.description}</p>
          </div>
        </div>
    </div>
  </div>

    
      

    </>
  )
}
