import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import { MapContainer } from 'react-leaflet';

// Styled-компоненты
export const MapWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem;
  background-color: #f0f4f8;
`;

export const StyledMap = styled(MapContainer)`
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`;

export const StyledPopup = styled.div`
  h3 {
    margin: 0;
    font-size: 1rem;
    color: #0a3d62;
  }

  p {
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }

  button {
    background-color: #0984e3;
    color: white;
    padding: 0.4rem 0.8rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #74b9ff;
  }
`;
