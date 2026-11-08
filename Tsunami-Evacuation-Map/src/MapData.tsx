
import "./App.css"
import { useState } from 'react'
function MapData() {
const [stat, setText] = useState<string>("Normal");

  return (
    <section>
    <div id="status-header">
        <h2 id="header">
            CURRENT STATUS: {stat}
        </h2>
    </div>
    <div id="data">
    <h2>Evacuation Information</h2>
      <h3>Legend</h3>
      <p>Red: Hazard zone</p>
      <p>Green: Safe zone</p>
    </div>
    </section>

  );
}

export default MapData;