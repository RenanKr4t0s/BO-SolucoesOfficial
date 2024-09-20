import React from "react";
import CardPhoto from '../components/CardPhoto.jsx';
import CentralImage from "../components/CentralImage.jsx";
import TextCard from "../components/TextCard.jsx";

import { Container, Row, Col } from 'react-bootstrap';
import faceImage from '../assets/BrunoFace.webp'
import brunoInstal from '../assets/BrunoInstal.webp'

export default function Welcome(){
    return(
        <Container >
            <div id="welcome" className="d-flex justify-content-center align-items-center pt-3 fst-italic">
                <h3 style={{fontSize:"3.5rem"}} data-aos="zoom-in-up">Bem vindo a B.O Soluções</h3>
            </div>
            <Row className="p-3">
              <Col xs={12} md={8} className="p-3 my-auto">
                <Row className="p-3" data-aos="zoom-out-right">
                    <CardPhoto image={faceImage}/>
                </Row>
                <Row className="p-3" data-aos="zoom-out-right">
                    <TextCard/>
                </Row>
              </Col>
              <Col className=" text-align-center p-3" data-aos="zoom-out-left" >
                <CentralImage image={brunoInstal} alternativeText="Imagem provisória" />
              </Col>
            </Row>
      </Container>
    )
}