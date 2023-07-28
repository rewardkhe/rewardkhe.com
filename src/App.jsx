import {Link, Routes, Route } from 'react-router-dom' 
import './App.css'
import { About } from './assets/About'
import { CompoundVisualiser } from './assets/Compoundvisualiser'
import { ExpenseCalculator } from './assets/Expensecalculator'
import { FirstGlance } from './assets/firstglance'
import { Flatmates } from './assets/FlatmatesListingTracker'
import { Footer } from './assets/Footer'
import { Home } from './assets/Home'
import { NotFound } from './assets/Notfound'
import { SudokuSolver } from './assets/SudokuSolver'
import { TicTacToe } from './assets/TicTacToe'
import { WebSocketApp } from './assets/WebSocketApp'
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
      <Route path="/work/first-glance" element = {<FirstGlance/>} />
      <Route path="/work/compound-visualiser" element = {<CompoundVisualiser/>} />
      <Route path="/work/expense-calculator" element = {<ExpenseCalculator/>} />
      <Route path="/work/sudoku-solver" element = {<SudokuSolver/>} />
      <Route path="/work/flatmates-listing-tracker" element = {<Flatmates/>} />
      <Route path="/work/Tic-Tac-Toe" element = {<TicTacToe/>} />
      <Route path="/work/web-socket-app" element = {<WebSocketApp/>} />



      <Route path="*" element={<NotFound />} />

      <Route/>
    </Routes>
 <Footer />
    </>
   )
}

export default App
