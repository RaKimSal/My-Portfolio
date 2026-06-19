import { useState, useEffect} from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import instagramIcon from '../assets/img/instagram.png';
import facebookIcon from '../assets/img/facebook.png';
import linkedInIcon from '../assets/img/linkedin.png';
import Popup from "../components/Popup";
/*
import facebookIcon from '../assets/img/nav-icon1.svg';
import instagramIcon from '../assets/img/insta.svg';
import linkedInIcon from '../assets/img/nav-icon3.svg'; */


const NavBar = () => {
    const [activeLink, setActiveLink]= useState ('home');
    const [scrolled, seScrolled] = useState(false);
    const [showPop, setShowPopup] = useState(false);

    useEffect(()=> {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else{ 
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink =(value) => {
        setActiveLink(value);
    }

    return (  
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
            <Container>
                <Navbar.Brand href="#aboutMe">
                    <img src={logo} alt="logo" className="nav-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#aboutMe" className ={activeLink ==='aboutMe'? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('aboutMe')}>About Me</Nav.Link>
                        <Nav.Link href="#howIwork" className ={activeLink ==='howIwork'? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('howIwork')}>How I Work</Nav.Link>
                        <Nav.Link href="#upComing" className ={activeLink ==='upComing'? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('upcoming')}>Upcoming</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.facebook.com/"><img src={facebookIcon} alt=""/></a>
                            <a href="https://www.instagram.com/"><img src={instagramIcon} alt=""/></a>
                            <a href="https://www.linkedin.com/jobs/"><img src={linkedInIcon} alt=""/></a>
                        </div>
                        <button className="vvd" onClick={() => setShowPopup(true)}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
                <Popup show={showPop} onClose={() => setShowPopup(false)} />
        </Navbar>
    );
}
 
export default NavBar;