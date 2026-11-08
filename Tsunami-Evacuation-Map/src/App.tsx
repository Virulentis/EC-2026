
import './App.css'
import EvacuationMap from './EvacuationMap';
import MapData from './MapData.tsx';

function App() {
  return (
    <>
    <section>
    <div id="top-header">
      <h2 id="header">
        Tsunami Evacuation Map
      </h2>
    </div>
    </section>
    <div id="spacer"></div>
    <section>
      <div id="dashboard">
        <div id="map">
            <EvacuationMap />
        </div>
        <div id="data">
          <MapData />
        </div>
      </div>
    </section>
    <section>
    </section>
    </>
  )
}

export default App
