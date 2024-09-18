import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Service from './Components/Service'
import Conctacts from './Components/Conctacts'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

function App() {
  const location = useLocation();

  return (
    <div className='mx-auto px-40 '>
      <Navbar />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={60000}
          classNames="page"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contacts" element={<Conctacts />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  )
}
