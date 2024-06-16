import React, {useContext} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { LanguageContext } from './../LanguageContext';

function About() {
  const { language } = useContext(LanguageContext);


  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              {language === 'EN' ? "Know Who" : "Quem Eu"} <strong className="purple">{language === 'EN' ? "I'M" : "SOU"}</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple"> {language === 'EN' ? "Skillset" : "Habilidades"} </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">{language === 'EN' ? "Tools" : "Ferramentas"}</strong> {language === 'EN' ? "I use" : "Que Eu Uso"}
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
