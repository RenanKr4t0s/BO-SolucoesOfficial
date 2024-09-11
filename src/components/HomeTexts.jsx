import React from 'react'
import { Row, Col, Button,} from 'react-bootstrap';

const HomeTexts = () => {
  return (
    <>
      <Row style={{}} className='text-black'>
                <Col xs={10} md={5} className="mx-4 my-5 d-flex justify-content-center align-items-center">
                    <Row className='text-center m-4 p-3 rounded-5 shadow-lg'style={{backgroundColor:"rgba(255, 255, 255, 0.5)"}}>
                        <h1 className="my-4 opacity-100" style={{fontSize:"3.5rem"}} >B.O SOLUÇÕES</h1>
                        <h2 className="lh-lg">Seu B.O.</h2>
                        <h2 className="lh-base">nossa solução</h2>
                    <div>
                        <Button className='my-3'>Entre em contato</Button>
                    </div>
                    </Row>
                </Col>
                <Col xs={12} md={1} style={{height:"3.5rem"}}></Col>
                <Col md={{span: 3, offset: 2}} className="px-3 mb-2">
                    <div className="d-flex justify-content-end align-items-end h-100">
                        <h5 className='text-end m-2 lh-lg p-3 rounded-5'>
                            Especialista em soluções para proteção contra incêndio, com suporte técnico, manutenção e instalação eficiente.
                        </h5>
                    </div>
                </Col>
            </Row>
    </>
  )
}

export default HomeTexts
