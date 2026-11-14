import "./App.css";
import EvacuationMap from "./components/EvacuationMap";
import MapData from "./components/MapData";
import StatusBanner from "./components/StatusBanner";

function App() {
  return (
    <>
      <section>
        <div id="top-header">
          <h1 id="header">Tsunami Evacuation Map</h1>
        </div>
      </section>

      <div id="spacer"></div>

      <StatusBanner message="Offline" level="offline" />

      <section>
        <div id="dashboard">
          <EvacuationMap />
          <MapData />
        </div>
      </section>
    </>
  );
}

export default App;