import { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../Assets/Logo.svg"

const Nav = ({ vw, setPage }) => {
    const [prevScroll, setPrevScroll] = useState(0)
    const [open, setOpen] = useState(false)
    const navRef = useRef(null);

    const handleScroll = () => {
      if (!open) {
        if (window.scrollY > prevScroll && window.scrollY > 100) {
            navRef.current.style.transform="translateY(-200px)"
          } else {
            navRef.current.style.transform="translateY(0px)"
          }
          setPrevScroll(window.scrollY)
      }
    }

    useEffect(() => {
      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    })

    //  Mobile Navigation Setup
    const elements = {
        hamburger: document.querySelector(".hamburger"),
        menu: document.querySelector(".mMenu"),
        overlay: document.querySelector(".overlay"),
        mNavlink: document.querySelectorAll(".mNavlink"),
        allOverlay: document.querySelectorAll(".overlay"),
    }

    const activate = () => {
        elements.hamburger.classList.toggle("active")
        elements.menu.classList.toggle("active")
        elements.overlay.classList.toggle("active")
        setOpen(true)
    }
    const deactivate = () => {
        elements.hamburger.classList.remove("active")
        elements.menu.classList.remove("active")
        elements.overlay.classList.remove("active")
        setOpen(false)
    }

    useEffect(() => {
        if (elements.hamburger) {
            elements.hamburger.addEventListener("click", activate)
            return () => elements.hamburger.removeEventListener("click", activate)
        }
    })
    useEffect(() => {
        if (elements.mNavlink) {
            elements.mNavlink.forEach(n => n.addEventListener("click", deactivate))
            return () => elements.mNavlink.forEach(n => n.removeEventListener("click", deactivate))
        }
    })
    useEffect(() => {
        if (elements.allOverlay) {
            elements.allOverlay.forEach(n => n.addEventListener("click", deactivate))
            return () => elements.allOverlay.forEach(n => n.removeEventListener("click", deactivate))
        }
    })

    return (
        <>
            {vw > 1000 ?
            <>
                <nav className="navbar" ref={navRef} tabIndex="0">
                    <div className="Logo">
                        <Link to="/">
                            <img src={logo} alt="Home" width="200" />
                        </Link>
                    </div>
                    <ul className="menu">
                        <li className="navitem">
                            <Link to="not-available" className="navlink" onClick={() => setPage("About")}>About</Link>
                        </li>
                        <li className="navitem">
                            <Link to="not-available" className="navlink" onClick={() => setPage("Menu")}>Menu</Link>
                        </li>
                        <li className="navitem">
                            <Link to="reserve-a-table" className="navlink">Reservations</Link>
                        </li>
                        <li className="navitem">
                            <Link to="not-available" className="navlink" onClick={() => setPage("Orders")}>Order Online</Link>
                        </li>
                        <li className="navitem login">
                            <Link to="not-available" className="navlink" onClick={() => setPage("Login")}>
                                <FontAwesomeIcon id="user" icon={faUser} size="1x" color="#b9b9b9"/>
                                Log in
                            </Link>
                        </li>
                    </ul>
                </nav>
            </>
            :
            <>
                <nav className="navbar" ref={navRef}tabIndex="0">
                    <div className="mLogo">
                        <Link to="/">
                            <img src={logo} alt="Home" width="200" />
                        </Link>
                    </div>
                    <ul className="mMenu">
                        <li className="mNavitem">
                            <Link to="/" className="mNavlink">Home</Link>
                        </li>
                        <li className="mNavitem">
                            <Link to="not-available" className="mNavlink" onClick={() => setPage("About")}>About</Link>
                        </li>
                        <li className="mNavitem">
                            <Link to="not-available" className="mNavlink" onClick={() => setPage("Menu")}>Menu</Link>
                        </li>
                        <li className="mNavitem">
                            <Link to="reserve-a-table" className="mNavlink">Reservations</Link>
                        </li>
                        <li className="mNavitem">
                            <Link to="not-available" className="mNavlink" onClick={() => setPage("Orders")}>Order Online</Link>
                        </li>
                        <li className="mNavitem mLogin">
                            <Link to="not-available" className="mNavlink" onClick={() => setPage("Login")}>Login</Link>
                        </li>
                    </ul>
                    <div aria-label="menu" className="hamburger">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <div className="overlay"></div>
                </nav>
            </>
            }
        </>
    )
};

export default Nav;