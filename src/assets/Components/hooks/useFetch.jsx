import Loading from '../Loading/Loading';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
export default function useFetch(url) {
    const [data,setData]=useState({})
    const [error,setError]=useState(null)
    const [isLoading,setIsLoading]=useState(true)

    const getData =async()=>{
        try{
            const {data} = await axios.get(url);
            setData(data);
            setError(null);
        }catch(er){
            setError(er.message);
            setData(null);
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        getData();
    },[]);

  return {data,error,isLoading}
}
