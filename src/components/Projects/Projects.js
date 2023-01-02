import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="vh-100 project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          This Section is under{" "}
          <strong className="purple">construction </strong>
        </h1>
      </Container>
    </Container>
  );
}

export default Projects;
