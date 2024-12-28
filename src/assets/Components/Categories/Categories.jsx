import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loading from '../Loading/Loading';
import {Route, Routes} from 'react-router-dom'
import {Link} from 'react-router-dom'
import style from './Categories.module.css'

export default function Categories() {
    const [error,setError]=useState(null);
    const [categories,setCategories]=useState([]);
    const [loading,setIsLoading]=useState(true);
  
    const getCategories=async()=>{
      try{
        const {data}=await axios.get(`https://dummyjson.com/products/category-list`);
        setCategories(data);
        setError(null);
  
      }catch(er){
        setError(er.message);
      }finally{
        setIsLoading(false);
      }
    }
  
  
    useEffect(()=>{
      getCategories();
    },[])
    
    if(loading)
      return <Loading />;
    
  
    return (
      < >
      {
      categories.length==0?<div>wait ..</div>:
      <div className={`py-5 ${style.Categories}`}>
      <div className='container'>
        <div className='row'>
         {
                categories.map((category,index) => (
                    <div key={index} className={`col-xl-4 col-lg-4 col-md-6 mb-4 ${style.category}`}>
                        <Link className="nav-link fw-bold fs-4" to={`/ProductsForCategory/${category}`}>
                            {category}
                        </Link>
                    </div>
                    ))
            }
        </div>
        </div>   
  
        
      </div>
}  
      </>  
    )
}
