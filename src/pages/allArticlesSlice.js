// Article.js
import React from 'react';
import ReactMarkdown from 'react-markdown';

const Article = ({ title, content }) => (
  <div>
    <h2>{title}</h2>
    <ReactMarkdown>{content}</ReactMarkdown>
  </div>
);

export default Article;
