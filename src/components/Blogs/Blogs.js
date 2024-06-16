import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogsCard from "./BlogsCards";
import Particle from "../Particle";
import getBlogsNoBody from './../Queries/BlogsNoBody';
import { LanguageContext } from './../LanguageContext';
import { useQuery } from '@apollo/client';
import Preloader from "./../Pre";
import SearchForm from "./SearchForm";

function isDateInRange(date, startDate, endDate) {
  const targetDate = new Date(date);
  const start = new Date(startDate);
  const end = new Date(endDate);

  return targetDate >= start && targetDate <= end;
}

function Blogs() {
  const { language } = useContext(LanguageContext);
  const [filters, setFilters] = useState({});

  const { loading, error, data } = useQuery(getBlogsNoBody(language), {
    context: {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_STRAPI_API}`,
          },
        },
  });

  if (loading) return <Preloader load={true} />;
  if (error) return <Preloader load={true} />;

  const handleSearch = (filters) => {
    setFilters(filters);
  };

  const filteredBlogs = data.blogs.data.filter(({ attributes }) => {
    const matchesTags = filters.tags && filters.tags.length !== 0 ? filters.tags.some(tag => attributes.tags.includes(tag)) : true;
    const matchesDate = filters.creation && filters.creation.length === 2 ? isDateInRange(attributes.creation, filters.creation[0], filters.creation[1]) : true;
    // const matchesDate = filters.creation && filters.creation.length === 2 ? Date(attributes.creation) >= filters.creation[0] && Date(attributes.creation) <= filters.creation[1]: true;
    const matchesName = filters.title ? attributes.title.toLowerCase().includes(filters.title.toLowerCase()) : true;
    const matchesAuthor = filters.author ? attributes.author.toLowerCase().includes(filters.author.toLowerCase()) : true;
    return matchesTags && matchesDate && matchesName && matchesAuthor;
  });

  const allTags = data?.blogs?.data?.reduce((tags, { attributes }) => {
    return tags.concat(attributes.tags.filter(tag => !tags.includes(tag)));
  }, []) || [];

  const allAuthors = data?.blogs?.data?.reduce((authors, { attributes }) => {
    return authors.concat(attributes.author);
  }, []) || [];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple"> Blog </strong> posts
        </h1>
        
        <div className="search-form-container">
          <SearchForm onSearch={handleSearch} allTags={allTags} allAuthors={allAuthors}/>
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredBlogs.map(({ attributes, id }) => (
            <Col md={4} className="project-card" key={id}>
              <BlogsCard
                blog={attributes}
                id={id}
                imgPath={`${process.env.REACT_APP_STRAPI_URL}${attributes.banner.data.attributes.url}`}
                description={attributes.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
