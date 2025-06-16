import React from 'react';
import {
  CardsContainer,
  Card,
  Image,
  CardContent,
  Title,
  Description,
  Emoji,
  Button,
} from './styles/cards-styled';

function CardsContent({ children, ...restProps }) {
  return <CardsContainer {...restProps}>{children}</CardsContainer>;
}

CardsContent.Card = function ContentCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

CardsContent.Image = function ContentImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

CardsContent.CardItem = function ContentItem({ children, ...restProps }) {
  return <CardContent {...restProps}>{children}</CardContent>;
};

CardsContent.Title = function ContentTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

CardsContent.Description = function ContentDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

CardsContent.Emoji = function ContentEmoji({ children, ...restProps }) {
  return <Emoji {...restProps}>{children}</Emoji>;
};

CardsContent.Button = function ContentButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

export default CardsContent;
