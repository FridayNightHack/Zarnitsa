import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export const Container = styled.div`
  padding: 0 65px;
  width: 100%;
  @media (max-width: 64em) {
    height: auto;
  }

  @media (max-width: 30em) {
    height: calc(100% - 60px); // 60px is header height.
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: 64em) {
    align-items: center;
    flex-direction: column;
    height: auto !important;
    justify-content: center;

    @media (max-width: 30em) {
      height: 100% !important;
      justify-content: space-between;
    }
  }
`;

export const ContentWithContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const ContainerMedium = styled.div`
  max-width: calc(var(--container-medium) - var(--container-padding) * 2);
  margin-inline: auto;
  position: relative;
`;

export const Button = styled.a`
  background-color: ${(props) => (props.primary ? '#48B3C9' : 'transparent')};
  color: ${(props) => (props.primary ? '#0B1D2D' : '#DCE3EA')};
  border: 2px solid #48b3c9;
  padding: 0.75rem 1rem;
  font-size: 0.87rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? '#3a9ab0' : '#48B3C9')};
    color: #fff;
  }
`;

export const Section = styled.section`
  background-color: #0b1d2d;
  color: #dce3ea;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const SectionContainer = styled.div`
  max-width: 800px;
`;

export const Heading = styled.h2`
  font-family: 'Playfair Display', serif;
  color: #c6a772;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

export const Text = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #dce3ea;
`;
