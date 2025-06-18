import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import L from 'leaflet';

// Обязательно: подгружаем иконки вручную из Leaflet (иначе они не появятся)
import 'leaflet/dist/leaflet.css';

// Fix: Leaflet marker icons not showing
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const positions = {
  gelendzhik: [44.5638, 38.0742], // Бухта Геленджика
  tarkhankut: [45.3395, 32.525], // Мыс Тарханкут
};

const route = [positions.gelendzhik, positions.tarkhankut];

export default function MapRoute() {
  return (
    <MapContainer
      center={[44.9, 35.0]} // Центр между двумя точками
      zoom={6}
      style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
      />

      {/* Маркеры */}
      <Marker position={positions.gelendzhik}>
        <Popup>Бухта Геленджика — ночёвка под звёздами</Popup>
      </Marker>

      <Marker position={positions.tarkhankut}>
        <Popup>Мыс Тарханкут — экстремальное маневрирование</Popup>
      </Marker>

      {/* Линия маршрута */}
      <Polyline positions={route} color="blue" />
    </MapContainer>
  );
}
