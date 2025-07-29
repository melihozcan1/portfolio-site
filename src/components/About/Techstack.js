import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiJava,
  DiMongodb,
  DiPython,
  DiGit,
  DiScala,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiSpringboot,
  SiReact,
  SiDotnet,
  SiRedis,
} from "react-icons/si";

function Techstack() {
  const techLinks = {
    java: "https://www.oracle.com/java/",
    scala: "https://www.scala-lang.org/",
    python: "https://www.python.org/",
    spring: "https://spring.io/projects/spring-boot",
    mongodb: "https://www.mongodb.com/",
    react: "https://reactjs.org/",
    git: "https://git-scm.com/",
    firebase: "https://firebase.google.com/",
    pytorch: "https://pytorch.org/",
    dotnet: "https://dotnet.microsoft.com/",
    redis: "https://redis.io/"
  };

  const handleTechClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons tech-java" onClick={() => handleTechClick(techLinks.java)} style={{ cursor: 'pointer' }}>
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-scala" onClick={() => handleTechClick(techLinks.scala)} style={{ cursor: 'pointer' }}>
        <DiScala />
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-python" onClick={() => handleTechClick(techLinks.python)} style={{ cursor: 'pointer' }}>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-spring" onClick={() => handleTechClick(techLinks.spring)} style={{ cursor: 'pointer' }}>
        <SiSpringboot />
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-mongodb" onClick={() => handleTechClick(techLinks.mongodb)} style={{ cursor: 'pointer' }}>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-react" onClick={() => handleTechClick(techLinks.react)} style={{ cursor: 'pointer' }}>
        <SiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-git" onClick={() => handleTechClick(techLinks.git)} style={{ cursor: 'pointer' }}>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-firebase" onClick={() => handleTechClick(techLinks.firebase)} style={{ cursor: 'pointer' }}>
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-pytorch" onClick={() => handleTechClick(techLinks.pytorch)} style={{ cursor: 'pointer' }}>
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-dotnet" onClick={() => handleTechClick(techLinks.dotnet)} style={{ cursor: 'pointer' }}>
        <SiDotnet />
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-redis" onClick={() => handleTechClick(techLinks.redis)} style={{ cursor: 'pointer' }}>
        <SiRedis />
      </Col>
    </Row>
  );
}

export default Techstack;
