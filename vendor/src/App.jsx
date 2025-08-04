import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import CenterPage from './Components/CenterPage/Center'
import Registration from './Pages/Authentication/Registration';
import Header from './Components/Nav/Header';
import Sidebar from './Components/Nav/Sidebar';
function App() {


  return (
    <>
    <div className=''>
      {/* <Header/>
      <Sidebar/> */}
      <Routes>
        <Route path='/' element={ <CenterPage/> } />
        <Route path='/Register' element= { <Registration /> } />
      </Routes>
    </div>
    </>
  )
}

export default App
