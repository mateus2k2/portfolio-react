import React from "react";
import { Col, Row } from "react-bootstrap";
import { useQuery } from '@apollo/client';
import getStack from './../Queries/Stack';
import Preloader from "./../Pre";

// import GetIcon from "./../GetIcon";
import offlineStackData from './../Queries/offline/Stack'

function Techstack() {
  let { loading, error, data } = useQuery(getStack("skill"), {
    context: {
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_STRAPI_API}`,
      },
    },
  });

  if (loading) return <Preloader load={true} />;

  if (!data || error) data = offlineStackData("skill").data;

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {data.skillTools.data.map(({ attributes, id }) => (
        <Col xs={4} md={2} className="tech-icons" key={id}>
          <div dangerouslySetInnerHTML={{ __html: attributes.icon }}/>
          <h5>{attributes.name}</h5>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
