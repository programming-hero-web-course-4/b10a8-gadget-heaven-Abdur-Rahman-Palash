import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import CardDetail from './Components/CardDetail/CardDetail.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Reviews from './Components/Reviews/Reviews.jsx';
import Cards from './Components/Cards/Cards.jsx';
import ContextProvider from './Components/Provider/ContextProvider.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
     {
      path: '/',
      element:<Home></Home>
     },
     {
      path: '/cards/:product_id',
      element: <CardDetail></CardDetail>,
      loader: ()=> fetch('/heaven.json')
          },
          {
            path:'/dashboard',
            element: <Dashboard></Dashboard>
          },
         {
          path:'/statistics',
          element:<Statistics></Statistics>
         },
         {
          path:'/reviews',
          element: <Reviews></Reviews>
         },{
          path:'/allcategory',
          loader: ()=> fetch('/heaven.json'),
          element:<Cards></Cards>
         }
        
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
    <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
 </StrictMode>,
)
