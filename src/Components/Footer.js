import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import logo2 from "../Assets/Logo 2.png"

const Footer = () => {
    return (
        <footer>
            <div className="fLogo">
                <a href="/">
                    <img src={logo2} alt="Logo 2" />
                </a>
            </div>
            <div className="fList fCol">
                <ul>
                    <li className="listTitle">
                        Navigation
                    </li>
                    <li className="fItem">
                        <a className="fLink" href="/">About</a>
                    </li>
                    <li className="fItem">
                        <a className="fLink" href="/">Menu</a>
                    </li>
                    <li className="fItem">
                        <a className="fLink" href="/">Reservations</a>
                    </li>
                    <li className="fItem">
                        <a className="fLink" href="/">Order Online</a>
                    </li>
                    <li className="fItem">
                        <a className="fLink" href="/">Login</a>
                    </li>
                </ul>
            </div>
            <div className="fList fCol">
                <ul>
                    <li className="listTitle">
                        Contact
                    </li>
                    <li className="fItem">
                        <a className="fLink" href="mailto: hello@example.com">Email</a>
                    </li>
                    <li className="fItem">
                        <a className="fLink" href="/">Phone Number</a>
                    </li>
                    <li className="fItem">
                        <a className="fLink" href="/">Address</a>
                    </li>
                </ul>
            </div>
            <div className="fList fCol">
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
    )
};

export default Footer;