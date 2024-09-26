// import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import AllNotes from './Components/AllNotes/AllNotes'
import TimeLineNotes from './Components/TimeLineNotes/TimeLineNotes'


const Routing = createBrowserRouter([
  {path:'',element:<Layout/> ,children:[
    {index:true,element:<Home/>},
    {path:'register',element:<Register/>},
    {path:'login',element:<Login/>},
    {path:'userNotes',element:<AllNotes/>},
    {path:'alltimenotes',element:<TimeLineNotes/>}

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
