import React, { useState } from 'react';
import './styles.css';
import 'styled-components/macro';

import { HeaderContainer } from '../containers/header';
import { LoadingContainer } from '../containers/loading';

import { MobileNavMenuContainer } from '../containers/mobile-nav-menu';

import {
  Content,
  Hero,
  CardsContent,
  Background,
  Services,
  Footer,
  FleetList,
} from '../components';

import Courses from '../components/courses/courses';
import MapRoute from '../components/map-routes/mapRoutes';

const SailingTour = () => {
  const myRef = React.useRef(null);

  const scrollToElement = () => {
    if (myRef.current) {
      myRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  return (
    <>
      <Content.Main>
        <Background.Centered
          bg={`${process.env.PUBLIC_URL}/assets/images/large/trsm/tour.jpg`}
          bgSmall={`${process.env.PUBLIC_URL}/assets/images/large/trsm/tour.jpg`}
          style={{ backgroundAttachment: 'fixed', height: '90vh' }}>
          <HeaderContainer showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} />
          <MobileNavMenuContainer showMobileNav={showMobileNav} />
          <section className="hero-section">
            <Content.Medium>
              <h2 className="visually-hidden">Море — твой учитель. Парус — твой язык</h2>
              <div className="hero-title light-items">
                <h3 className="section-title">Парусная навигация & Яхтинг</h3>
                <p className="section-sub-title">Море — твой учитель. Парус — твой язык</p>
                <div className="sta-section">
                  <Content.Button onClick={scrollToElement}>Узнать больше</Content.Button>
                </div>
              </div>
            </Content.Medium>
          </section>
        </Background.Centered>
        <div ref={myRef}>
          <Courses></Courses>
        </div>
      </Content.Main>
    </>
  );
};

export default SailingTour;
