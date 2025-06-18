import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import cardData from './fixtures/card-slider.json';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import { detectWebP } from './helpers/detectWebP';
import Home from './pages/home';
import Camping from './pages/camping';
import SailingTour from './pages/tourism';

function App() {
  const mql = window.matchMedia('(min-width:64em)');
  return (
    <>
      <HelmetProvider>
        <Helmet>
          {cardData.map((data) => (
            <link
              rel="preload"
              href={`${process.env.PUBLIC_URL}${mql.matches ? data.image : data.background}`}
              as="image"
              key={data.background}
            />
          ))}
        </Helmet>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/camping" element={<Camping />} />
            <Route path="/tourism" element={<SailingTour />} />
          </Routes>
        </HashRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
