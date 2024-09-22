import {Card, Image, Col, Row} from 'react-bootstrap';

function CardPhoto({image}) {
  return (
    <Card border="warning shadow-lg" style={{ width: '22rem'}}>
        <Row>
            <Col xs={3} className='align-content-center m-2'>
                <Image src={image} width="100" rounded />
            </Col>
            <Col>
                <Card.Body>
                    <Card.Title>Olá!!</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Sou Bruno C. Oliveira</Card.Subtitle>
                    <Card.Text>
                        O Criador da B.O Soluções.
                    </Card.Text>
                    <Card.Link href="https://api.whatsapp.com/send?phone=5511974111995&text=Olá Bruno! Acessei seu site e quero saber mais sobre seus serviços!">
                        Fale comigo!!
                    </Card.Link>
                </Card.Body>
            </Col>
        </Row>
    </Card>
  );
}

export default CardPhoto;