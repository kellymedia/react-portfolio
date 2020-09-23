import React from 'react';
import Header from './components/Header';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import GeoMapMe from './components/pages/Geomapme-project';
import Readme from './components/pages/Readme-project';
import Find from './components/pages/Find-and-dine-project';
import Bootstrap from './components/pages/Bootstrap-portfolio-project';
import Weather from './components/pages/Weather-dashboard-project';
import Refactor from './components/pages/Code-refactor-project';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/geomapme-project' component={GeoMapMe} />
          <Route path='/readme-project' component={Readme} />
          <Route path='/find-and-dine-project' component={Find} />
          <Route path='/bootstrap-portfolio-project' component={Bootstrap} />
          <Route path='/weather-dashboard-project' component={Weather} />
          <Route path='/code-refactor-project' component={Refactor} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
