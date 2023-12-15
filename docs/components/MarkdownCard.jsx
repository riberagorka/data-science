// MarkdownCard.js
import React from "react";
import { Card } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

const MarkdownCard = ({ title, description, url, demo, image }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Img variant="top" src={image} alt={title} /> {/* Add image at the top of the card */}
        <ReactMarkdown children={`[Read More](${url})`} />
      </Card.Body>
    </Card>
  );
};

export default MarkdownCard;
