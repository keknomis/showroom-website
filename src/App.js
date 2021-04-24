import React, {useState} from "react";
import Device from './device/device'
import data from './device/data';

function App() {

  const [sensors, setSensors]=useState(data)

  return (
      <div>
    <Device sensors={sensors} />
    <button onClick={()=>setSensors([])}>Clear </button>
    </div>
  )
}

export default App;
