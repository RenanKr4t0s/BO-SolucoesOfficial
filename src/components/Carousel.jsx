import React from 'react';
import { Image } from 'react-bootstrap';

// Pegando as imagens
import Image1 from '../assets/caroussel/Ascael_Alarme_Incendio.webp';
import Image2 from '../assets/caroussel/Ascael_Centrais.webp';
import Image3 from '../assets/caroussel/Ascael_Linha_1024.webp';
import Image4 from '../assets/caroussel/Ascael_Modulos.webp';

const Carousel = () => {
  return (
    <div className=''>
        <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <Image src={Image1} className="d-block w-100" alt="Ascael Alarme Incendio" />
            </div>
            <div className="carousel-item">
            <Image src={Image2} className="d-block w-100" alt="Ascael Centrais" />
            </div>
            <div className="carousel-item">
            <Image src={Image3} className="d-block w-100" alt="Ascael Linha 1024" />
            </div>
            <div className="carousel-item">
            <Image src={Image4} className="d-block w-100" alt="Ascael Modulos" />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  );
};

export default Carousel;

