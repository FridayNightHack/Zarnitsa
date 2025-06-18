import React from 'react';
import 'styled-components/macro';
import { HeaderContainer } from '../containers/header';
import { MobileNavMenuContainer } from '../containers/mobile-nav-menu';
// import { LoadingContainer } from '../containers/loading';
import { Content, Hero, CardsContent, Background, Services, Footer } from '../components';
import data from '../components/astronomyExperince/styles/data.json';
import services from '../fixtures/services.json';
import {
  Section,
  Title,
  Cards,
  Card,
  Emoji,
  CardTitle,
  Description,
} from '../components/astronomyExperince/styles/astronomyExpirence';
// import { Display, Justify } from '@styled-icons/bootstrap';
// import { InfoLgDimensions } from '@styled-icons/bootstrap/InfoLg';

const accommodations = [
  {
    title: 'Большой купол «Солнце»',
    emoji: '🌌',
    description: 'Прозрачный купол с видом на звёздное небо и телескопом внутри.',
    image: '/assets/images/large/cmpng/types/night-sky.png',
  },
  {
    title: 'Юрта «Луна»',
    emoji: '🏕',
    description: 'Место для сна, отдыха и чилл-зона, баня в можжевеловом лесу.',
    image: '/assets/images/large/cmpng/types/bathhouse.jpg',
  },
  {
    title: 'Лесной домик',
    emoji: '🌲',
    description: 'Уютный деревянный домик среди сосен, тишина и свежий воздух.',
    image: '/assets/images/large/cmpng/types/camp.jpg',
  },
];

export default function Camping() {
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  // const [showLoading, setShowLoading] = React.useState(true);

  // const handleLoad = React.useCallback(() => {
  //   setShowLoading(false);
  // }, []);

  // useEffect(() => {
  //   window.addEventListener('load', handleLoad);
  //   return () => window.removeEventListener('load', handleLoad);
  // }, [handleLoad]);

  // if (showLoading) return <LoadingContainer />;
  return (
    <>
      <Background.Centered
        bg={`${process.env.PUBLIC_URL}/assets/images/large/cmpng/domes-2.jpg`}
        bgSmall={`${process.env.PUBLIC_URL}/assets/images/large/cmpng/domes-2.jpg`}
        style={{ backgroundAttachment: 'fixed' }}>
        <HeaderContainer showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} />
        <MobileNavMenuContainer showMobileNav={showMobileNav} />
        <Content style={{ padding: '0px 0px' }}>
          <Content.Medium>
            <Hero
              style={{
                width: '100%',
                display: 'flex',
                paddingInline: '10px',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                flexDirection: 'column',
              }}>
              <Hero.Title
                style={{
                  marginBottom: '32px',
                  lineHeight: '1.1',
                  position: 'static',
                  color: '  #EFCB68 ',
                  fontWeight: 800,
                }}>
                Дом под звёздами
              </Hero.Title>
              <Hero.Subtitle
                style={{
                  whiteSpace: 'normal',
                  lineHeight: '1.4',
                  wordBreak: 'break-word',

                  fontWeight: 400,
                  marginBottom: '16px',
                  position: 'static',
                  color: ' #EFCB68 ',
                }}>
                Уединение, природа и космос — отдых в геокуполах, юртах и лесных домиках с настоящей
                обсерваторией
              </Hero.Subtitle>
            </Hero>
          </Content.Medium>
        </Content>
        <Content.Main>
          <Content.Medium>
            <CardsContent style={{ paddingTop: '80px' }}>
              {accommodations.map(({ title, emoji, description, image }) => (
                <CardsContent.Card key={title}>
                  <CardsContent.Image src={`${process.env.PUBLIC_URL + image}`} />
                  <CardsContent.CardItem>
                    <CardsContent.Title>
                      <CardsContent.Emoji>{emoji}</CardsContent.Emoji>
                      {title}
                    </CardsContent.Title>
                    <CardsContent.Description>{description}</CardsContent.Description>
                    <CardsContent.Button>Подробнее</CardsContent.Button>
                  </CardsContent.CardItem>
                </CardsContent.Card>
              ))}
            </CardsContent>

            <Section>
              <Title>Астрономический опыт</Title>
              <Cards>
                {data.map(({ emoji, title, desc }, index) => (
                  <Card
                    key={title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}>
                    <Emoji>{emoji}</Emoji>
                    <CardTitle>{title}</CardTitle>
                    <Description>{desc}</Description>
                  </Card>
                ))}
              </Cards>
            </Section>

            <Services>
              <Services.Title>Наши услуги</Services.Title>
              <Services.ServiceList>
                {services.map(({ emoji, title, desc }) => (
                  <Services.ServiceCard
                    key={title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}>
                    <Services.Img src={`${process.env.PUBLIC_URL + emoji}`}></Services.Img>
                    <Services.ServiceTitle>{title}</Services.ServiceTitle>
                    <Services.Description>{desc}</Services.Description>
                  </Services.ServiceCard>
                ))}
              </Services.ServiceList>
            </Services>
          </Content.Medium>
        </Content.Main>
        <Footer id="footer">
          <Footer.Wrapper>
            <Footer.Text>
              © {new Date().getFullYear()} Globe Express. Все права защищены.
            </Footer.Text>
            <Footer.Link href="" target="_blank"></Footer.Link>
          </Footer.Wrapper>
        </Footer>
      </Background.Centered>
    </>
  );
}
