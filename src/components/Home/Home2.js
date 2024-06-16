import React, {useContext} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { LanguageContext } from './../LanguageContext';
// import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import getSocial from './../Queries/Social';
import getHome from './../Queries/Home';
import { useQuery } from '@apollo/client';
import Preloader from "./../Pre";

function Home2() {
  const { language } = useContext(LanguageContext);

  const { loading, error, data } = useQuery(getHome(language), {
    context: {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_STRAPI_API}`,
          },
        },
  });
  
  
  const { loading: loadingSocial, error: errorSocial, data: socialData } = useQuery(getSocial(), {
    context: {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_STRAPI_API}`,
          },
        },
  });

  // let loadingSocial, errorSocial, socialData
  
  if (loading) return <Preloader load={true} />;
  if (error) return <Preloader load={true} />;

  if (loadingSocial) return <Preloader load={true} />;
  if (errorSocial) return <Preloader load={true} />;

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {language === 'EN' ? "LET ME" : "DEIXE-ME"} <span className="purple"> {language === 'EN' ? "INTRODUCE" : "ME INTRODUZIR"} </span> {language === 'EN' ? "MYSELF" : ""}
            </h1>
            {/* <BlocksRenderer content={data.home.data.attributes.introduction} /> */}
            <div className="home-about-body" dangerouslySetInnerHTML={{ __html: data.home.data.attributes.introduction }} />
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={`${process.env.REACT_APP_STRAPI_URL}${data.home.data.attributes.avatar.data.attributes.url}`} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{language === 'EN' ? "FIND ME ON" : "ME ENCONTRE EM"}</h1>
            <p>
            {language === 'EN' ? "Feel free to" : "Sinta-se a vontade para"} <span className="purple"> {language === 'EN' ? "connect" : "se conectar"} </span> {language === 'EN' ? "with me" : "comigo"}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={socialData.social.data.attributes.github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={socialData.social.data.attributes.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={socialData.social.data.attributes.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={socialData.social.data.attributes.instagram}
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
