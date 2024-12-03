import { useState } from 'react'

import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import McDonalds from './Resturants/McDonalds';
import { CardProvider } from './Componet/ContextReducer';


function App() {


  return (
   
    
     <Routes>
      
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home'  element={<Home />} />
        <Route path='/restaurant'  element={<McDonalds/>} />
      </Routes>
     
   
  )
}

export default App
