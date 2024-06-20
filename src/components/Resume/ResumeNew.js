import React, { useState, useEffect, useContext } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import getResume from './../Queries/Resume';
import { useQuery } from '@apollo/client';
import { LanguageContext } from './../LanguageContext';
import 'react-pdf/dist/Page/TextLayer.css';
import Preloader from "./../Pre";

import offlineResumeData from './../Queries/offline/Resume'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const { language } = useContext(LanguageContext);
  let strapiPath = process.env.REACT_APP_STRAPI_URL

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  let { loading, error, data } = useQuery(getResume(language), {
    context: {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_STRAPI_API}`,
          },
        },
  });

  if (loading) return <Preloader load={true} />;

  if (!data || error) {
    strapiPath = ''
    data = offlineResumeData(language).data;
  }

  const pdfLink = `${strapiPath}${data.resume.data.attributes.resume.data.attributes.url}`;

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdfLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
