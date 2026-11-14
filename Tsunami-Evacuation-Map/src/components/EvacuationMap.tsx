import evacuationMap from "../assets/evacuation-map.jpeg";
import "./EvacuationMap.css";

function EvacuationMap() {
  return (
    <div id="map">
      <img
        src={evacuationMap}
        alt="Map of Victoria and Oak Bay showing candidate refuge locations and road connections"
      />
    </div>
  );
}

export default EvacuationMap;