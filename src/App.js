import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import cardData from './fixtures/card-slider.json';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { detectWebP } from './helpers/detectWebP';
import Home from './pages/home';
import Camping from './pages/camping';

function App() {
  const mql = window.matchMedia('(min-width:64em)');
  return (
    <>
      <HelmetProvider>
        <Helmet>
          {cardData.map((data) => (
            <link
              rel="preload"
              href={`${mql.matches ? data.image : data.background}${
                detectWebP() ? '.webp' : '.jpg'
              }`}
              as="image"
              key={data.image}
            />
          ))}
        </Helmet>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/camping" element={<Camping />} />
            {/* другие маршруты */}
          </Routes>
        </HashRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
