import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapWrapper, StyledMap, StyledPopup } from '../components/map-routes/styles/mapRoutes';

// Настройка иконки Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapRoutes = () => {
  return (
    <MapWrapper>
      <StyledMap center={[44.6, 33.5]} zoom={8} scrollWheelZoom={false}>
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Пример метки */}
        <Marker position={[44.6167, 33.525]}>
          <Popup>
            <StyledPopup>
              <h3>Якорная стоянка</h3>
              <p>Рядом с Геленджиком. Отличное место для ночёвки на яхте.</p>
              <button>Забронировать</button>
            </StyledPopup>
          </Popup>
        </Marker>
      </StyledMap>
    </MapWrapper>
  );
};

export default MapRoutes;
