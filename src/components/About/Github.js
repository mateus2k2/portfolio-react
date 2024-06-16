import React, {useContext} from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import getSocial from './../Queries/Social';
import { useQuery } from '@apollo/client';
import { LanguageContext } from './../LanguageContext';
import Preloader from "./../Pre";

function Github() {
  const { language } = useContext(LanguageContext);
  
  const { loading, error, data } = useQuery(getSocial(), {
    context: {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_STRAPI_API}`,
          },
        },
  });

  if (loading) return <Preloader load={true} />;
  if (error) return

  const username = new URL(data.social.data.attributes.github).pathname.split('/')[1];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        {language === 'EN' ? "Days I" : "Dias Que Eu"} <strong className="purple">{language === 'EN' ? "Code" : "Codei"}</strong>
      </h1>
      <GitHubCalendar
        username={username}
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
