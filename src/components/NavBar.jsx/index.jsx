import { Navbar, Container, Nav, NavDropdown, Image } from 'react-bootstrap';

const navLinksStart = [
  { link: "/#welcome", text: "Sobre nós" },
  { link: "#contact", text: "Contato" },
  { link: "/hoami", text: "Conheça Bruno Oliveira" }
];
const dropdownItems = [
  { link: "/servicos/0", text: "Manutenção Preventiva e Corretiva" },
  { link: "/servicos/1", text: "Instalação de equipamentos" },
  { link: "/servicos/2", text: "Suporte técnico especializado" },
  { link: "/servicos/3", text: "Avaliação técnica" }
];

const navLinksEnd = [
    { link: "/", text: "Home" },
    { link: "https://api.whatsapp.com/send?phone=5511974111995&text=Olá Bruno! Acessei seu site e quero saber mais sobre seus serviços!", text: "Fale conosco" }
  ];
const MyNavbar = ({logo}) => (
  <Navbar collapseOnSelect expand="lg" className='rounded-5 shadow-lg'>
    <Container>
      <Navbar.Brand href="/">
      <Image src={logo} width={90}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {navLinksStart.map((link, index) => (
            <Nav.Link key={index} href={link.link}>
              {link.text}
            </Nav.Link>
          ))}
          <NavDropdown title="Serviços" id="collapsible-nav-dropdown">
            <h6  className='text-center text-secondary mx-2' >Nossos serviços</h6>
            {dropdownItems.map((item, index) => (
              <>
                <NavDropdown.Divider />
                <NavDropdown.Item key={index} href={item.link}>
                  {item.text}
                </NavDropdown.Item>
              </>
            ))}
          </NavDropdown>
        </Nav>
        <Nav>
            {navLinksEnd.map((link, index) => (
                <Nav.Link key={index} href={link.link} className='text-primary mx-2 fs-6 fw-bold text-decoration-underline'>
                {link.text}
                </Nav.Link>
            ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNavbar;
