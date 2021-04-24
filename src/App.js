import React, {useState} from "react";
import Device from './device/device'
import data from './device/data';

function App() {

    const [sensors, setSensors] = useState(data)

    return (
        <section>
        <div>
            <Device sensors={sensors}/>
        </div>
        <div>
          <button onClick={() => setSensors([])}>Clear</button>
        </div>
        </section>
    )
}

export default App;
