import React, { useState, useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { BsTranslate } from "react-icons/bs";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { ImBlog } from "react-icons/im";
import { LanguageContext } from './LanguageContext';
import getHome from './Queries/Home';
import { useQuery } from '@apollo/client';
import Preloader from "./Pre";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { toggleLanguage, language } = useContext(LanguageContext);

  const { loading, error, data } = useQuery(getHome(language), {
    context: {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_STRAPI_API}`,
          },
        },
  });

  if (loading) return <Preloader load={true} />;
  if (error) return <Preloader load={true} />;

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={`${process.env.REACT_APP_STRAPI_URL}${data.home.data.attributes.logo.data.attributes.url}`} className="img-fluid logo" alt="brand" />
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
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {language === 'EN' ? "About" : "Sobre"}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                {language === 'EN' ? "Projects" : "Projetos"}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> {language === 'EN' ? "Resume" : "Currículo"}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://mateus2k2.github.io/blog/en"
                target="_blank"
                className="fork-btn-inner"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Button>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/mateus2k2/portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                onClick={toggleLanguage}
                className="fork-btn-inner"
                >
                <BsTranslate />
                {language === 'EN' ? '  Português' : '  English'}
              </Button>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
