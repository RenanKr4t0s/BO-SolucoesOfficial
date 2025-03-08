import { Navbar, Container, Nav, NavDropdown, Image } from 'react-bootstrap';
import BigWhiteBox from '../BigWhiteBox';

const navLinksStart = [
  { link: "/#welcome", text: "Sobre nós" },
  { link: "#contact", text: "Contato" },
  { link: "/ascael", text: "Técnico Ascael" },
  { link: "/hoami", text: "Conheça Bruno" }
  
];
const dropdownItems = [
  { link: "/servicos/0", text: "Manutenção Preventiva e Corretiva" },
  { link: "/servicos/1", text: "Instalação de equipamentos" },
  { link: "/servicos/2", text: "Suporte técnico especializado" },
  { link: "/servicos/3", text: "Avaliação técnica" }
];

const navLinksEnd = [
    { link: "/", text: "Home" },
    { link: "https://www.bosolucoes.tec.br/", text: "Compre Produtos"},
    { link: "https://api.whatsapp.com/send?phone=5511974111995&text=Olá Bruno! Acessei seu site e quero saber mais sobre seus serviços!", text: "Fale conosco" }
  ];
const MyNavbar = ({logo}) => (
  <BigWhiteBox>
  <Navbar collapseOnSelect expand="lg">
    <Container >
      <Navbar.Brand href="/">
      <Image src={logo} width={90}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto color-primary">
          {navLinksStart.map((item, index) => (
            <Nav.Link key={index} href={item.link} className="text-dark fw-semibold">
              {item.text}
            </Nav.Link>
          ))}
          <NavDropdown title="Serviços" id="collapsible-nav-dropdown" className="text-dark fw-semibold">
            <div  className='bg-white opacity-100'>

            <h6  className='text-center text-secondary mx-2' >Nossos serviços</h6>
            {dropdownItems.map((item, index) => (
              <>
                <NavDropdown.Divider />
                <NavDropdown.Item key={index+10} href={item.link}>
                  {item.text}
                </NavDropdown.Item>
              </>
            ))}
            </div>
          </NavDropdown>
        </Nav>
        <Nav>
            {navLinksEnd.map((item, index) => (
                <Nav.Link key={index+100} href={item.link} className='text-primary mx-2 fs-6 fw-bold text-decoration-underline'>
                {item.text}
                </Nav.Link>
            ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </BigWhiteBox>
);

export default MyNavbar;
