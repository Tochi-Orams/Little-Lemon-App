import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import logo2 from "../Assets/Logo 2.png"

// Mobile footer setup
const ExpandButton = ({name, cls, contents}) => {
    return (
        <div className="ExpandSections">
            <div className={cls}>
                <p className="fName">{name}</p>
                <FontAwesomeIcon icon={faChevronDown} size="1x" color="#00000" className="arrow" />
            </div>
            <div>
                {contents}
            </div>
        </div>
    )
}

const Footer = ({ vw, setPage }) => {
    const [modal, setModal] = useState(false)

    const fake = () => {
        setModal(true)
    }

    useEffect(() => {
        const tmt = setTimeout(() => {setModal(false)}, 5000);
        if (modal) {
            document.getElementById("fakeLink").classList.add("active")
            document.querySelector(".overlay2").classList.add("active")
        } else {
            document.getElementById("fakeLink").classList.remove("active")
            document.querySelector(".overlay2").classList.remove("active")
        }
        return () => clearTimeout(tmt)
    }, [modal])

    const allLinks = [
        {
            name: "Navigation",
            cls: "expand expand_1",
            contents: () => {
                return (
                    <ul>
                        <li className="fitem mf">
                            <Link to="not-available" className="fLink" onClick={() => setPage("About")}>About</Link>
                        </li>
                        <li className="fitem mf">
                            <Link to="not-available" className="fLink" onClick={() => setPage("Menu")}>Menu</Link>
                        </li>
                        <li className="fitem mf">
                            <Link className="fLink" to="reserve-a-table">Reservations</Link>
                        </li>
                        <li className="fitem mf">
                            <Link to="not-available" className="fLink" onClick={() => setPage("Orders")}>Order Online</Link>
                        </li>
                        <li className="fitem mf">
                            <Link to="not-available" className="fLink" onClick={() => setPage("Login")}>Login</Link>
                        </li>
                    </ul>
                )
            }
        },
        {
            name: "Contact",
            cls: "expand expand_2",
            contents: () => {
                return (
                    <ul>
                        <li className="fitem mf">
                            <div className="fLink" onClick={fake}>Email</div>
                        </li>
                        <li className="fitem mf">
                            <div className="fLink" onClick={fake}>Phone Number</div>
                        </li>
                        <li className="fitem mf">
                            <div className="fLink" onClick={fake}>Address</div>
                        </li>
                    </ul>
                )
            }
        },
        {
            name: "Socials",
            cls: "expand expand_3",
            contents: () => {
                return (
                    <ul className='mfLogos'>
                        <li className="fitem mf">
                            <a className="fLink" href="https://instagram.com/">
                                <FontAwesomeIcon icon={faInstagram} size="2x" color="#b9b9b9"/>
                            </a>
                        </li>
                        <li className="fitem mf">
                            <a className="fLink" href="https://facebook.com/">
                                <FontAwesomeIcon icon={faFacebook} size="2x" color="#b9b9b9"/>
                            </a>
                        </li>
                        <li className="fitem mf">
                            <a className="fLink" href="https://tiktok.com/">
                                <FontAwesomeIcon icon={faTiktok} size="2x" color="#b9b9b9"/>
                            </a>
                        </li>
                    </ul>
                )
            }
        }
    ]

    const dropdowns = {
        nv: document.querySelector(".expand_1"),
        ct: document.querySelector(".expand_2"),
        sc: document.querySelector(".expand_3")
    }

    const expand = (which) => {
        if (which === 1) {
            dropdowns.nv.classList.toggle("active");
        } else if (which === 2) {
            dropdowns.ct.classList.toggle("active");
        } else if (which === 3) {
            dropdowns.sc.classList.toggle("active");
        }
    }

    return (
        <>
            {vw > 850 ?
            <>
                <footer>
                    <div className="fLogo">
                        <Link to="/">
                            <img src={logo2} alt="Logo 2" />
                        </Link>
                    </div>
                    <div aria-label="expand" className="fList fCol">
                        <ul>
                            <li className="listTitle">
                                Navigation
                            </li>
                            <li className="fItem">
                                <Link to="not-available" className="fLink" onClick={() => setPage("About")}>About</Link>
                            </li>
                            <li className="fItem">
                                <Link to="not-available" className="fLink" onClick={() => setPage("Menu")}>Menu</Link>
                            </li>
                            <li className="fItem">
                                <Link className="fLink" to="reserve-a-table">Reservations</Link>
                            </li>
                            <li className="fItem">
                                <Link to="not-available" className="fLink" onClick={() => setPage("Orders")}>Order Online</Link>
                            </li>
                            <li className="fItem">
                                <Link to="not-available" className="fLink" onClick={() => setPage("Login")}>Login</Link>
                            </li>
                        </ul>
                    </div>
                    <div aria-label="expand" className="fList fCol">
                        <ul>
                            <li className="listTitle">
                                Contact
                            </li>
                            <li className="fItem">
                                <div className="fLink" onClick={fake}>Email</div>
                            </li>
                            <li className="fItem">
                                <div className="fLink" onClick={fake}>Phone Number</div>
                            </li>
                            <li className="fItem">
                                <div className="fLink" onClick={fake}>Address</div>
                            </li>
                        </ul>
                    </div>
                    <div aria-label="expand" className="fList fCol">
                        <ul>
                            <li className="listTitle">
                                Socials
                            </li>
                            <div className="socials">
                                <li className="fItem">
                                    <a className="fLink" href="https://instagram.com/">
                                        <FontAwesomeIcon icon={faInstagram} size="2x" color="#b9b9b9"/>
                                    </a>
                                </li>
                                <li className="fItem">
                                    <a className="fLink" href="https://facebook.com/">
                                        <FontAwesomeIcon icon={faFacebook} size="2x" color="#b9b9b9"/>
                                    </a>
                                </li>
                                <li className="fItem">
                                    <a className="fLink" href="https://tiktok.com/">
                                        <FontAwesomeIcon icon={faTiktok} size="2x" color="#b9b9b9"/>
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </footer>
            </>
            :
            <>
                <footer>
                    <div className="fLogo">
                        <Link to="/">
                            <img src={logo2} alt="Logo 2" />
                        </Link>
                    </div>
                    <div className="footerRight">
                        {allLinks.map((item, i) => (
                            <div key={i} onClick={() => expand(i + 1)}>
                                <ExpandButton
                                  name={item.name}
                                  cls={item.cls}
                                  key={i}
                                  contents={item.contents()}
                                />
                            </div>
                        ))}
                    </div>
                </footer>
            </>}
            <div id="fakeLink">
                <div id="timer"></div>
                <span onClick={() => setModal(false)}><FontAwesomeIcon icon={faX}/></span>
                <h3>Not a real link</h3>
                <p>This link isn't real... It's more just for decoration</p>
            </div>
            <div className="overlay2" onClick={() => setModal(false)}></div>
        </>
    )
};

export default Footer;