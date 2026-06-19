import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/instagram.png";
import navIcon2 from "../assets/img/facebook.png";
import navIcon3 from "../assets/img/linkedin.png";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={6} lg={5} sm={5}>
            <a href="#aboutMe">
            <img src={logo} alt="Logo" /> </a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.instagram.com/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.linkedin.com/jobs/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>SEG3125 Analysis and Design of User Inerface </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;