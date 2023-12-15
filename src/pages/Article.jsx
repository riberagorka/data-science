import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import articlesData from "../docs/articles.json";
import ReactMarkdown from "react-markdown";

const Article = () => {
  const { url_name } = useParams();
  const articles = useSelector(() => articlesData.articles);
  console.log("The articles are: ", articles);
  console.log("The article title from URL is: ", url_name);


  const article = articles.find((a) => a.url_name === url_name);
  console.log(article);

  const [mdText, setMdText] = useState('')
  const articleMd = article.url_name + ".md";
  console.log(articleMd);
  useEffect(() => {
    fetch(articleMd).then(res => res.text()).then(text => setMdText(text))
  })
  if (!article) {
    return <div>Article not found</div>;
  }
  console.log(mdText);
  console.log(setMdText);

  return (
    <div>
      <h2>{article.title}</h2>
      <ReactMarkdown children={mdText}/>
    </div>
  );
};

export default Article;
