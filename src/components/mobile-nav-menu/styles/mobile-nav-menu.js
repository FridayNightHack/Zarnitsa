import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 80vw;
  height: 100vh;
  background: rgba(33, 33, 34, 0.95);
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.5);
  padding: 40px 20px 20px 20px;
  display: none;
  flex-direction: column;
  z-index: 2;
  transform: translateX(${({ isActive }) => (isActive ? '0' : '100%')});
  transition: transform 0.3s ease;
  @media (max-width: 48rem) {
    display: flex;
  }
`;

export const Wrapper = styled.div``;

export const StyledLink = styled(Link)`
  border-color: black;
  border-style: solid;
  display: block;
  border-width: 0 0 1px 0;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
  cursor: pointer;
  transition: background-color 200ms;
  &:hover {
    color: #f4b41a; /* Акцентный жёлтый */
    background: rgb(163 159 159 / 20%);
  }

  @media (max-width: 40em) {
    padding: 0.5em;
  }
`;

export const Text = styled.p`
  padding: 0.5em;
  text-align: center;
`;
export const AttributionLink = styled.a`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #f4b41a; /* Акцентный жёлтый */
  }
`;

export const List = styled.ul`
  margin-bottom: 1em;
  margin-top: 6em;
  width: 100%;
`;
export const Item = styled.li`
  text-align: center;
`;

export const Button = styled.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  display: none;
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  @media (max-width: 48em) {
    align-items: center;
    display: flex;
    z-index: 2;
  }
`;

export const Icon = styled.span`
  background-color: ${(props) => (props.clicked ? 'transparent' : 'white')};
  display: inline-block;
  height: 2px;
  position: relative;
  transition: background-color 300ms;
  width: 25px;

  &::before,
  &::after {
    content: '';
    background-color: white;
    display: inline-block;
    height: 2px;
    left: 0;
    position: absolute;
    transition: 300ms;
    transition-property: background-color, transform;
    width: 25px;
  }

  &::before {
    transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
    top: ${(props) => (props.clicked ? '0' : '-8px')};
  }
  &::after {
    transform: ${(props) => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
    top: ${(props) => (props.clicked ? '0' : '8px')};
  }
`;
