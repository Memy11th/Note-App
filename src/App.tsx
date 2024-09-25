// import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Register from './Components/Register/Register'


let Routing = createBrowserRouter([
  {path:'',element:<Layout/> ,children:[
    {index:true,element:<Home/>},
    {path:'register',element:<Register/>}
  ]}
])
function App() {

  return (
    <>
     <RouterProvider router={Routing}>

     </RouterProvider>
    </>
  )
}

export default App
