import {Link, Routes, Route } from 'react-router-dom' 
import './App.css'
import { About } from './assets/About'
import { Footer } from './assets/Footer'
import { Home } from './assets/Home'
import { Work } from './assets/Work'

function App() {
return(
  <>
  <div id = "linkclass"> 
     <Link to = "/"> Home </Link> 
     <Link to = "/work"> Work </Link> 
    <Link to = "/about"> About </Link> 
 </div>

 <Routes>
      <Route path="/" element = {<Home/>} /> 
      <Route path="/work" element = {<Work/>} />
      <Route path="/about" element = {<About/>} />

      <Route/>
    </Routes>
 <Footer />
    </>
   )
}

export default App
