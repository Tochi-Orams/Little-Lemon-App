import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../Assets/Logo.svg"

const Nav = () => {
    const [prevScroll, setPrevScroll] = useState(0)
    const navRef = useRef(null);

    const handleScroll = () => {
      if (window.scrollY > prevScroll && window.scrollY > 100) {
        navRef.current.style.transform="translateY(-200px)"
      } else {
        navRef.current.style.transform="translateY(0px)"
      }
      setPrevScroll(window.scrollY)
    }

    useEffect(() => {
      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    })

    return (
        <nav className="navbar" ref={navRef} tabIndex="0">
            <div className="Logo">
                <a href="/">
                    <img src={logo} alt="Home" width="200" />
                </a>
            </div>
            <ul className="menu">
                <li className="navitem">
                    <a className="navlink" href="/">About</a>
                </li>
                <li className="navitem">
                    <a className="navlink" href="/">Menu</a>
                </li>
                <li className="navitem">
                    <a className="navlink" href="/">Reservations</a>
                </li>
                <li className="navitem">
                    <a className="navlink" href="/">Order Online</a>
                </li>
                <li className="navitem login">
                    <a className="navlink" href="/">
                        <FontAwesomeIcon id="user" icon={faUser} size="1x" color="#b9b9b9"/>
                        Log in
                    </a>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;