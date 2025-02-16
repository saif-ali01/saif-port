import React, { useEffect, useState } from 'react'
import './App.css'
import Main from './pages/Main'
import Nav from "./pages/Nav.jsx"
import Topbar from './component/Topbar.jsx'


const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      {isMobile ? <Topbar /> : <Nav />}
      <Main />
    </div>
  )
}

export default App