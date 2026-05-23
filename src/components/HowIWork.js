import img1 from "../assets/img/thinking.gif";
import img2 from "../assets/img/researching.gif";
import img3 from "../assets/img/planning.gif";
import img4 from "../assets/img/designing.gif";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const HowIWork = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
    },
    mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
    } 
    };
  return (
    <section className="howIWork" id="howIwork">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="howIWork-bx wow zoomIn">
                        <h2>How I Work</h2>
                        <p>This is my thought process when creating project</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={img1} alt="Image" />
                                <h5>Understanding</h5>
                            </div>
                            <div className="item">
                                <img src={img2} alt="Image" />
                                <h5>Researching</h5>
                            </div>
                            <div className="item">
                                <img src={img3} alt="Image" />
                                <h5>Planning</h5>
                            </div>
                            <div className="item">
                                <img src={img4} alt="Image" />
                                <h5>Designng</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HowIWork;