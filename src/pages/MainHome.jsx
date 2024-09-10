import background from '../assets/Bg-from-Jakub.jpg'
import BigImageBox from '../components/BigImageBox/index';
import MyNavbar from '../components/NavBar.jsx/index.jsx';
import BigPhrase from '../components/BigPhrase.jsx';
import { Container, Stack, Row, Col, Button } from 'react-bootstrap';
import logo from '../assets/Logo.svg'

export default function MainHome(){
    return(
    <BigImageBox image={background}>
        <Container fluid>
        <MyNavbar logo={logo} />
            <Row style={{height:"80vh"}} className='text-black'>
            <Col xs={10} md={5} className="mx-5 d-flex justify-content-center align-items-center h-100">
                <Row className='text-center m-4 p-2 rounded-5 shadow-lg bg-transparent bg-sm-white'>
                <h1 className="my-4 opacity-100" style={{fontSize:"4rem"}} >B.O SOLUÇÕES</h1>
                <h2 className="lh-lg">Seu B.O.</h2>
                <h2 className="lh-base">nossa solução</h2>
                <div>
                    <Button className='my-3'>Entre em contato</Button>
                </div>
                </Row>
            </Col>
            <Col xs={12} md={3}></Col>
            <Col className="px-4">
                <BigPhrase as='h5'>Especialista em soluções para proteção contra incêndio, com suporte técnico, manutenção e instalação eficiente.</BigPhrase>
            </Col>
            </Row>
        </Container>
    </BigImageBox>

    )
}
