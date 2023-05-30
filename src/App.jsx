import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import Login from './components/Login';
import Pokemons from './components/Pokemons';
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/pokemons' element={<Pokemons />} />
      </Routes>
    </HashRouter>
  );
}

export default App