//Components
import BigImageBox from '../components/BigImageBox/index';
import MyNavbar from '../components/NavBar.jsx/index.jsx';

//Libraryes
import { Container,} from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

//Assets
import logo from '../assets/Logo.svg'
import background from '../assets/Bg-from-Jakub.webp'


export default function MainHome(){
    return(
    <BigImageBox image={background}>
        <Container fluid>
            <MyNavbar logo={logo} />
            <Outlet/>
        </Container>
    </BigImageBox>
    )
}
