import {useState} from 'react';
import './App.css'

import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import Header from './components/Header/Header';

function App() {
  const [globalName, setGlobalName] = useState();

  const clickGlobalNameChange = () =>{
    setGlobalName('GLOBAL!');
  } 
  return (
    <>
    {/* Header Component*/}
      <Header />

      <button></button>

      <Card />
      <Card />
      <Footer />
    </>
  )
}

export default App
