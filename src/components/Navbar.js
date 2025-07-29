import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  // Gliding effect logic
  const [activeTab, setActiveTab] = useState("/");
  const tabs = [
    { to: "/", label: "Home", icon: <AiOutlineHome style={{ marginBottom: "2px" }} /> },
    { to: "/about", label: "About", icon: <AiOutlineUser style={{ marginBottom: "2px" }} /> },
    { to: "/project", label: "Projects", icon: <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> },
    { to: "/resume", label: "Resume", icon: <CgFileDocument style={{ marginBottom: "2px" }} /> },
  ];
  return (
    <>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto navbar-glide" defaultActiveKey="#home">
              {tabs.map((tab) => (
                <Nav.Item key={tab.to}>
                  <Nav.Link
                    as={Link}
                    to={tab.to}
                    onClick={() => {
                      updateExpanded(false);
                      setActiveTab(tab.to);
                    }}
                    className={activeTab === tab.to ? "active glide-active" : ""}
                  >
                    {tab.icon} {tab.label}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
