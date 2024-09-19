import Card from 'react-bootstrap/Card';

function TextCard() {
  return (
    <Card className='border-white shadow-lg'>
      <Card.Body className='lh-lg'>
        <Card.Title className="mb-1">Porque escolher a B.O?</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Experiência desde a fabricação.</Card.Subtitle>
        <Card.Text>
            Iniciamos a empresa em 2022, mas seu criador já possuía mais de 10 anos de experiência na Ascael Comercial LTDA, totalizamos assim mais de 12 anos de experiência com produtos de proteção contra incêndio da fabricação a instalação.
            Oferecemos assim soluções eficientes com a confiança, desde a instalação até a manutenção e suporte técnico.
        </Card.Text>
        <Card.Link href="/hoami">Conheça o Bruno</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default TextCard;