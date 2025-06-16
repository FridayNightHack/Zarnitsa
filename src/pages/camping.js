import React, { useState, useEffect, useCallback } from 'react';
import 'styled-components/macro';
import { HeaderContainer } from '../containers/header';
import { MainContainer } from '../containers/main';
// import { FooterContainer } from '../containers/footer';
import { MobileNavMenuContainer } from '../containers/mobile-nav-menu';
import { Background, CardSlider } from '../components';
import { progress } from '../animations';
import cardData from '../fixtures/card-slider.json';
import { detectWebP } from '../helpers/detectWebP';
import { LoadingContainer } from '../containers/loading';
import { Content, Hero } from '../components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapWrapper, StyledMap, StyledPopup } from '../components/map-routes/styles/mapRoutes';

// Настройка иконки Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapRoutes = () => {
  return (
    <MapWrapper>
      <StyledMap center={[44.6, 33.5]} zoom={8} scrollWheelZoom={false}>
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Пример метки */}
        <Marker position={[44.6167, 33.525]}>
          <Popup>
            <StyledPopup>
              <h3>Якорная стоянка</h3>
              <p>Рядом с Геленджиком. Отличное место для ночёвки на яхте.</p>
              <button>Забронировать</button>
            </StyledPopup>
          </Popup>
        </Marker>
      </StyledMap>
    </MapWrapper>
  );
};

export default function Home() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [translateXValue, setTranslateXValue] = useState(0);
  const [isProgressAnimationPlay, setIsProgressAnimationPlay] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  const handleLoad = useCallback(() => {
    setIsProgressAnimationPlay(true);
    setShowLoading(false);
  }, []);

  useEffect(() => {
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, [handleLoad]);

  const handleProgressAnimation = () => {
    setCurrentCardIndex((currentCardIndex) => currentCardIndex + 1);
    setTranslateXValue((translateXValue) => translateXValue - 270);
  };

  if (showLoading) return <LoadingContainer />;
  return (
    <>
      <MobileNavMenuContainer showMobileNav={showMobileNav} />

      <Background
        bg={cardData[currentCardIndex].image}
        bgSmall={cardData[currentCardIndex].background}>
        <HeaderContainer showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} />
        <Content>
          <Hero>
            <Hero.Title
              style={{
                marginBottom: '32px',
                fontSize: '2.5rem',
                lineHeight: '1.1',
                position: 'static',
              }}>
              Дом под звёздами: Геокупола-обсерватории, юрты, лесные домики
            </Hero.Title>
            <Hero.Subtitle
              style={{
                whiteSpace: 'normal',
                lineHeight: '1.4',
                wordBreak: 'break-word',
                fontSize: '1.2rem',
                fontWeight: 400,
                marginBottom: '16px',
                position: 'static',
                maxWidth: '420px',
              }}>
              Выберите свой уникальный опыт проживания под звёздами.
            </Hero.Subtitle>
          </Hero>
          <MapRoutes />
          <div className="accommodation">
            <section>
              <h2>Геокупол «Обсерватория»</h2>
              <p>Прозрачный купол с телескопом, проекция созвездий</p>
              <div className="gallery">Фото ночного неба, интерьер</div>
            </section>
            <section>
              <h2>Юрта «Кочевник»</h2>
              <p>Войлочные стены, этнический декор, камин</p>
              <div className="gallery">360° тур, баня в можжевельнике</div>
            </section>
            <section>
              <h2>Лесной домик</h2>
              <p>Сруб из черноморского дуба, терраса у озера</p>
              <div className="gallery">Виды на лес, резные орнаменты</div>
            </section>
          </div>
          <div className="services">
            <h2>Услуги</h2>
            <ul>
              <li>Баня на дровах + травяные чаи из местных трав</li>
              <li>Вечерние джем-сейшны у костра</li>
              <li>Эко-питание: вегетарианское меню, уха из улова</li>
            </ul>
          </div>
        </Content>
      </Background>
    </>
  );
}
