import React from 'react';
import {
  Container,
  Wrapper,
  ContainerMedium,
  ContentWithContainer,
  Button,
  Section,
  SectionContainer,
  Heading,
  Text,
} from './styles/content';

function Content({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Content.Wrapper = function ContentWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Content.Main = function ContentMain({ children, ...restProps }) {
  return <ContentWithContainer {...restProps}>{children}</ContentWithContainer>;
};

Content.Medium = function ContentMedium({ children, ...restProps }) {
  return (
    <ContainerMedium {...restProps} id="camp-types">
      {children}
    </ContainerMedium>
  );
};

Content.Button = function ContentButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Content.Section = function ContentSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};
Content.SectionContainer = function SecContainer({ children, ...restProps }) {
  return <SectionContainer {...restProps}>{children}</SectionContainer>;
};
Content.Heading = function ContentHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};
Content.Text = function ContentText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

export default Content;
