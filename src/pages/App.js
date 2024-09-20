// Bibliotecas.
import AOS from 'aos';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { FloatingWhatsApp } from 'react-floating-whatsapp'


//Páginas
import MainHome from './MainHome.jsx';
import Servicos from './Servicos.jsx';
import Welcome from './Welcome.jsx';
import HoAmI from './HoAmI.jsx';
import ServicesDetail from './ServicesDetail.jsx';

//Componentes
import HomeTexts from '../components/HomeTexts.jsx';
import AltTexts from '../components/AltTexts.jsx';
import Footer from '../components/Footer.jsx';

//Elementos
import avatar from '../assets/BrunoFace.webp'

// Router
const routerTop = createBrowserRouter([
	{
		path:"/",
		element: <MainHome/>,
    children:[
      {
      path:"/",
		  element: <HomeTexts/>,
      },
      {
        path:"/hoami",
        element: <AltTexts/>,
      },
      {
        path:"/servicos/:id",
        element:<AltTexts />
      }
   ]
	},
])

const routerBottom = createBrowserRouter([
  {
		path:"/",
		element: <><Outlet/></>,
    children:[
      {
      path:"/",
		  element: <Welcome/>
      },
      {
        path:"/hoami",
        element: <HoAmI/>,
      },
      {
        path:"/servicos/:id",
        element:<ServicesDetail/>
      }
   ]
	}
])




function App() {
  AOS.init({
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 1200, // values from 0 to 3000, with step 50ms
  });
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <FloatingWhatsApp 
        phoneNumber = "5511974111995"
        accountName="Bruno Oliveira"
        avatar={avatar}
        statusMessage='Seu B.O, nossa solução'
        chatMessage='Olá! 🤝 Como podemos ajuda-lo?'
        placeholder='Digite sua mensagem...'
      />
      <RouterProvider router={routerTop} />
      <RouterProvider router={routerBottom} />
      <Servicos />
      <Footer />
    </div>
  );
}

export default App;
