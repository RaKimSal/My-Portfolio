import { Container } from "react-bootstrap";

const Upcoming = () => {
  return (
    <section className="upcoming" id="upComing">
      <h2>Upcoming Projects</h2>
      <p className="upcoming-text">Will be available soon!</p>

      <Container className="grid-container">
        <div className="grid-item item-4">
          <span>Service Website</span>

          <a
            href="https://my-service-website.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="project-btn">
              Click here
            </button>
          </a>
        </div>

        <div className="grid-item item-1">
          <span className="grid-intext">
            Analytics Dashboard
          </span>

          <button className="project-btn">
            Coming Soon
          </button>
        </div>

        <div className="grid-item item-2">
          <span>eCommerce</span>

          <a
            href="https://cheries-clothing.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="project-btn">
              Click here
            </button>
          </a>
        </div>

        <div className="grid-item item-3">
          <span>Memory Game</span>

          <a
            href="https://kim-memory-game.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="project-btn">
              Click here
            </button>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Upcoming;