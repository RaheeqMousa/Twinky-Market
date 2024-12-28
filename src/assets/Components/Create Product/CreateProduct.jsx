import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loading from '../Loading/Loading';
import {Route, Routes} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function CreateProcuct() {

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
    <>
    <div className="container d-flex justify-content-center align-items-center flex-column gap-5">
    <h2 className=" d-flex justify-content-center align-items-center">Add New Product</h2>
        <form method="post" className="d-flex gap-5 flex-column">
            {/* Product Title */}
            <div className=" d-flex justify-content-center align-items-center gap-3">
            <label htmlFor="productTitle">Product Title:</label>
            <input type="text" id="productTitle" name="productTitle" required />
            </div>
            {/* Product Description */}
            <div className=" d-flex justify-content-center align-items-center gap-3">
            <label htmlFor="productDescription">Product Description:</label>
            <textarea id="productDescription" name="productDescription" rows={4} required defaultValue={""} />
            </div>
            {/* Product Category */}
            <div className=" d-flex justify-content-center align-items-center gap-3">
            <label htmlFor="productCategory">Product Category:</label>
            <select id="productCategory" name="productCategory" required>
                {
                    categories.map((category, index)=>(
                        <option key={index} value={category}>{category}</option>
                    ))
                }
            </select>
            </div>
            {/* Product Price */}
            <div className=" d-flex justify-content-center align-items-center gap-3">
            <label htmlFor="productPrice">Price ($):</label>
            <input type="number" id="productPrice" name="productPrice" min={0} required />
            </div>
            {/* Submit Button */}
            <div className=" d-flex justify-content-center align-items-center gap-3">
            <button type="submit">Submit Product</button>
            </div>
        </form>
    </div>


    </>
  )
}
