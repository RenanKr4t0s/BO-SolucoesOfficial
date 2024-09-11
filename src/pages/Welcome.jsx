import React from "react";
import CardPhoto from '../components/CardPhoto.jsx';
import CentralImage from "../components/CentralImage.jsx";
import TextCard from "../components/TextCard.jsx";

import { Container, Row, Col, Button, Stack } from 'react-bootstrap';
import image from '../assets/Logo.svg'
import brunoInstal from '../assets/BrunoInstal.jpeg'

export default function Welcome(){
    return(
        <Container >
            <div className="d-flex justify-content-center align-items-center pt-3">
                <h3 style={{fontSize:"3.5rem"}}>Bem vindo a B.O. Soluções</h3>
            </div>
        <Row className="p-3">
          <Col xs={12} md={8} className="p-3 my-auto">
            <Row className="p-3">
                <CardPhoto image={image} />
            </Row>
            <Row className="p-3">
                <TextCard/>
            </Row>
          </Col>
          <Col className=" text-align-center p-3">
            <CentralImage image={brunoInstal} alternativeText="Imagem provisória" />
          </Col>
        </Row>
      </Container>
    )
}