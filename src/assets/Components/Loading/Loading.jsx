import React from 'react'
import { Link } from 'react-router-dom';

export default function Loading() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>    
  )
}
