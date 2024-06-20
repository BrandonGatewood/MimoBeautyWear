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
            <Route path='MimoBeautyWear/' element={ <Home /> } />
            <Route path='MimoBeautyWear/Home' element={ <Home /> } />
            <Route path='MimoBeautyWear/Services' element={ <Services /> } />
            <Route path='MimoBeautyWear/Faq' element={ <Faq /> } />
            <Route path='MimoBeautyWear/Contact' element={ <Contact /> } />
          </Routes>
        </div>
      </Router>
    </div>
    </>
  )
}

export default App
