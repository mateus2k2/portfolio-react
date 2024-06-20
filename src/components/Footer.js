import React, {useContext} from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { LanguageContext } from './LanguageContext';
import { useQuery } from '@apollo/client';
import getSocial from './Queries/Social';
import Preloader from "./Pre";

import offlineSocialData from './Queries/offline/Social'

function Footer() {
  const { language } = useContext(LanguageContext);
  let date = new Date();
  let year = date.getFullYear();

  let { loading, error, data } = useQuery(getSocial(), {
    context: {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_STRAPI_API}`,
          },
        },
  });

  if (loading) return <Preloader load={true} />;

  if (!data || error) data = offlineSocialData().data;

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3><a href="https://github.com/soumyajit4419/Portfolio">{language === 'EN' ? "Developed by Soumyajit. Adapted by Mateus Silva" : "Desenvolido by Soumyajit. Adaptado por Mateus Silva"}</a></h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href={data.social.data.attributes.github}
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={data.social.data.attributes.twitter}
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={data.social.data.attributes.linkedin}
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={data.social.data.attributes.instagram}
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
