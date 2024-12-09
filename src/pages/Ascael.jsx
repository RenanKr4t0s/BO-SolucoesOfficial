import React from 'react'
import image from '../assets/new/Ascael_Logo_Linhas.webp'

const Ascael = () => {
  return (
    <div data-section id="whoami" className="overflow-x-hidden" >
        <div className="bg-primary shadow-lg row text-center align-items-center">
            <h2 className="h1 text-warning my-5" data-aos="zoom-out">
            <i class="bi bi-fire me-3"></i>
                Técnico Certificado Ascael
            <i class="bi bi-fire ms-3"></i>
            </h2>
        </div>
        <div className="container mt-5 px-5 pb-5">
            <div className='row justify-content-center'>
                <div className='col-lg-6 col-12 my-auto' data-aos="zoom-out-right">
                    <img className='img-fluid shadow rounded p-5' style={{ objectFit: 'cover' }} src={image} alt="Bruno instalando acionador manual"></img>
                </div>
                <div className='col-lg-6 col-12 ps-4'>
                <p className="h4 lh-lg text-start mt-4" data-aos="zoom-in">
                    <span className="text-primary cssanimation effect3d"></span>
                    Com mais de 40 anos de tradição no mercado, a <span className="text-primary cssanimation effect3d">Ascael</span> é sinônimo de qualidade e inovação em equipamentos de proteção contra incêndio. Como um dos poucos técnicos com <span className="text-primary cssanimation effect3d">experiência direta</span>de trabalho dentro dessa renomada empresa, trago para você o mesmo padrão de excelência que faz da Ascael uma referência no setor.
                    </p>
                </div>
            </div>
        </div>  
    </div> 
  )
}

export default Ascael
