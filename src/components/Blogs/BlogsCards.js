import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { IoPersonSharp } from "react-icons/io5";


function BlogsCards(props) {
  return (
    <Link to={`/blogs/${props.id}`} className="blogCardLink">
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" className="blogCardImg"/>
        <Card.Body>
          <Stack direction="horizontal" gap={2} className="flex-wrap blogCardTags">
            {props.blog.tags.map((element, index) => (
              <Badge bg="primary" key={index}>{element}</Badge>
            ))}
          </Stack>
          <Card.Title>{props.blog.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <Stack direction="horizontal" gap={2}>
            <div className="blogIcon">
              <IoPersonSharp size={40} />
            </div>
            <div direction="vertical" className="blogCardIten">
              <p>{props.blog.author}</p>
              <p>{props.blog.creation}</p>
            </div>
          </Stack>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default BlogsCards;
