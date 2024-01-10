import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import Header from './components/Header/Header';

function App() {
  return (
    <>
    {/* Header Component*/}
      <Header />
      <Card />
      <Footer />
    </>
  )
}

export default App
