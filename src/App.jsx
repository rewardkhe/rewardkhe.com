import {Link, Routes, Route } from 'react-router-dom' 
import './App.css'
import { About } from './assets/About'
import { Home } from './assets/Home'
import { Work } from './assets/Work'

function App() {
return(
  <>
     <Link to = "/"> Home</Link> 
     <Link to = "/work"> Work</Link> 
    <Link to = "/about"> About</Link> 



    <Routes>
      <Route path="/" element = {<Home/>} /> 
      <Route path="/work" element = {<Work/>} />
      <Route path="/about" element = {<About/>} />

      <Route/>
    </Routes>
    </>
  )


  // const [count, setCount] = useState(0)
  // return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Hello World</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Hello world baby
    //   </p>
    // </>
  // )
}

export default App
