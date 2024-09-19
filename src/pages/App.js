import MainHome from './MainHome.jsx';
import Servicos from './Servicos.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import HomeTexts from '../components/HomeTexts.jsx';
import AltTexts from '../components/AltTexts.jsx';
import Footer from '../components/Footer.jsx';
import Welcome from './Welcome.jsx';
import ServicesDetail from './ServicesDetail.jsx';
import HoAmI from './HoAmI.jsx';
import Testador from '../components/Testador.jsx';
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
  {
		path:"/susu/:id",
		element: <Servicos/>
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
	},
  {
		path:"/susu/:id",
		element: <Testador/>
	},
])




function App() {
  return (
    <>
      <RouterProvider router={routerTop} />
      <RouterProvider router={routerBottom} />
      <Servicos />
      <Footer />
    </>
  );
}

export default App;
