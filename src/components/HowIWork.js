import img1 from "../assets/img/thinking.gif";
import img2 from "../assets/img/researching.gif";
import img3 from "../assets/img/planning.gif";
import img4 from "../assets/img/designing.gif";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HowIWork = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: {
        max: 4000,
        min: 3000,
      },
      items: 5,
    },

    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
    },

    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
    },

    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
    },
  };

  return (
    <section className="howIWork" id="howIwork">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="howIWork-bx wow zoomIn">
              <h2>How I Work</h2>

              <p>
                This is my thought process when creating a project.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img
                    src={img1}
                    alt="Thinking process"
                  />

                  <h5>Ask Nico</h5>
                </div>

                <div className="item">
                  <img
                    src={img2}
                    alt="Researching process"
                  />

                  <h5>Complaining</h5>
                </div>

                <div className="item">
                  <img
                    src={img3}
                    alt="Planning process"
                  />

                  <h5>Doing it anyway</h5>
                </div>

                <div className="item">
                  <img
                    src={img4}
                    alt="Designing process"
                  />

                  <h5>Thanking Nico</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;