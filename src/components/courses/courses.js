import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  Section,
  Title,
  CourseList,
  CourseCard,
  CourseTitle,
  Description,
  SectionCatalog,
  InlineBlocks,
  ImgSection,
  FleetInfo,
  FleetTitle,
  CenteredContainer,
} from './styles/styles';

const Courses = () => {
  const data = [
    {
      title: 'Базовый курс',
      desc: 'Управление яхтой, морские узлы, безопасность на борту.',
    },
    {
      title: 'Продвинутый курс',
      desc: 'Ночная навигация, штормовые сценарии, принятие решений.',
    },
    {
      title: 'Эксклюзив',
      desc: '«Рыбалка + готовка с шефом на борту» — гастро-яхтинг.',
    },
  ];

  const yachts = [
    {
      img: '/assets/images/large/trsm/Fleet1.webp',
      fleet: 'Лагуна 520',
      info: 'Просторная яхта с 12 спальными местами, кухней и кондиционером.',
    },
    {
      img: '/assets/images/large/trsm/Fleet2.webp',
      fleet: 'Элан 50',
      info: 'Премиальная 50-футовая яхта с 2 ванными комнатами и 10 спальными местами',
    },
    {
      img: '/assets/images/large/trsm/Fleet3.webp',
      fleet: 'Лагуна 40',
      info: '4 комнаты с собственными ванными комнатами,идеально подходит для 8-10 гостей',
    },
  ];

  return (
    <>
      <Section>
        <div className="container-medium">
          <Title>+ Курсы</Title>
          <CourseList>
            {data.map(({ title, desc }, index) => (
              <CourseCard
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}>
                <CourseTitle>{title}</CourseTitle>
                <Description>{desc}</Description>
              </CourseCard>
            ))}
          </CourseList>
        </div>
      </Section>

      <Section $fleet>
        <div className="container-medium">
          <Title>+Наш флот</Title>
          <SectionCatalog>
            {yachts.map(({ img, fleet, info }, index) => (
              <InlineBlocks key={index}>
                <ImgSection>
                  <img src={`${process.env.PUBLIC_URL}${img}`}></img>
                </ImgSection>
                <CenteredContainer>
                  <FleetInfo>{fleet}</FleetInfo>
                  <FleetTitle>{info}</FleetTitle>
                </CenteredContainer>
              </InlineBlocks>
            ))}
          </SectionCatalog>
        </div>
      </Section>
    </>
  );
};

export default Courses;
