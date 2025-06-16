import styled from 'styled-components/macro';

export const Container = styled.div`
  background: url(${(props) => props.bg}) no-repeat center/cover;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  min-width: 265px;
  position: relative;
  z-index: 0;
  transition: background 400ms 100ms;

  &::after {
    background-color: rgba(0, 0, 0, 0.34);
    bottom: 0;
    content: '';
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  @media (max-width: 64em) {
    background-image: url(${(props) => props.bgSmall});
  }
`;

export const CenteredContainer = styled(Container)`
  background: url(${(props) => props.bg}) no-repeat cover;
  background-position: 0% 90%;
`;
