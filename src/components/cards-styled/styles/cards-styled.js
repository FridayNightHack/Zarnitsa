import styled from 'styled-components';

export const CardsContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding-inline: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  background-color: #1e1e1e;
  color: #fff;
  width: 300px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  height: 180px;
`;

export const CardContent = styled.div`
  padding: 1.5rem;
`;

export const Title = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #ccc;
`;

export const Emoji = styled.span`
  font-size: 1.6rem;
  margin-right: 0.5rem;
`;

export const Button = styled.button`
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background: #ffaa44;
  border: none;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  color: #1e1e1e;

  &:hover {
    background: #ffbb66;
  }
`;
