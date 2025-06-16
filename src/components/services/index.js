import React from 'react';
import {
  Section,
  Title,
  ServiceList,
  ServiceCard,
  Img,
  ServiceTitle,
  Description,
} from './styles/services';

function Services({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
}

Services.Title = function ServicesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Services.ServiceList = function ServicesServiceList({ children, ...restProps }) {
  return <ServiceList {...restProps}>{children}</ServiceList>;
};

Services.ServiceCard = function ServicesServiceCard({ children, ...restProps }) {
  return <ServiceCard {...restProps}>{children}</ServiceCard>;
};

Services.Img = function ServicesImg({ children, ...restProps }) {
  return <Img {...restProps}>{children}</Img>;
};

Services.ServiceTitle = function ServicesServiceTitle({ children, ...restProps }) {
  return <ServiceTitle {...restProps}>{children}</ServiceTitle>;
};

Services.Description = function ServicesDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

export default Services;
