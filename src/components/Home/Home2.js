import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A BIT OF <span className="purple"> INFO </span> ON ME
            </h1>
            <p className="home-about-body">
              From an early age, I've been captivated by the power of mathematics 
              and logic to solve complex problems. This fascination naturally led me to
              <i>
                <b className="purple"> Computer Science</b>
              </i>
              , which I believe represents the most impactful application of mathematical 
              principles in our modern world.
              <br />
              <br />
              As a graduate of
              <i>
                <b className="purple"> Boğaziçi University</b>
              </i>
              , one of Turkey's most prestigious and historically significant institutions, 
              I am now pursuing my goal to become a skilled Full Stack Developer with a 
              particular focus on Backend development and industry best practices.
              <br />
              <br />
              I have hands-on experience with diverse full-stack systems including
              <i>
                <b className="purple"> Scala with Akka HTTP</b>
              </i>
              , native Android development using
              <i>
                <b className="purple"> Java</b>
              </i>
              , and extensive work with the
              <i>
                <b className="purple"> .NET ecosystem</b>
              </i>
              . My backend expertise spans
              <i>
                <b className="purple"> SQL Server, Redis, and RabbitMQ</b>
              </i>
              for comprehensive distributed system solutions.
              <br />
              <br />
              Looking ahead, I'm eager to explore projects in Machine Learning & Deep Learning. 
              I've already built a solid foundation in these fields, with a strong grasp of 
              the underlying mathematical concepts and hands-on experience with frameworks like
              <i>
                <b className="purple"> PyTorch</b>
              </i>
              . I'm particularly interested in
              <i>
                <b className="purple"> Deep Neural Networks and Generative Adversarial Networks (GANs)</b>
              </i>
              .
              <br />
              <br />
              I'm always excited to connect with fellow developers and tech enthusiasts. 
              Thank you for taking the time to explore my work!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/melihozcan1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/melihozccan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/melihmozcan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
