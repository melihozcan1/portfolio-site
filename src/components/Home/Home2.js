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
              Sİnce I was very little, I've been fascinated by what one can
              achieve using solely math and logic. This fascination in turn led
              me to get involved with what I think is the best way of making use
              of math in today's world:
              <i>
                <b className="purple"> Computer Science. </b>
              </i>
              <br />
              <br />
              Having graduated from one of the most historical and succesful
              universities in Turkey ,
              <br />
              <i>
                <b className="purple"> Bogazici University </b>
              </i>
              , I now aspire to become a competent Full Stack Developer with an
              emphasis on Back End development and making use of the best
              practices out there.
              <br />
              <br />
              In the near future, I also want to work on some projects involving
              Machine Learning & Deep Learning. I already have the basis in
              these areas, having familiarity with the mathematical background
              necessary and some experience with frameworks such as
              <i>
                <b className="purple"> PyTorch </b>
              </i>
              and concepts such as
              <i>
                <b className="purple">
                  {" "}
                  Deep Neural Networks and GANs(Generative Adverserial Networks){" "}
                </b>
                in particular.{" "}
              </i>
              <br />
              <br />
              Always a pleasure to get in touch with you.
              <br />
              Have a nice time wandering around.
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
