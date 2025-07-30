import React from "react";
import Card from "react-bootstrap/Card";
import { ImCircleUp, ImPacman, ImPointRight } from "react-icons/im";
import { SiRoundcube } from "react-icons/si";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi There, I am <span className="purple">Melih Özcan</span>, a
            passionate software engineer born and raised in the vibrant
            metropolis of <span className="purple">İstanbul, Turkey</span>
            – truly where East meets West in perfect harmony.
            <br />
            <br />I recently graduated with high honors from{" "}
            <span className="purple">Boğaziçi University</span>, where I
            developed a strong foundation in computer science and
            problem-solving methodologies.
            <br />
            <br />I enjoy creating{" "}
            <span className="purple">innovative solutions</span> and working
            with
            <span className="purple"> modern technologies</span> to build
            applications that make a difference. My approach focuses on{" "}
            <span className="purple">clean code</span> and
            <span className="purple"> user-centered design</span>.
            <br />
            <br />
            Beyond technology, I'm passionate about{" "}
            <span className="purple">playing guitar</span> and
            <span className="purple">
              {" "}
              exploring different cultures and languages
            </span>
            . I believe that diverse perspectives enhance both personal growth
            and professional innovation.
          </p>
          <p style={{ textAlign: "justify", marginTop: "20px" }}>
            <ImPacman style={{ color: "#FFD700", marginRight: "8px" }} />{" "}
            Creating innovative solutions
            <br />
            <ImPacman style={{ color: "#FFD700", marginRight: "8px" }} />{" "}
            Learning new technologies and methodologies
            <br />
            <ImPacman style={{ color: "#FFD700", marginRight: "8px" }} />{" "}
            Collaborating on meaningful projects
            <br />
            <ImPacman style={{ color: "#FFD700", marginRight: "8px" }} /> Music
            composition and performance
          </p>
          <p
            style={{
              color: "#e74c3c",
              fontStyle: "italic",
              fontSize: "1.2em",
              fontWeight: "500",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            "In mathematics you don't understand things. You just get used to
            them."
            <br />
            <span
              style={{
                fontSize: "1em",
                color: "#f39c12",
                fontWeight: "600",
                marginTop: "8px",
                display: "inline-block",
              }}
            >
              — Kurt Gödel
            </span>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
