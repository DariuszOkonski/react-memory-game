import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import About from './components/About';
import Error from './components/Error';

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navigation />
        <div style={{ marginTop: '4rem' }}></div>

        <section style={{ backgroundColor: 'yellow' }} className="container mt-4">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/game" component={Game} />
            <Route path="/about" component={About} />
            <Route component={Error} />
          </Switch>
        </section>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
