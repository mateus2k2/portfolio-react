import React, {useContext} from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { LanguageContext } from './../LanguageContext';
import { useQuery } from '@apollo/client';
import getHome from './../Queries/Home';
import Preloader from "./../Pre";

import offlineHomeData from './../Queries/offline/Home'

function Home() {
  const { language } = useContext(LanguageContext);

  let { loading, error, data } = useQuery(getHome(language), {
    context: {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_STRAPI_API}`,
          },
        },
  });

  if (loading) return <Preloader load={true} />;

  if (!data || error) data = offlineHomeData(language).data;

  // let data = {}
  // data = offlineHomeData(language).data;

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {language === 'EN' ? "Hi There!" : "Olá"}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
              {language === 'EN' ? "I'AM" : "Eu Sou"}
                <strong className="main-name"> {data.home.data.attributes.name} </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
