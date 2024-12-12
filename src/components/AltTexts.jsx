import React from 'react'
import { Container, Image } from 'react-bootstrap'
import logo from '../assets/Logo.svg'

const AltTexts = () => {
  return (
    <Container className='text-center'>
        <div data-aos="zoom-in-up" className='text-center my-4 p-2 rounded-5 shadow-lg'style={{backgroundColor:"rgba(255, 255, 255, 0.95)"}}>
            <h1 className="opacity-100 fw-semibold fst-italic"><Image src={logo} width={250}/></h1>
            <h3 className="lh-lg">Prevenção contra incêndio</h3>
            <h3 className="lh-base">Seu B.O, nossa solução!</h3>
        </div>
    </Container>
  )
}

export default AltTexts
