import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '@babel/polyfill';
import Nav from './components/Nav';
import Home from './routes/Home';
import Profile from './routes/Profile';
import Work from './routes/Work';
import Study from './routes/Study';
import Blog from './routes/Blog';
import Notfound from './routes/Notfound.js';
import PostDetail from './components/PostDetail';
import {AnimatePresence} from 'framer-motion';
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css'


const App = () => {
  return (
    <Router>
      <div className="wrap">
        <Nav/>
        <div className="container">
          <AnimatePresence>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Profile" component={Profile} />
              <Route path="/Work" component={Work} />
              <Route path="/Study" component={Study} />
              <Route path="/Blog" component={Blog} />
              <Route path="/post/:id" component={PostDetail} />
              <Route component={Notfound} />
            </Switch>
          </AnimatePresence>      
        </div>
        <footer className="footer">
          <div className="inner">
            <p className="copyright">Copyright ⓒ 2020. All Rights Reserved.</p>
            <p className="contact"><FontAwesomeIcon icon={faEnvelope} className="mail_icon"/>chank.kim89@gmail.com</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};





export default App;

