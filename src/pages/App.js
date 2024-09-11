import MainHome from './MainHome.jsx';
import Welcome from './Welcome.jsx';
import Servicos from './Servicos.jsx';
import ServiceSet from './ServiceSet.jsx';
import TextCard from '../components/TextCard.jsx';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import HomeTexts from '../components/HomeTexts.jsx';
import HomeBottom from './RoutePages/HomeBottom.jsx';
import AltTexts from '../components/AltTexts.jsx';

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
        path:"/servicos",
        element:<AltTexts />
      }
   ]
	},
  {
		path:"/susu",
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
		  element: <HomeBottom/>
      },
      {
        path:"/servicos",
        element:<Servicos />
      }
   ]
	},
  {
		path:"/servicos",
		element: <Servicos/>
	},
])




function App() {
  return (
    <>
      {/* <MainHome/> */}
      <RouterProvider router={routerTop} />
      <RouterProvider router={routerBottom} />
      {/* <Welcome /> */}
      {/* <Servicos /> */}
    </>
  );
}

export default App;
