import "./MapData.css";

function MapData() {
  return (
    <div id="data">
      <div id="data-header">
        <h3>Evacuation Information</h3>
      </div>


      <div id="legend">
        {}
      </div>

      <div id="data-details">
        <div id="start-location">
          <strong>Starting Location:</strong>
          <p>Not available</p>
        </div>

        <div id="transport-method">
          <strong>Transportation Method:</strong>
          <p>Not available</p>
        </div>

        <div id="destination">
          <strong>Recommended Destination:</strong>
          <p>Not available</p>
        </div>

        <div id="destination-elevation">
          <strong>Destination Elevation:</strong>
          <p>Not available</p>
        </div>

        <div id="hazard-zone">
          <strong>Active Hazard Zone:</strong>
          <p>Not available</p>
        </div>

        <div id="route-distance">
          <strong>Route Distance:</strong>
          <p>Not available</p>
        </div>

        <div id="travel-time">
          <strong>Estimated Travel Time:</strong>
          <p>Not available</p>
        </div>

        <div id="directions">
          <strong>Directions:</strong>
          <p>Not available</p>
        </div>

        <div id="alternative-route">
          <strong>Alternative Route:</strong>
          <p>Not available</p>
        </div>

        <div id="road-closures">
          <strong>Road Closures:</strong>
          <p>Not available</p>
        </div>

        <div id="congestion">
          <strong>Congestion:</strong>
          <p>Not available</p>
        </div>

        <div id="last-updated">
          <strong>Last Updated:</strong>
          <p>Not available</p>
        </div>
      </div>
    </div>
  );
}

export default MapData;