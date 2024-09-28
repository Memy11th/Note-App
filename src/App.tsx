// import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import AllNotes from './Components/AllNotes/AllNotes'
import TimeLineNotes from './Components/TimeLineNotes/TimeLineNotes'
import Profile from './Components/Profile/Profile';


const Routing = createBrowserRouter([
  {path:'',element:<Layout/> ,children:[
    {index:true,element:<Home/>},
    {path:'register',element:<Register/>},
    {path:'login',element:<Login/>},
    {path:'usernotes',element:<AllNotes/>},
    {path:'alltimenotes',element:<TimeLineNotes/>},
    {path:'profile',element:<Profile/>}

  ]}
])
function App() {

  return (
    <>
      <RecoilRoot>
      <RouterProvider router={Routing}>
      </RouterProvider>
    </RecoilRoot>
  
    </>
  )
}

export default App
