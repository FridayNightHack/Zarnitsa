// import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  color: #fff;
  padding: 4rem 2rem;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #ffaa44;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ServiceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export const ServiceCard = styled(motion.div)`
  background: #1a1a2e;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding-bottom: 2rem;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transition: background 0.3s ease;

  &:hover {
    background: #2a2a3d;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Img = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  height: 180px;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #ccc;
  line-height: 1.5;
  padding-inline: 1rem;
`;
