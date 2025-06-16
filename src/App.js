import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import cardData from './fixtures/card-slider.json';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { detectWebP } from './helpers/detectWebP';
import Home from './pages/home';
import Camping from './pages/camping';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/camping',
    element: <Camping />,
  },
]);

function App() {
  const mql = window.matchMedia('(min-width:64em)');
  return (
    <>
      <RouterProvider router={router}>
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
        </HelmetProvider>
      </RouterProvider>
    </>
  );
}

export default App;
