import React, {useContext} from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import getProjects from './../Queries/Projects';
import { LanguageContext } from './../LanguageContext';
import { useQuery } from '@apollo/client';
import Preloader from "./../Pre";

function Projects() {
  const { language } = useContext(LanguageContext);

  const { loading, error, data } = useQuery(getProjects(language), {
    context: {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_STRAPI_API}`,
          },
        },
  });

  if (loading) return <Preloader load={true} />;
  if (error) return <Preloader load={true} />;

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {language === 'EN' ? "My Recent" : "Meus Recentes"} <strong className="purple"> {language === 'EN' ? "Works" : "Trabalhos"} </strong>
        </h1>
        <p style={{ color: "white" }}>
        {language === 'EN' ? "Here are a few projects I've worked on recently." : "Alguns projetos que trabalhei recentemente"}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {data.projects.data.map(({ attributes, id }) => (
            <Col md={4} className="project-card" key={id}>
              <ProjectCard
                imgPath={`${process.env.REACT_APP_STRAPI_URL}${attributes.banner.data.attributes.url}`}
                isBlog={false}
                title={attributes.title}
                description={attributes.description}
                ghLink={attributes.github}
                {...attributes.demoLink && { demoLink: attributes.demoLink }}
              />
            </Col>
          ))}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
