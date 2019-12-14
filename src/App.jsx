import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navigation />

        <section style={{ backgroundColor: 'yellow' }} className="container mt-4">

        </section>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
