import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

// Pegando as imagens
import Image1 from '../assets/caroussel/Ascael_Alarme_Incendio.webp';
import Image2 from '../assets/caroussel/Ascael_Centrais.webp';
import Image3 from '../assets/caroussel/Ascael_Linha_1024.webp';
import Image4 from '../assets/caroussel/Ascael_Modulos.webp';

const CarouselCentral = () => {
  return (
    <div className="d-flex justify-content-center my-2">
      <Carousel
        className="w-100 w-md-75"
        style={{ maxWidth: "780px" }} // Limita a largura máxima em telas grandes
      >
        <Carousel.Item style={{height:"420px"}}>
          <Image className="d-block w-100 rounded" src={Image1} alt="Ascael Alarme Incendio" />
        </Carousel.Item>
        <Carousel.Item style={{height:"420px"}}>
          <Image className="d-block w-100 rounded" src={Image2} alt="Ascael Centrais" />
        </Carousel.Item>
        <Carousel.Item style={{height:"420px"}}>
          <Image className="d-block w-100 rounded" src={Image3} alt="Ascael Linha 1024" />
        </Carousel.Item>
        <Carousel.Item style={{height:"420px"}}>
          <Image className="d-block w-100 rounded" src={Image4} alt="Ascael Módulos" />
        </Carousel.Item>
      </Carousel>
    </div>

  );
};

export default CarouselCentral;

