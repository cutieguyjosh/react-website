import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Projects from './pages/Projects';


export default function App() {

  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/skills' component={Skills} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

        