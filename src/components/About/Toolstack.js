import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiMacos,
  SiIntellijidea,
} from "react-icons/si";

function Toolstack() {
  const toolLinks = {
    macos: "https://www.apple.com/macos/",
    vscode: "https://code.visualstudio.com/",
    intellij: "https://www.jetbrains.com/idea/",
    postman: "https://www.postman.com/"
  };

  const handleToolClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons tool-macos" onClick={() => handleToolClick(toolLinks.macos)} style={{ cursor: 'pointer' }}>
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons tool-vscode" onClick={() => handleToolClick(toolLinks.vscode)} style={{ cursor: 'pointer' }}>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons tool-intellij" onClick={() => handleToolClick(toolLinks.intellij)} style={{ cursor: 'pointer' }}>
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons tool-postman" onClick={() => handleToolClick(toolLinks.postman)} style={{ cursor: 'pointer' }}>
        <SiPostman />
      </Col>
    </Row>
  );
}

export default Toolstack;
