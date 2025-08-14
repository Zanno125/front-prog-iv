import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './components/LoginForm'
import HomePage from './pages/HomePage/HomePage'
import LoginForm from './components/LoginForm'
import Register from './pages/Register/Register'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/recoverAccount" element={<h1>recuperar cuenta</h1>} />
         
          
        </Routes>

      </BrowserRouter>
    

    </>
  )
}

export default App
