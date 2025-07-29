import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi There, I am <span className="purple">Melih Özcan</span>, a passionate software engineer 
            born and raised in the vibrant metropolis of <span className="purple">İstanbul, Turkey</span> 
            – truly where East meets West in perfect harmony.
            <br />
            <br />
            I've recently graduated with high honors from <span className="purple">Boğaziçi University</span>, 
            where I developed expertise in computer science and modern software development practices.
            <br />
            <br />
            My technical journey spans full-stack development with <span className="purple">React</span>, 
            <span className="purple">.NET</span>, and <span className="purple">Redis</span>, focusing on 
            scalable applications and elegant code architecture.
            <br />
            <br />
            Beyond coding, I'm passionate about <span className="purple">playing guitar</span> and 
            <span className="purple">exploring different cultures and languages</span>. I believe that 
            diverse perspectives enhance both personal growth and professional innovation.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Developing innovative web applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring cloud architecture and distributed systems
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to open-source projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Music composition and performance
            </li>
          </ul>
          <p style={{ color: "#e74c3c", fontStyle: "italic", fontSize: "1.2em", fontWeight: "500", textAlign: "center", marginTop: "20px" }}>
            "In mathematics you don't understand things. You just get used to them."
            <br />
            <span style={{ fontSize: "1em", color: "#f39c12", fontWeight: "600", marginTop: "8px", display: "inline-block" }}>— Kurt Gödel</span>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
