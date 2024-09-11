import background from '../assets/Bg-from-Jakub.jpg'
import BigImageBox from '../components/BigImageBox/index';
import MyNavbar from '../components/NavBar.jsx/index.jsx';


import { Container,} from 'react-bootstrap';
import logo from '../assets/Logo.svg'
import { Outlet } from 'react-router-dom';

export default function MainHome(){
    return(
    <BigImageBox image={background}>
        <Container fluid>
            <MyNavbar logo={logo} />
            <Outlet />
        </Container>
    </BigImageBox>
    )
}
