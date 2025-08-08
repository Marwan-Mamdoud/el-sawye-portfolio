import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/proj3.jpg";
import chatify from "../../Assets/proj1.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/proj2.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E Commerce App"
              description="
The E-Commerce App is a modern mobile shopping UI/UX concept designed in Figma.
It offers a clean, organized layout that makes browsing products easy and enjoyable.
The app features intuitive navigation for seamless category exploration and quick purchases.
Visually appealing product displays enhance the overall shopping experience."
              demoLink="https://www.behance.net/gallery/215909497/E-Commerce-App"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="GoWander"
              description="The GoWander – Travel & Tourism Website is a modern UI/UX concept designed to inspire exploration through vibrant imagery and clean layouts.
It features clear navigation, large hero sections, and prominent calls-to-action for trip planning or bookings.
The design uses Figma for mockups, Photoshop for visuals, and Notion for workflow organization,
"
              demoLink="https://www.behance.net/gallery/224562031/Travel-and-Tourism-Website-GoWander"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Redesign for the Ministry of Health Website Egypt"
              description="A UI/UX redesign concept for Egypt’s Ministry of Health website by Abdelrhman Elsawye, featuring a modern Figma-based landing page layout-focused reinterpretation—details on visuals, layout, and UX are unavailable without logging into Behance.

"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://www.behance.net/gallery/223821335/Redesign-for-the-Ministry-of-Health-Website-Egypt"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
