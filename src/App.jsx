import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Nav from "./components/Nav";
import Home from "./components/Home";
import Skills from "./components/Skills"
import Projects  from './components/Projects'
import CTA from './components/CTA'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from "./components/Footer"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className= ' bg-gray-900 p-5'>

   <Nav/>
    <Home/>
    <Skills/>
    <Projects/>
      <CTA/>
      <Testimonial/>
     <Contact/>
      </div>
     <Footer/>
    </>
  
  
  )
}

export default App
