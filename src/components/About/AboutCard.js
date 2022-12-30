import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi There, I am <span className="purple">Melih Özcan </span>
            born and raised in the capital of the world
            <span className="purple"> İstanbul, Turkey.</span>
            <br />
            I've recently graduated with high honors from Bogazici University.
            <br />
            <br />I really love playing the guitar and singing along. Totally
            image.png adore new cultures and languages.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
