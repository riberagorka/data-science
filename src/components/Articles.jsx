import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectData, selectError, selectIsLoading } from "../pages/allProjectsSlice";
import { Element, Link as ScrollLink } from "react-scroll";
import { Icon } from "@iconify/react";
import {Title, Loading } from "./globalStyledComponents";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Articles() {
  const [blogPosts, setBlogPosts] = useState([]);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectData);

  useEffect(() => {
    // Function to dynamically import blog posts from the 'blogs' directory
    const importBlogPosts = async () => {
      const blogContext = require.context("../../blogs", false, /\.jsx$/);
      
      const blogPostModules = blogContext.keys().map(blogContext);
      console.log("Blog Post Modules:", blogPostModules);
      const blogPostData = blogPostModules.map((module) => module.default);
      console.log("Blog Post Data:", blogPostData);
      setBlogPosts(blogPostData);
    };

    importBlogPosts();
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
          {blogPosts.map(({ id, idName, title, content }) => (
            <Container key={id} style={{ marginVertical: 10 }}>
              <h3>{title}</h3>
              <p>{content}</p>
            </Container>
          ))}
          {data.length > 3 && (
            <Container className="text-center mt-5">
               <Link to="/Blog">
                <Button size="lg" variant="outline-dark">
                  Dankeschön <Icon icon="icomoon-free:arrow-up" />
                </Button>
              </Link>
            </Container>
          )}
        </Container>
      )}
    </Element>
  );
}
