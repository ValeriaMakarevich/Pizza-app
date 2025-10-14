import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Cart } from "./pages/Cart/Cart"
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './layout/Lauout/Layout.tsx'
import { Product } from './pages/Product/Product.tsx'
import { PREFIX } from './helpers/API.ts'
import axios from 'axios'
import { AuthLayout } from './layout/Lauout/Auth/AuthLayout.tsx'
import { Login } from './pages/Login/Login.tsx'
import { Register } from './pages/Register/Register.tsx'

const Menu = lazy(() => import('./pages/Menu/Menu'))

 const router = createBrowserRouter([
   {
     path: "/",
     element: <Layout />,
     children: [
       {
         path: "/",
         element: <Suspense fallback={<>Загрузка</>}><Menu /></Suspense>,
       },
       {
         path: "/cart",
         element: <Cart />,
       },
       {
         path: "/product/:id",
         element: <Product />,
         errorElement: <>Ошибка</>,
         loader: async ({ params }) => {
          const { data } = await axios.get(`${PREFIX}/products/${params.id}`)
          return data;
         },
       },
     ],
   },
   {
    path: '/auth',
    element: <AuthLayout/>,
    children:[
      {
        path: 'login',
        element:<Login/>
      }, {
        path: 'register',
        element:<Register/>
      }

    ]
   }
 ]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <RouterProvider router={router}/>
  </StrictMode>
);
