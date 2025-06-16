import styled from 'styled-components/macro';

export const Container = styled.div`
  padding: 0 65px;
  width: 100%;
  @media (max-width: 64em) {
    height: auto;
  }
  @media (max-width: 30em) {
    height: calc(100% - 60px); // 60px is header height.
    max-height: 600px;
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
