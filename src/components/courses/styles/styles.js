import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  background: ${({ $fleet }) =>
    $fleet ? 'linear-gradient(0deg, rgba(241, 240, 232, 0.84) 0%, #f1f0e8 100%)' : '#f9f9f9'};
  color: #222;
  padding: 4rem 2rem;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #0a3a67;
`;

export const CourseList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export const CourseCard = styled(motion.div)`
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 2rem;
  width: 320px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  }
`;

export const CourseTitle = styled.h3`
  font-size: 1.5rem;
  color: #0a3a67;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
`;

export const SectionCatalog = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 1.5rem;
  @media (max-width: 1024px) {
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 1.5rem;
  }
`;

export const InlineBlocks = styled.div`
  width: 369px;
  height: 534px;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  @media (max-width: 1024px) {
    width: calc(100% / 2 - 1rem);
  }

  @media (max-width: 790px) {
    width: 100%;
    height: 100%;
    padding: 1.33rem 1.33rem;
  }
`;

export const ImgSection = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  position: relative;

  & img {
    object-fit: cover;
    width: 100%;
    aspect-ratio: 1;
  }
`;

export const CenteredContainer = styled.div`
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;
`;

export const FleetInfo = styled.h3`
  font-size: 24px;
  color: #0a3a67;
`;

export const FleetTitle = styled.p``;
