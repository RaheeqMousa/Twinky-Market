import React from 'react'
import { FaFacebook, FaLinkedin,FaInstagram } from 'react-icons/fa';
import style from './footer.module.css'

export default function Footer() {

  return (
    <div className='d-flex justify-content-center flex-column gap-5 mt-5'>
        <div>
            <div className={`d-flex gap-5 justify-content-center ${style.footer}`}>
                    <div className='d-flex justify-content-center flex-column'>
                        <p className='fs-2 fw-bold'>LOCATION</p>
                        <p className='fs-4 fw-bold text-align-center'>2215 John Daniel Drive</p>
                        <p className='fs-4 fw-bold text-align-center'>Clark, MO 65243</p>
                    </div>
                    <div className='d-flex justify-content-center flex-column' >    
                        <p className='fs-2 fw-bold'>AROUND THE WEB</p>
                        <div className='d-flex align-content-center justify-content-center gap-3 px-5 ' >
                            <a href='#'><FaFacebook size={40} color='white'/></a>
                            <a href='#'><FaInstagram size={40}  color='white'/></a>
                            <a href='https://www.linkedin.com/in/raheeq-mousa-b960b7291/'><FaLinkedin size={40}  color='white'/></a>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center flex-column'>
                        <p className='fs-2 fw-bold'>ABOUT FREELANCER</p>
                        <p className='fs-4 fw-bold text-align-center'>Freelance is a free to use</p>
                    </div>
            </div>
            <div className={`d-flex justify-content-center ${style.copyRight}`}>
                <p>Copy Right RaheeqMousa99@gmail.com 2024</p>
            </div>
        </div>

            
    </div>        
  )
}
