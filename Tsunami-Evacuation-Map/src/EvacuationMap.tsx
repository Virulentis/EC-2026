import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css"

function EvacuationMap() {
  return (
    <MapContainer
      id="map"
      center={[48.4284, -123.3656]}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[48.4284, -123.3656]}>
        <Popup>Victoria, BC</Popup>
      </Marker>
    </MapContainer>
  );
}

export default EvacuationMap;