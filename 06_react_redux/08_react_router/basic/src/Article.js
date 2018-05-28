import React, { Component } from "react";

function getArticleInformation(articleId) {
  console.log("getArticleInformation");
  if (articleId === "42") {
    return "le contenu de l'article 42 est cool";
  }
  if (articleId === "1337") {
    return "le contenu de l'article 1337 est super cool";
  }
  return "contenu inconnu";
}


class Article extends Component {
  constructor(props) {
    console.log("constructor.props=", props);
    console.log("tout pourri=", props.articleId);
    super(props);
    this.state = {
      contentArticle: "contenu pas encore recherché",
    }
  }
  componentDidMount() {
    this.setState({contentArticle: getArticleInformation(this.props.articleId)});
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Article componentDidUpdate");
    console.log("prevProps.articleId=", prevProps);
    console.log("this.props.articleId =", this.props);
    if (prevProps.articleId !== this.props.articleId) {
      this.setState({contentArticle: getArticleInformation(this.props.articleId)});
    }
  }

  render() {
    return (
      <div>
        <h2>article n° {this.props.articleId}</h2>
        <span>{this.state.contentArticle}</span><br/>
        <span>the author {this.props.author}</span>
      </div>
    )
  }
}

export default Article;
