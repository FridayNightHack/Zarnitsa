import styled from 'styled-components/macro';

export const Container = styled.footer`
  background: #0d0d1a;
  color: #fff;
  padding: 3rem 2rem;
  text-align: center;
  @media (max-width: 64em) {
    text-align: center;
  }
  @media (max-width: 30em) {
    padding: 0.2em;
  }
`;

export const Wrapper = styled.div`
  display: inline-block;
`;

export const Link = styled.a`
  color: inherit;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  transition: color 100ms;
  &:hover {
    color: #ededed;
    text-decoration: underline;
  }
`;

export const Text = styled.p`
  display: inline-block;
  @media (max-width: 64em) {
    text-align: center;
  }
`;

export const Span = styled.span`
  margin-right: 0.7em;
`;
