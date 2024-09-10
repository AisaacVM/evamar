
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import Inicio from './components/pages/inicio'

function App() {

  return (
    <div className='App'>
      <Router>
        <Navbar></Navbar>
      </Router>
    <Inicio></Inicio>
    </div>
  )
}

export default App
