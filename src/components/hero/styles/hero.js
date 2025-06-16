import styled from 'styled-components/macro';

export const Container = styled.div`
  color: white;
  flex-shrink: 0;
  margin-bottom: 2em;
  padding-top: 65px;
  position: relative;
  width: 40%;

  @media (max-width: 64em) {
    padding: 0;
    width: initial;
    margin-top: 90px;
  }
`;

export const SecondaryContainer = styled(Container)`
  width: 100%;

  @media (max-width: 1024px) {
    width: 80%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 350px;
  position: relative;
  @media (max-width: 64em) {
    text-align: center;
    height: 280px;
  }
`;

export const Title = styled.h2`
  font-size: clamp(30px, 2vw, 40px);
  font-weight: 400;
  position: absolute;
  top: 25px;

  @media (max-width: 64em) {
    line-height: 2em;
    position: static;
    text-align: center;
  }
`;

export const Subtitle = styled.h3`
  font-size: clamp(17px, 1.5vw, 30px);
  text-transform: uppercase;
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6rem;
  white-space: unset;
  @media (max-width: 64em) {
    margin-bottom: 2em;
  }
`;

export const Box = styled.div`
  align-items: flex-end;
  display: flex;
  flex-basis: 100%;
  @media (max-width: 64em) {
    justify-content: center;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 20px;
  color: inherit;
  padding: 0.7rem 1.2rem;
  transition: background 200ms;
  &:hover {
    background: ${(props) => props.hoverBg};
  }
`;

export const Action = styled.a`
  text-decoration: none;
  background-color: #ffd700;
  color: #1a1a1a;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;
  padding: 14px 28px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0 0 12px rgba(255, 215, 0, 0.5);
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffc300;
    box-shadow: 0 0 18px rgba(255, 215, 0, 0.8);
  }
`;
