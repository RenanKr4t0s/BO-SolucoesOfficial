// BootsReact Components
import {Nav, Card, CardGroup, Container, Row, Col} from 'react-bootstrap'

// Assets
import background from "../assets/Bg-from-Jakub.webp"

// Components
import BigColorfulBox from '../components/BigColorfulBox';

function Servicos() {
  return (
    <Container>
        <BigColorfulBox image={background}>
            <CardGroup className='gap-3 p-3 my-2'>
            <Row xs={1} md={2} lg={4} className="g-4">
                <Col>
                    <Nav.Link href='/servicos/0' data-aos="flip-left">
                        <Card>
                            <Card.Header className='h1 text-center'><i class="bi bi-wrench-adjustable-circle"></i></Card.Header>
                                <Card.Body>
                                    <Card.Title>Manutenção preventiva e corretiva</Card.Title>
                                    <Card.Text>
                                    Mantemos seu sistema de alarme de incêndio em pleno funcionamento, evitando falhas, corrigindo problemas e garantindo a segurança do seu estabelecimento.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Funcionamento seguro</small>
                                </Card.Footer>
                        </Card>
                    </Nav.Link>
                </Col>
                <Col>
                    <Nav.Link href='/servicos/1' data-aos="flip-left">
                        <Card>
                            <Card.Header className='h1 text-center'><i class="bi bi-tools"></i></Card.Header>
                                <Card.Body>
                                    <Card.Title>Instalação de equipamentos</Card.Title>
                                    <Card.Text>
                                    Instalamos bombas, hidrantes e sistemas de alarme de incêndio, sempre seguindo rigorosamente as normas de segurança e oferecendo soluções personalizadas para cada cliente.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Instalação eficiente</small>
                                </Card.Footer>
                        </Card>
                    </Nav.Link>
                </Col>
                <Col>
                    <Nav.Link href='/servicos/2' data-aos="flip-right">
                        <Card>
                            <Card.Header className='h1 text-center'><i class="bi bi-telephone-plus"></i></Card.Header>
                                <Card.Body>
                                    <Card.Title>Suporte técnico especializado</Card.Title>
                                    <Card.Text>
                                    Oferecemos suporte técnico completo, resolvendo falhas, realizando ajustes e garantindo a eficiência dos sistemas de prevenção e combate a incêndio.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Suporte completo</small>
                                </Card.Footer>
                        </Card>
                    </Nav.Link>
                </Col>
                <Col>
                    <Nav.Link href='/servicos/3' data-aos="flip-right">
                        <Card>
                            <Card.Header className='h1 text-center'><i class="bi bi-file-text"></i></Card.Header>
                                <Card.Body>
                                    <Card.Title>Avaliação técnica</Card.Title>
                                    <Card.Text>
                                    Realizamos avaliações detalhadas dos sistemas de proteção contra incêndio, identificando possíveis melhorias e garantindo que estejam de acordo com as exigências normativas.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Avaliação precisa</small>
                                </Card.Footer>
                        </Card>
                    </Nav.Link>
                </Col>
            </Row>
            </CardGroup>
        </BigColorfulBox>
    </Container>
  );
}

export default Servicos;