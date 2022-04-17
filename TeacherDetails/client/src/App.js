// import './App.css';
import React from 'react';
import {Routes , Route} from 'react-router-dom'
import { ClassDetails } from './components/ClassDetails';
import { Home } from './components/home';
import { Login } from './components/Login';
import { Registration } from './components/Registration';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/registration' element={<Registration/>}></Route>
      <Route path='/details' element={<ClassDetails/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
