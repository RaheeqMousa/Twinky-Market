import useFetch from '../hooks/useFetch';
import Loading from '../Loading/Loading';
import React, {useEffect, useState} from 'react';
import axios from "axios";
export default function Quote() {


    const [error,setError]=useState(null);
    const [quote,setQuote]=useState([]);
    const [loading,setIsLoading]=useState(true) ;
  
    const getQuote=async()=>{
      try{
        const {data}=await axios.get(`https://dummyjson.com/quotes/random`);
        setQuote(data.quote);
        setError(null);
  
      }catch(er){
        setError(er.message);
      }finally{
        setIsLoading(false);
      }
    }
  
    useEffect(()=>{
      getQuote();
    },[])
    
    if(loading)
      return <Loading />;
  

  return (
    <>
        <div className='fw-bold fs-5 d-flex justify-content-center align-items-center py-5'>
                <p>{quote}</p>
        </div>
    </>
    
  )
}
