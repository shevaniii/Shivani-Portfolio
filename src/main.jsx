import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About'
import Contact from './components/Contact/Contact.jsx'
import Projects from './components/Projects/Projects.jsx'
import User from './components/User/User.jsx'
import Graphics from './components/Graphics/Graphics.jsx'
const router = createBrowserRouter(
  [
  {
    path:'/',
    element: <Layout />,
    children:[
      {
        path:'',
        element: <Home />
      },
      {
        path:'About',
        element: <About />
      },{
        path:'Contact',
        element:<Contact />
      },
      {
        path:'Projects',
        element:<Projects />
      },
      {
        path:'User/:id',
        element:<User />
      },
      {
        path:'Graphics',
        element:<Graphics />
      },

    ]

    }
]
          // createRoutesFromElements(
          //   <route path='/' elements={<Layout />}>
          //      <route path='' element={<Home />} />
          //      <route path='About' element={<About />} />
               
          //      </route> 
          // )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
