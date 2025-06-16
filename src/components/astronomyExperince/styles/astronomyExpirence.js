import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  background-color: inherit;
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

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export const Card = styled(motion.div)`
  background: #1a1a2e;
  border-radius: 16px;
  padding: 2rem;
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

export const Emoji = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #ccc;
  line-height: 1.5;
`;
