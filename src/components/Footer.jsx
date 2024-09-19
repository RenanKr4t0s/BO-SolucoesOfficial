import React from 'react'
import BigColorfulBox from './BigColorfulBox'
import background from "../assets/Bg-from-Jandira.jpg"
import { Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer id='contact' className='mt-5'>
      <BigColorfulBox image={background}>
        <div className='shadow-lg py-4 mt-2'>
          <div className="container px-2 pb-1">
            <Row>
                <Col md={4} xs={12} >
                    <h2 className='text-white mt-3 h1'>Entre em contato</h2>
                    <ul>
                    <li className="list-group-item my-3 h5">
                        <a className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover link-opacity-75-hover" aria-current="page" href="https://www.instagram.com/b.osolucoes/">
                        <i className="bi bi-instagram me-1"></i>
                        Instagram
                        </a>
                    </li>
                    <li className="list-group-item my-3 h5">
                        <a className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover link-opacity-75-hover" aria-current="page" href="https://api.whatsapp.com/send?phone=5511974111995&text=Olá Bruno! Acessei seu site e quero saber mais sobre seus serviços!">
                        <i className="bi bi-whatsapp me-1"></i>
                        Whatsapp
                        </a>
                    </li>
                    <li className="list-group-item my-3 h5">
                        <a className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover link-opacity-75-hover" aria-current="page" href="https://www.facebook.com/profile.php?id=100090683970885">
                        <i className="bi bi-facebook me-1"></i>
                        Facebook
                        </a>
                    </li>
                    <li className="list-group-item my-3 h5">
                        <a className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover link-opacity-75-hover" aria-current="page" href="mailto:b.o_solucoes@outlook.com">
                        <i className="bi bi-envelope me-1"></i>
                        Email
                        </a>
                    </li>
                    <li className="list-group-item my-3 h5">
                        <a className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover link-opacity-75-hover" aria-current="page" href="https://www.threads.net/@b.osolucoes">
                        <i class="bi bi-threads me-1"></i>
                        Threads
                        </a>
                    </li>
                    </ul>
                </Col>
                <Col md={8} xs={12}>
                <iframe class="col-12 bg-white border border-primary shadow rounded-3" height="320" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.224971329424!2d-46.6102164!3d-23.667911399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce44b929c85835%3A0x8a0dd0f74bac7c3f!2sAv.%20do%20Tabo%C3%A3o%2C%204480%20-%20Tabo%C3%A3o%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009657-000!5e0!3m2!1spt-BR!2sbr!4v1726239003067!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Col>
            </Row>
          </div>
        </div>       
      </BigColorfulBox>
    </footer>
  )
}

export default Footer
