import {Card, Image, Col, Row} from 'react-bootstrap';

function CardPhoto({image}) {
  return (
    <Card border="warning shadow-lg" style={{ width: '24rem' }}>
        <Row>
            <Col xs={3} className='align-content-center'>
                <Image src={image} width="100" rounded />
            </Col>
            <Col>
                <Card.Body>
                    <Card.Title>Olá!!</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Sou Bruno C. Oliveira</Card.Subtitle>
                    <Card.Text>
                        O Criador da B.O Soluções.
                    </Card.Text>
                    <Card.Link href="#">Fale comigo!!</Card.Link>
                </Card.Body>
            </Col>
        </Row>
    </Card>
  );
}

export default CardPhoto;