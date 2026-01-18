import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Route,RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/home/home'
import About from './components/about/about'
import Contact from './components/contact/contact'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<App />,
//     children:[
//       {
//         path:'',
//         element:<Home />
//       },
//       {
//         path:'about',
//         element:<About />
//       },
//       {
//         path:'contact',
//         element:<Contact />
//       }
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
    
    
  </StrictMode>,
)
