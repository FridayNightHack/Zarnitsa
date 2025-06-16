import React from 'react';
import { Container, CenteredContainer } from './styles/background';

function Background({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Background.Centered = function BackgroundCentered({ children, ...restProps }) {
  return <CenteredContainer {...restProps}>{children}</CenteredContainer>;
};

export default Background;
