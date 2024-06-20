import React, {useContext} from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";
import getAbout from './../Queries/About';
import { useQuery } from '@apollo/client';
import { LanguageContext } from './../LanguageContext';
import Preloader from "./../Pre";

import offlineAboutData from './../Queries/offline/About'

function AboutCard() {
  const { language } = useContext(LanguageContext);

  let { loading, error, data } = useQuery(getAbout(language), {
    context: {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_STRAPI_API}`,
          },
        },
  });

  if (loading) return <Preloader load={true} />;

  if (!data || error) data = offlineAboutData(language).data;

  // justify
  // about-activity

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <div style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: data.about.data.attributes.body }} />
          <p style={{ color: "rgb(155 126 172)" }}>
            {data.about.data.attributes.quote}{" "}
          </p>
          <footer className="blockquote-footer">{data.about.data.attributes.quoteAuthor}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
