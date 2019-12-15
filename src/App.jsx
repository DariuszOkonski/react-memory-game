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
            <Route exact path="/game" component={() => <Game cards={0} />} />
            <Route exact path="/game/eight" component={() => <Game cards={8} />} />
            <Route exact path="/game/twelwe" component={() => <Game cards={12} />} />
            <Route exact path="/game/sixteen" component={() => <Game cards={16} />} />
            <Route exact path="/game/twenty" component={() => <Game cards={20} />} />
            <Route exact path="/about" component={About} />
            <Route component={Error} />
          </Switch>
        </section>

        <div style={{ marginBottom: '4rem' }}></div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
