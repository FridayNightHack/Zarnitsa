import React from 'react';
import { Container, Wrapper, ContainerMedium, ContentWithContainer } from './styles/content';

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

export default Content;
