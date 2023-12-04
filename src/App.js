import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Student from './Components/Student/Student';
import Studentview from './Components/Student/Studentview';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Certificate from './Components/Student/Certificate';
import Certificateview from './Components/Student/Certificateview';


function App() {
return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/student' element={<Student  method='post' />}></Route>
        <Route path='/studentview' element={<Studentview  method='get'/>}></Route>
        <Route path='/certificate' element={<Certificate  method='post'/>}></Route>
        <Route path='/certificateview' element={<Certificateview />}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
