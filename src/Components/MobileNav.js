import { useState, useRef, useEffect} from 'react';
import logo from "../Assets/Logo.svg"

const MobileNav = () => {
    // Handling hide on scroll
    const [prevScroll, setPrevScroll] = useState(0)
    const headRef = useRef(null);

    const elements = {
        hamburger: document.querySelector(".hamburger"),
        menu: document.querySelector(".mMenu"),
        overlay: document.querySelector(".overlay"),
        mNavlink: document.querySelectorAll(".mNavlink"),
        allOverlay: document.querySelectorAll(".overlay"),
    }

    const handleScroll = () => {
        if (window.scrollY > prevScroll && window.scrollY > 100 && !elements.overlay.classList.contains("active")) {
            headRef.current.style.transform="translateY(-200px)"
        } else {
            headRef.current.style.transform="translateY(0px)"
        }
        setPrevScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
      }
    })

    // Handling opening the menu
    const activate = () => {
        elements.hamburger.classList.toggle("active");
        elements.menu.classList.toggle("active");
        elements.overlay.classList.toggle("active");
    }
    const deactivate_link = () => {
        elements.hamburger.classList.remove("active");
        elements.menu.classList.remove("active");
    }
    const deactivate_overlay = () => {
        elements.hamburger.classList.remove("active");
        elements.menu.classList.remove("active");
        elements.overlay.classList.remove("active");
    }

    useEffect(() => {
        if (elements.hamburger) {
            elements.hamburger.addEventListener("click", activate)
            return () => elements.hamburger.removeEventListener("click", activate)
        }
    })
    useEffect(() => {
        if (elements.mNavlink) {
            elements.mNavlink.forEach(n => n.addEventListener("click", deactivate_link))
            return () => elements.mNavlink.forEach(n => n.removeEventListener("click", deactivate_link))
        }
    })
    useEffect(() => {
        if (elements.allOverlay) {
            elements.allOverlay.forEach(n => n.addEventListener("click", deactivate_overlay))
            return () => elements.allOverlay.forEach(n => n.removeEventListener("click", deactivate_overlay))
        }
    })

    return (
        <nav className="navbar" ref={headRef}tabIndex="0">
            <div className="mLogo">
                <a href="/">
                    <img src={logo} alt="Home" width="200" />
                </a>
            </div>
            <ul className="mMenu">
                <li className="mNavitem">
                    <a className="mNavlink" href="/">About</a>
                </li>
                <li className="mNavitem">
                    <a className="mNavlink" href="/">Menu</a>
                </li>
                <li className="mNavitem">
                    <a className="mNavlink" href="/">Reservations</a>
                </li>
                <li className="mNavitem">
                    <a className="mNavlink" href="/">Order Online</a>
                </li>
                <li className="mNavitem mLogin">
                    <a className="mNavlink" href="/">Log in</a>
                </li>
            </ul>
            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <div className="overlay"></div>
        </nav>
    )
}

export default MobileNav;