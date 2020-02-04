import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '@babel/polyfill';
import Nav from './components/Nav';
import Home from './routes/Home';
import Profile from './routes/Profile';
import Work from './routes/Work';
import Study from './routes/Study';
import Blog from './routes/Blog';
import Notfound from './routes/Notfound';

import './App.css'

const App = () => {
  return (
    <Router>
    <div className="wrap">
      <Nav/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Work" component={Work} />
          <Route path="/Study" component={Study} />
          <Route path="/Blog" component={Blog} />
          <Route path="/Blog" component={Blog} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </div>
    </Router>
  );
};





export default App;

