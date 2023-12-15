// AllArticles.jsx
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import articlesData from "../docs/articles.json";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import ReactMarkdown from "react-markdown";

const AllArticles = () => {
  const articles = useSelector((state) => articlesData.articles);

  useEffect(() => {
    // Dispatch any action to fetch articles if needed
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <Link to={`/Blog/${article.url_name}`}>
            {/* Use Link to navigate to the article using the article id */}
            <h2>{article.title}</h2>
          </Link>
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
};

export default AllArticles;