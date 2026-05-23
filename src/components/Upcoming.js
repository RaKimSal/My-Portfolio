import { Container } from "react-bootstrap";

const Upcoming = () => {
  return (
    <section className="upcoming" id="upComing">
      <h2>Upcoming Projects</h2>
      <p className="upcoming-text">Will be available soon!</p>

      <Container className="grid-container">

      <div className="grid-item item-4">
          <span>Service Website</span>
          <button className="project-btn">Coming Soon</button>
        </div>
        
        <div className="grid-item item-1">
          <span className="grid-intext">Analytics Dashboard</span>
          <button className="project-btn">Coming Soon</button>
        </div>

        <div className="grid-item item-2">
          <span>eCommerce</span>
          <button className="project-btn">Coming Soon</button>
        </div>

        <div className="grid-item item-3">
          <span>Memory Game</span>
          <button className="project-btn">Coming Soon</button>
        </div>

      </Container>
    </section>
  );
};

export default Upcoming;