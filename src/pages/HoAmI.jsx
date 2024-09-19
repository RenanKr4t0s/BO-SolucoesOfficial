import React from 'react'
import image from '../assets/BrunoInstal.jpeg'

const HoAmI = () => {
  return (
    <div data-section id="whoami" className="overflow-x-hidden" >
        <div className="bg-primary shadow-lg row text-center align-items-center">
            <h2 className="h1 text-warning my-5">
              <i class="bi bi-wrench-adjustable-circle me-3"></i>
                Quem é Bruno Oliveira.
              <i class="bi bi-wrench-adjustable-circle ms-3"></i>
            </h2>
        </div>
        <div className="container mt-5 px-5 pb-5">
            <div className='row justify-content-center'>
                <div className='col-lg-4 col-12 bg-warning shadow rounded my-auto'>
                    <img className='my-2 img-fluid rounded shadow' src={image} alt="Novo logo da MS"></img>
                </div>
                <div className='col-lg-8 col-12 ps-4'>
                <p className="h6 lh-lg text-start">
                    <span className="text-primary cssanimation effect3d">Bruno</span> é o tipo de pessoa que gosta de entender como as coisas funcionam. Desde criança, ele desmontava brinquedos só para ver o que tinha dentro e como tudo se encaixava. Essa curiosidade foi crescendo e, com o tempo, encontrou seu lugar no mundo da <span className="text-primary cssanimation effect3d">eletrônica</span>. Quando se formou Técnico Eletrônico, sabia que queria mais do que apenas montar e consertar equipamentos – ele queria oferecer <span className="text-primary cssanimation effect3d">soluções</span>.<br/><br/>

                    Foi assim que entrou na <span className="text-primary cssanimation effect3d">Ascael Comercial LTDA.</span>, onde passou 10 anos mergulhado no universo da <span className="text-primary cssanimation effect3d">proteção contra incêndio</span>.<br/><br/>

                    Durante esses anos, Bruno aprendeu na prática o valor da <span className="text-primary cssanimation effect3d">prevenção</span> e da <span className="text-primary cssanimation effect3d">segurança</span>. Trabalhou na produção, tornou-se técnico, e, com o tempo, virou referência em <span className="text-primary cssanimation effect3d">suporte</span> e <span className="text-primary cssanimation effect3d">instalações</span>. Mas algo faltava. Ele queria mais proximidade com seus clientes, queria ver de perto os problemas que enfrentavam e, mais importante, queria <span className="text-primary cssanimation effect3d">resolvê-los</span> de uma forma que fizesse a diferença. Foi assim que surgiu a <span className="text-primary cssanimation effect3d">B.O. Soluções</span>, sua própria empresa.<br/><br/>

                    Hoje, Bruno não é apenas um técnico experiente; ele é um <span className="text-primary cssanimation effect3d">solucionador de problemas</span>. Ele sabe que cada <span className="text-primary cssanimation effect3d">sistema de alarme</span> de incêndio, cada hidrante ou bomba tem uma função essencial, e sua missão é garantir que tudo funcione como deve. Ele é <span className="text-primary cssanimation effect3d">acessível</span>, aberto a negociações e leva muito a sério a confiança que seus clientes depositam nele.<br/><br/>

                    Para Bruno, proteger um estabelecimento vai além das máquinas – é proteger <span className="text-primary cssanimation effect3d">vidas</span>, negócios e <span className="text-primary cssanimation effect3d">sonhos</span>. E, claro, fazer tudo isso com o cuidado e a dedicação de quem ama o que faz.
                    </p>
                </div>
            </div>
        </div>  
    </div> 
  )
}

export default HoAmI
