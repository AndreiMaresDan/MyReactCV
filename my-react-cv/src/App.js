import React from 'react';
import Navbar from './components v2/Navbar';
import Sidebar from './components v2/Sidebar';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import About from './components v2/About';
import Resume from './components v2/Resume';
import Projects from './components v2/Projects';

function App() {
  return (
    <Router>
    <div className="app">
      <div className="container app__container">
       <div className="row app__row">
        <div className="col-lg-3">
          
            <Sidebar />
          
        </div>
        <div className="col-lg-9 app__main-content">
        {/* navbar */}
        <Navbar/>
        <Switch> 
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
        </Switch>
     </div>
       </div>
      </div>
    </div>
    </Router>
  );
}

export default App;