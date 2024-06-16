// src/components/Post.js
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';
import Particle from "../Particle";
import { Container } from "react-bootstrap";
import { LanguageContext } from './../LanguageContext';
import Comments from './Comments';
import Stack from 'react-bootstrap/Stack';
import { IoPersonSharp } from "react-icons/io5";
import Preloader from "./../Pre";
import getBlogs from './../Queries/Blogs';
import TOC from './TOC';
import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js";

function Post(props) {
  const { language } = useContext(LanguageContext);
  let url = window.location.origin + window.location.pathname;
  if (url.endsWith("/")) {
    url = url.slice(0, -1);
  }

  const { id } = useParams();
  const { loading, error, data } = useQuery(getBlogs(language, id), {
    context: {
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_STRAPI_API}`,
      },
    },
  });

  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    if (data) {
      hljs.highlightAll();
      const parser = new DOMParser();
      const doc = parser.parseFromString(data.blogs.data[0].attributes.body, 'text/html');
      const headingsList = [];

      doc.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((heading, index) => {
        const { innerText: title, id } = heading;
        if (heading.nodeName === "H1") {
          headingsList.push({ id, title, items: [] });
        } else if (heading.nodeName === "H2" && headingsList.length > 0) {
          headingsList[headingsList.length - 1].items.push({
            id,
            title,
          });
        }
      });
      setHeadings(headingsList);
    }
  }, [data]);

  console.log(headings)

  if (loading) return <Preloader load={true} />;
  if (error) return <Preloader load={true} />;

  if (data.blogs.data.length === 0) {
    return (
      <div>
        <div className="blog-section">
          <h1 className='blogTitle'>
            404 - {language === 'EN' ? "Page not found" : "Página no encontrada"}
          </h1>
        </div>
        <Particle />
      </div>
    );
  }

  const post = data.blogs.data[0].attributes;

  return (
    <div>
      <div className="blog-section">
        <img src={`${process.env.REACT_APP_STRAPI_URL}${post.banner.data.attributes.url}`} alt="" className="blog-header-image" />
        <h1 className='blogTitle'>
          {post.title}
        </h1>
        <Stack direction="horizontal" gap={2} className="blogIcon-inside">
          <div>
            <IoPersonSharp size={40} />
          </div>
          <div direction="vertical" className="blogCardIten">
            <p>{post.author}</p>
            <p>{post.creation}</p>
          </div>
        </Stack>  
        <TOC headings={headings} />
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
      <div className="blog-comments-section">
        <Container>
          <h1>
            {language === 'EN' ? "Comments" : "Comentarios"}
          </h1>
          <Comments pageId={url} />
        </Container>
      </div>
      <Particle />
    </div>
  );
}

export default Post;
