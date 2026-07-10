import { Container } from "react-bootstrap";

import dashboardImage from "../assets/img/analyticalDashboard.png";
import serviceImage from "../assets/img/serviceWebsite.png";
import ecommerceImage from "../assets/img/eCommerce.png";
import memoryGameImage from "../assets/img/memoryGame.png";

const Upcoming = () => {
  const projects = [
    {
      title: "Service Website",
      image: serviceImage,
      website: "https://my-service-website.netlify.app/",
    },
    {
      title: "Philippines Economic Dashboard",
      image: dashboardImage,
      website: "https://philippines-gdp.netlify.app/",
    },
    {
      title: "Cherie's Clothing",
      image: ecommerceImage,
      website: "https://cheries-clothing.netlify.app/",
    },
    {
      title: "Memory Game",
      image: memoryGameImage,
      website: "https://kim-memory-game.netlify.app/",
    },
  ];

  return (
    <section className="upcoming" id="upComing">
      <h2>My Projects</h2>

      <p className="upcoming-text">
        Selected Work
      </p>

      <Container className="grid-container">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3 className="project-title">{project.title}</h3>

            <div className="project-image-wrapper">
              <img
                className="project-image"
                src={project.image}
                alt={`${project.title} website preview`}
              />
            </div>

            <a
              className="project-btn"
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title}`}
            >
              View Project
            </a>
          </article>
        ))}
      </Container>
    </section>
  );
};

export default Upcoming;