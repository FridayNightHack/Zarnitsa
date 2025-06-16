import React, { useEffect } from 'react';
import 'styled-components/macro';
import { Content, CardSlider, Hero } from '../components';
import { Bookmark } from '@styled-icons/boxicons-regular/Bookmark';
import { ChevronLeft, ChevronRight } from '@styled-icons/bootstrap/';
import cardData from '../fixtures/card-slider.json';
import { detectWebP } from '../helpers/detectWebP';

export function ContentContainer(props) {
  const {
    currentCardIndex,
    setCurrentCardIndex,
    translateXValue,
    setTranslateXValue,
    isProgressAnimationPlay,
    setIsProgressAnimationPlay,
  } = props;

  const handleLeftChevronClick = () => {
    if (currentCardIndex > 0) {
      setIsProgressAnimationPlay(false);
      setCurrentCardIndex((currentCardIndex) => currentCardIndex - 1);
      setTranslateXValue((translateXValue) => (translateXValue += 270));
    }
  };
  const handleRightChevronClick = () => {
    if (currentCardIndex < cardData.length - 1) {
      setIsProgressAnimationPlay(false);
      setCurrentCardIndex((currentCardIndex) => currentCardIndex + 1);
      setTranslateXValue((translateXValue) => (translateXValue -= 270));
    }
  };
  const calculateProgressBarWidth = () => {
    const denominator = (cardData.length - 1) / currentCardIndex;
    return (1 / denominator) * 100;
  };

  useEffect(() => {
    let timeout = null;
    clearTimeout(timeout);
    if (!isProgressAnimationPlay) {
      timeout = setTimeout(() => {
        setIsProgressAnimationPlay(true);
        clearTimeout(timeout);
      }, [5000]);
    }
    return () => clearTimeout(timeout);
  }, [currentCardIndex, isProgressAnimationPlay, setIsProgressAnimationPlay]);

  return (
    <Content>
      <Content.Wrapper>
        <Hero>
          <Hero.Title
            style={{
              marginBottom: '32px',
              fontSize: '2.5rem',
              lineHeight: '1.1',
              position: 'static',
            }}>
            Зарница: Школа ветра, звёзд и воли к жизни
          </Hero.Title>
          <Hero.Wrapper style={{ marginTop: '16px', marginBottom: '16px' }}>
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
              Объединяем парусный туризм, ориентирование и школу выживания в одном приключении.
              Научись читать карту природы!
            </Hero.Subtitle>
            <Hero.Box
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '10px',
              }}>
              <Hero.Button
                hoverBg="#fff1"
                css={`
                  background: none;
                  border: 2px solid #fff;
                  border-radius: 30px;
                  color: #fff;
                  width: 200px;
                  padding: 0.6rem 0;
                  font-size: 1rem;
                  font-weight: 400;
                  letter-spacing: 1px;
                  margin: 0 0 8px 0;
                  transition: background 0.2s, color 0.2s;
                  text-align: center;
                `}>
                Забронировать Кемпинг/Глемпинг
              </Hero.Button>
              <Hero.Button
                hoverBg="#fff1"
                css={`
                  background: none;
                  border: 2px solid #fff;
                  border-radius: 30px;
                  color: #fff;
                  width: 200px;
                  padding: 0.6rem 0;
                  font-size: 1rem;
                  font-weight: 400;
                  letter-spacing: 1px;
                  margin: 0 0 8px 0;
                  transition: background 0.2s, color 0.2s;
                  text-align: center;
                `}>
                Выбрать программу
              </Hero.Button>
              <Hero.Button
                hoverBg="#fff1"
                css={`
                  background: none;
                  border: 2px solid #fff;
                  border-radius: 30px;
                  color: #fff;
                  width: 200px;
                  padding: 0.6rem 0;
                  font-size: 1rem;
                  font-weight: 400;
                  letter-spacing: 1px;
                  margin: 0;
                  transition: background 0.2s, color 0.2s;
                  text-align: center;
                `}>
                Забронировать участие
              </Hero.Button>
            </Hero.Box>
          </Hero.Wrapper>
        </Hero>
        <CardSlider>
          <CardSlider.Wrapper
            css={`
              transform: translateX(${translateXValue}px);
            `}>
            {cardData.slice(1).map((data, i) => (
              <CardSlider.Card
                first={i === 0}
                background={data.background}
                key={data.id}
                css={`
                  box-shadow: ${currentCardIndex >= 1 && i + 1 === currentCardIndex
                    ? 'none'
                    : '15px 15px 50px #000'};
                `}>
                <CardSlider.Title>{data.title}</CardSlider.Title>
                <CardSlider.Subtitle>{data.subtitle}</CardSlider.Subtitle>
              </CardSlider.Card>
            ))}
          </CardSlider.Wrapper>
          <CardSlider.Controls>
            <CardSlider.Button onClick={handleLeftChevronClick} aria-label="Previous place">
              <ChevronLeft size="24px" />
            </CardSlider.Button>
            <CardSlider.Button
              onClick={handleRightChevronClick}
              css={`
                @media (max-width: 30em) {
                  margin-right: 0;
                  order: 4;
                }
              `}
              aria-label="Next place">
              <ChevronRight size="24px" />
            </CardSlider.Button>

            <CardSlider.LinearProgress
              css={`
                margin-right: 25px;
                @media (max-width: 30em) {
                  display: none;
                }
              `}>
              <CardSlider.LinearProgressBar
                css={`
                  width: ${currentCardIndex === 0 ? 0 : calculateProgressBarWidth()}%;
                `}
              />
            </CardSlider.LinearProgress>
            <CardSlider.Counter>0{currentCardIndex + 1}</CardSlider.Counter>
          </CardSlider.Controls>
        </CardSlider>
      </Content.Wrapper>
    </Content>
  );
}
