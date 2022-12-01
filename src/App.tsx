import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/estaticos/Navbar';
import Apresentacao from './pages/Apresentacao';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Apresentacao />}/>
        <Route path='/sobre' element={<About />}/>
        <Route path='/contato' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </Router>
  );
}

export default App;
