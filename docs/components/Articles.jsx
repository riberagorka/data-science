import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectData, selectError, selectIsLoading } from "../pages/allProjectsSlice";
import { Element } from "react-scroll";
import { Title, Loading } from "./globalStyledComponents";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import articlesData from "../docs/articles.json";

export default function Articles() {
  const [blogPosts, setBlogPosts] = useState([]);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectData);

  useEffect(() => {
    // Use data from articles.json directly
    setBlogPosts(articlesData.articles);
  }, []);

  return (
    <Element name="blog" className="element">
      <Container>
        <Title>
          <h2>Blog</h2>
          <div className="underline"></div>
        </Title>
      </Container>
      {isLoading && (
        <Container>
          <Loading />
        </Container>
      )}
      {error && <h2 className="text-center">{error}</h2>}
      {!error && data.length === 0 && (
        <h2 className="text-center">Oops, no blog posts available...</h2>
      )}
      {blogPosts.length !== 0 && (
        <Container>
          {blogPosts.map(({ id, title, content }) => (
            <Container key={id} style={{ marginVertical: 10 }}>
              <h3>{title}</h3>
              <p>{content}</p>
            </Container>
          ))}
          {data.length > 3 && (
            <Container className="text-center mt-5">
              <Link to="/Blog">
                <Button size="lg" variant="outline-dark">
                  Dankeschön
                </Button>
              </Link>
            </Container>
          )}
        </Container>
      )}
    </Element>
  );
}
