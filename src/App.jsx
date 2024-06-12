import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Pages and Components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Faq from './pages/Faq';
import Contact from './pages/Contact';


function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/Home' element={ <Home /> } />
            <Route path='/Services' element={ <Services /> } />
            <Route path='/Faq' element={ <Faq /> } />
            <Route path='/Contact' element={ <Contact /> } />
          </Routes>
        </div>
      </Router>
    </div>
    </>
  )
}

export default App
