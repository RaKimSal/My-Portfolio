import headerImg from "../assets/img/header-img.png";
import headerImgR from "../assets/img/header-imgR.png";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Popup from "../components/Popup";

const Banner = () => {
  const fullText = "Welcome, my name is Kim Salazar";
  const [typedText, setTypedText] = useState("");
  const [showPop, setShowPopup] = useState(false);

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="banner" id="aboutMe">
      <Container fluid>
        <Row className="align-items-center justify-content-center banner-row">
          {/* Left text block */}
          <Col xs={12} md={6} xl={6} className="text-center banner-text-block">
            <div>
              <div className="intro-title-wrapper">

                <h1
                  className="banner-title typing-title"
                  style={{
                    fontFamily: "MyCursiveFont, cursive",
                    fontWeight: 400,
                    marginBottom: 0,
                  }}
                >
                  {typedText}
                  <span className="typing-cursor">|</span>
                </h1>
              </div>

              <p>
                I am a fifth-year Civil Engineering student with a Computing
                Technology option at the University of Ottawa. I am currently
                completing a co-op placement in the Seismic Department at an
                HVAC company, where I have worked on several projects involving
                HVAC installation design and seismic restraint requirements in
                accordance with the OBC and NBC. Although I do not have experience
                in HTML, JavaScript and CSS, I am interested to learn.
              </p>
              <h2>Let&apos;s build something meaningful</h2>
              <button className="connect-btn" onClick={() => setShowPopup(true)}>
                <span>Let’s Connect</span>
                  <span className="connect-icon">➜</span>
              </button>
            </div>
          </Col>

          {/* Right overlapping images */}
          <Col xs={12} md={5} xl={4} className="text-center">
            <div className="image-overlap-container">
              <img
                src={headerImg}
                alt="Coding Tools"
                className="coding-img"
              />

              <img
                src={headerImgR}
                alt="Civil Engineering Tools"
                className="civil-img"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Popup show={showPop} onClose={() => setShowPopup(false)} />
    </section>
  );
};

export default Banner;