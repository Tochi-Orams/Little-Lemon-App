import './App.css';
import { useState, useEffect } from 'react';
import Nav from "./Components/Nav.js";
import Main from "./Components/Main.js";
import Footer from "./Components/Footer.js";
import MobileNav from './Components/MobileNav';
import MobileFooter from './Components/MobileFooter';

function App() {
  const [width, setWidth] = useState(0)

  useEffect (() => {
    handleResize();

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }


  }, [])

  const handleResize = () => {
    const width = window.innerWidth
    setWidth(width)
  }

  // const breakpoint = {change: width > 1000}

  return (
    <>
      {width > 1000 ? <Nav/> : <MobileNav />}
      <Main/>
      {width > 850 ? <Footer/> : <MobileFooter />}
    </>
  );
};

export default App;
