
import './App.css'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
function App() {

  return (
    <>
    <Router>
    <Navbar/>

      <Routes>
        
        <Route path='/' element={<Home/>}></Route>
        <Route index element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
      </Routes>

    <Footer/>
    </Router>
    </>
  )
}

export default App
