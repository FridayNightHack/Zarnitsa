import styled from 'styled-components/macro';

export const Container = styled.header`
  align-items: center;
  color: white;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0 1em;
  padding-top: 2em;
  position: relative;
  z-index: 110;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;

  @media (max-width: 48em) {
    justify-content: flex-end;
  }
`;

export const LogoWrapper = styled.div`
  align-items: center;
  display: flex;
`;
export const Logo = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  color: #fff;
  user-select: none;
  transition: color 0.2s;

  &:hover {
    color: rgba(255, 255, 255, 0.56);
  }
  @media (max-width: 64em) {
  }
`;

export const Nav = styled.nav`
  margin-right: 50px;
  @media (max-width: 64em) {
    margin: 0;
    width: 100%;
  }
  @media (max-width: 48em) {
    display: none;
  }
`;
export const Menu = styled.ul`
  align-items: center;
  display: flex;
  padding-top: 5px;
  @media (max-width: 64rem) {
    margin: 0 auto;
    width: max-content;
  }
`;

export const MenuItem = styled.li`
  cursor: pointer;
  margin-bottom: -2px;
  margin-right: 30px;
  padding: 5px 0;
  transition: color 0.2s;

  &:hover {
    color: #ffffffde;
  }
  &::after {
    background: #f7ba53;
    content: '';
    display: block;
    height: 2px;
    transition: width 0.3s;
    width: 0;
  }

  &:hover&::after {
    width: 100%;
  }

  @media (max-width: 1024px) {
    margin-right: 20px;
    font-size: 13px;
  }
`;

export const Links = styled.a`
  color: white;
  text-decoration: none;
`;
export const Box = styled.div`
  align-items: center;
  display: flex;
`;
export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  transition: color 150ms;
  &:hover {
    color: #ffffffc2;
  }
`;
