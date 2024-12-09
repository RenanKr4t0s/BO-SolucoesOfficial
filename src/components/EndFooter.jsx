import React from 'react'
import icon from '../assets/Green.png'
import { Image } from 'react-bootstrap'

const EndFooter = () => {
  return (
    <div className='bg-dark text-center p-1'>
        <p className='text-secondary mt-1'>2024 B.O Soluções</p>
        <p className='text-white'>Desenvolvido por:  
            <a href='https://www.renandevramos.com.br/' className='text-secondary'> 
                <Image src={icon} width="16" className='ms-2 me-1'/> 
                R.dev.R
                <Image src={icon} width="16" className='ms-1'/>
            </a> 
        </p>    
    </div>
  )
}

export default EndFooter
