import React from 'react'
import image1 from '../assets/Manutencao.webp'
import image2 from '../assets/Instalacao.webp'
import image3 from '../assets/Suporte.webp'
import image4 from '../assets/Avaliacao.webp'

import { useParams } from 'react-router-dom';

const ServicesDetail = () => {
  const {id} = useParams();
  const cawab = "cawab"
  const servicos = [
    {
      objectImage : image1,
      objectTitle : "Manutenção preventiva e corretiva",
      objectIcon : "bi-wrench-adjustable-circle",
      objectText : "Manter um sistema de alarme de incêndio funcionando perfeitamente é como cuidar de um relógio suíço; cada peça precisa estar no lugar certo e funcionando direitinho. A prevenção é a chave. Não é só sobre consertar quando quebra, mas evitar que os problemas aconteçam. Por isso, faço questão de realizar manutenções regulares, corrigindo qualquer pequeno ajuste antes que vire um problemão. Quando estou cuidando do seu sistema, estou garantindo que ele esteja sempre pronto para agir quando for necessário, sem falhas ou surpresas. Afinal, a última coisa que você precisa é se preocupar com a segurança do seu estabelecimento. Pode deixar isso comigo!"
    },
    {
      objectImage : image2,
      objectTitle : "Instalação de equipamentos",
      objectIcon : "bi-tools",
      objectText : "A instalação de bombas, hidrantes e sistemas de alarme de incêndio é como montar um quebra-cabeça onde cada peça tem seu lugar certo. Aprendi durante meus anos de experiência, que cada instalação é única. Por isso, quando instalo um sistema, não se trata apenas de seguir um manual; é sobre entender o local, os riscos envolvidos e como podemos garantir a segurança com a melhor solução possível. A gente segue as normas de segurança à risca, mas sempre pensando em como adaptar isso às necessidades específicas de cada cliente. Afinal, cada prédio, cada empresa, tem suas particularidades, e o nosso trabalho é garantir que tudo funcione perfeitamente, sem complicações e com a máxima eficiência."
    },
    {
      objectImage : image3,
      objectTitle : "Supoorte técnico especializado",
      objectIcon : "bi-telephone-plus",
      objectText : 'Oferecer suporte técnico é como estar sempre pronto para uma aventura. Mesmo os melhores sistemas podem ter um ou outro imprevisto. É aí que entro em ação, como uma espécie de "detetive" dos alarmes e bombas de incêndio. Quando algo dá errado, seja um alarme que não dispara ou uma bomba que não liga, vou até lá, investigo e encontro a solução. É como consertar algo que você conhece por dentro e por fora, fazendo os ajustes necessários para que tudo funcione com a máxima eficiência. Meu objetivo é garantir que, quando você mais precisar do sistema, ele esteja lá para te proteger, funcionando direitinho. Afinal, cada minuto conta quando se trata de segurança!'
    },
    {
      objectImage : image4,
      objectTitle : "Avaliação técnica",
      objectIcon : "bi-file-text",
      objectText : "Fazer avaliações detalhadas dos sistemas de proteção contra incêndio é como fazer uma revisão geral no carro antes de uma viagem longa. Aprendi, que cada detalhe importa quando o assunto é segurança. Quando faço uma avaliação, não é só dar uma olhadinha rápida; é um trabalho minucioso, onde reviso cada componente, cada fiação, e até o posicionamento dos equipamentos. Estou sempre em busca de possíveis melhorias, algo que possa ser ajustado ou otimizado para garantir que o sistema esteja em total conformidade com as normas. Afinal, estar de acordo com a legislação não é só uma obrigação, é uma garantia de que tudo vai funcionar corretamente quando for preciso. E mais do que cumprir regras, é sobre proporcionar tranquilidade para você e seu negócio."
    },
  ]

  return (
    <div data-section className="overflow-x-hidden" >
        <div className="bg-primary shadow-lg row text-center align-items-center">
            <h2 className="h1 text-warning my-5" data-aos="zoom-out">
              <i className={`bi ${servicos[id].objectIcon} me-3`} ></i>
               {servicos[id].objectTitle} 
              <i class={`bi ${servicos[id].objectIcon} ms-3`}></i>
            </h2>
        </div>
        <div className="container mt-5 px-5 pb-5">
            <div className='row justify-content-center'>
                <div className='col-lg-5 col-12 bg-warning shadow rounded my-auto' data-aos="zoom-out-right">
                    <img className='my-2 img-fluid rounded shadow' src={servicos[id].objectImage} alt="Novo logo da MS"></img>
                </div>
                <div className='col-lg-7 col-12 ps-4'>
                  <p className="h5 lh-lg text-end" data-aos="zoom-in">
                    {servicos[id].objectText}
                  </p>
                </div>
            </div>
        </div>  
    </div> 
  )
}

export default ServicesDetail
