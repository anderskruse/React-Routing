import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/react">About React</Link>
          </li>
          <li>
            <Link to="/jsx">JSX</Link>
          </li>
          <li>
            <Link to="/props-state">Props & State</Link>
          </li>
          <li>
            <Link to="/lifecycle-hooks">Lifecycle hooks</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/react" component={AboutReact} />
        <Route path="/jsx" component={Jsx} />
        <Route path="/props-state" component={PropsAndState} />
        <Route path="/lifecycle-hooks" component={LifecycleHooks} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>Name: Anders K. Madsen</p>
      <p>Age: 22</p>
      <a href="https://github.com/anderskruse/React-Routing">Link to Source Code (GitHub)</a>
    </div>
  );
}

function AboutReact() {
  return (
  <div>
    <h2>About React</h2>
    <p>React is a JS library that consists of class and function components. It is used for developing SPA and mobile apps.</p>
  </div>
  );
}

function Jsx(){
  return (
  <div>
    <h2>About JSX</h2>
    <p>JSX is a mix of HTML and JS formatting. You can make HTML syntax inside JS and vice versa.</p>
  </div>
  );
}

function PropsAndState(){
  return (
  <div> 
    <h2>About Props and State</h2>
    <p>Props, or Properties are immutable variables, passed trough the (props) parameter in a given function.</p>
    <p>State is, unlike props, mutable. State is passed around in components. Every time State is updated, the render function is run and the DOM is updated.</p>
  </div>
  );

}


function LifecycleHooks({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/componentDidMount`}>componentDidMount()</Link>
        </li>
        <li>
          <Link to={`${match.url}/render`}>render()</Link>
        </li>
        <li>
          <Link to={`${match.url}/componentWillReceiveProps`}>componentWillReceiveProps</Link>
        </li>
        <li>
          <Link to={`${match.url}/shouldComponentUpdate`}>shouldComponentUpdate</Link>
        </li>
        <li>
          <Link to={`${match.url}/componentWillUpdate`}>componentWillUpdate</Link>
        </li>
        <li>
          <Link to={`${match.url}/componentWIllUnmount`}>componentWIllUnmount()</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}


function Topic({ match }) {
  
  var text = "";

  switch(match.params.topicId){
    case "componentDidMount":
    {
      text = "componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request."
      break;
    }
    case "render":
    {
      text = "The render() method is the only required method in a class component. When called, it should examine this.props and this.state and return a react component or HTML formats"
      break;
    }
    case "componentWillReceiveProps":
    {
      text =" omponentWillReceiveProps() is invoked before a mounted component receives new props. If you need to update the state in response to prop changes (for example, to reset it), you may compare this.props and nextProps and perform state transitions using this.setState() in this method."
      break;
    }
    case "shouldComponentUpdate":
    {
      text = "Use shouldComponentUpdate() to let React know if a component’s output is not affected by the current change in state or props. The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior."
      break;
    }
    case "componentWillUpdate":
    {
      text = "omponentWillUpdate() is invoked just before rendering when new props or state are being received. Use this as an opportunity to perform preparation before an update occurs. This method is not called for the initial render."
      break;
    }
    case "componentWIllUnmount":
    {
      text = "componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount()."
      break;
    }
    default:
    {
      text = "Now you are in the default of the switch. Welcome."
    }
  }
   return (
     <div>
       <h2>{match.params.topicId}</h2>
       <p>{text}</p>
     </div>
   )

}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <BasicExample />
        </header>
      </div>
    );
  }
}

export default App;
