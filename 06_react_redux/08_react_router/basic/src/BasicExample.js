import React, { Component } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import './App.css';
import Article from "./Article";


const Home = () => {
  return (
    <h2>Home </h2>
  )
}

const NoMatch = () => {
  return (
    <h2>NoMatch </h2>
  )
}

const About = () => (
  <h2>About</h2>
)

// const Article = (props) => (
//   <div>
//     <h3>the content of article n° {props.match.params.articleId}</h3>
//     <span>The author is {props.author}</span>
//   </div>
// )

const ArticleDetail = ({ match }) => (
  <div>
    <span>Article with detail : {match.params.articleId}</span>
  </div>
)

const getAuthor = (articleId) => {
  if (articleId === "42") {
    return "Delattre";
  } else {
    return "???";
  }
}

const Articles = ({ match }) => (
  <div>
    <h2>Articles</h2>
    <ul>
      <li>
        <Link to={`${match.url}/42`}>
          Article 42
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/1337`}>
          Article 1337
        </Link>
      </li>
    </ul>

    <Switch>
      <Route path={`${match.url}/detail/:articleId`} component={ArticleDetail}/>
      <Route path={`${match.url}/:articleId`} render={(props) => (
        <Article {...props.match.params} author={getAuthor(props.match.params.articleId)} />
      )}/>
      <Route exact path={match.url} render={() => (
        <h3>Please select an article.</h3>
      )}/>
    </Switch>
  </div>
)

const User = ({ match }) => (
  <div>
    <span>BONJOUR {match.params.user}</span>
  </div>
)

class BasicExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "christophe",
    };
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/christophe">user Christophe</Link></li>
          <li><Link to="/articles">Articles</Link></li>
        </ul>
        <br/>
        <span className="Link-selected">Avec NavLink</span>
        <ul>
          <li><NavLink exact className="Link-not-selected" activeClassName="Link-selected" to="/">Home</NavLink></li>
          <li><NavLink className="Link-not-selected" activeClassName="Link-selected" to="/about">About</NavLink></li>
          <li><NavLink className="Link-not-selected" activeClassName="Link-selected" to="/christophe">User Christophe</NavLink></li>
          <li><NavLink exact className="Link-not-selected" activeClassName="Link-selected" to="/articles">Articles</NavLink></li>
          <li><NavLink className="Link-not-selected" activeClassName="Link-selected" to="/articles/42">Article 42</NavLink></li>
          <li><NavLink className="Link-not-selected" activeClassName="Link-selected" to="/articles/1337">Article 1337</NavLink></li>
        </ul>

        <hr/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/:user" component={User}/>
          <Route component={NoMatch}/>
        </Switch>
        <Route path="/articles" component={Articles}/>


      </div>
    );
  }
}

export default BasicExample;
