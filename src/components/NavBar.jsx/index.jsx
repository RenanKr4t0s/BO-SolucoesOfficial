import { Navbar, Container, Nav, NavDropdown, Image } from 'react-bootstrap';

const navLinksStart = [
  { link: "#features", text: "Sobre nós" },
  { link: "#pricing", text: "Contato" },
  { link: "/servicos", text: "SERVICOS PROVISORIO" }
];
const dropdownItems = [
  { link: "#action/3.1", text: "Instalação" },
  { link: "#action/3.2", text: "Manutenção Preventiva" },
  { link: "#action/3.3", text: "Manutenção Corretiva" },
  { link: "#action/3.4", text: "Faça um Orçamento" }
];

const navLinksEnd = [
    { link: "/", text: "Home" },
    { link: "#pricing", text: "Fale conosco" }
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
            {dropdownItems.map((item, index) => (
              <NavDropdown.Item key={index} href={item.link}>
                {item.text}
              </NavDropdown.Item>
            ))}
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
        <Nav>
            {navLinksEnd.map((link, index) => (
                <Nav.Link key={index} href={link.link} className='text-primary'>
                {link.text}
                </Nav.Link>
            ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNavbar;
