import React from 'react';
import Navbar from './components v2/Navbar';
import Sidebar from './components v2/Sidebar';
import { useLocation, Route, Redirect, Switch } from 'react-router-dom';
import About from './components v2/About';
import Resume from './components v2/Resume';
import Projects from './components v2/Projects';
import {AnimatePresence} from 'framer-motion'

function App() {
  const location = useLocation();
  return (
   
    <div className="app">
      <div className="container app__container">
       <div className="row app__row">
        <div className="col-lg-3">
          
            <Sidebar />
          
        </div>
        <div className="col-lg-9 app__main-content">
        {/* navbar */}
        <Navbar/>
        <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}> 
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
        </AnimatePresence>
     </div>
       </div>
      </div>
    </div>
   
  );
}

export default App;