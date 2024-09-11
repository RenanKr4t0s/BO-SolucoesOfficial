import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import background from "../assets/Bg-from-Jakub.jpg"
import image from '../assets/Logo.svg'
import { Container } from 'react-bootstrap';
import BigColorfulBox from '../components/BigColorfulBox';

function Servicos() {
  return (
    <Container>
        <BigColorfulBox image={background}>
            <CardGroup className=''>
            <Card>
                <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
            </Card>
            </CardGroup>
        </BigColorfulBox>
    </Container>
  );
}

export default Servicos;