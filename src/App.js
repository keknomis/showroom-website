import Device from './device/device'
function App() {
  return (
    <>
    <Device name="Load cell weight sensor"
            img={"src/assets/loadcell.png"}
            desc="This sensor uses a load cell connected to a <name>
            load cell signal converter. It is connected to a raspberry pi 0"/>
    <Device name={"Supersonic distance sensor"}
            desc="This sensor uses a supersonic distance
            measuring sensor that is used to determine the distance
            from the top of the tank to the water
              surface. It calculates the new amount of water based ona simple equation" />
    <Device name={"Raspberry Pi powered touch screen user interface panel"}
            desc="A touchscreen dashboard that can be mounted on a variety of different surfaces.
            It is meant to work as hub that collects all the data the sensors emmit therefore
            it must be in the vacinity of the devices."/>
    </>
  )
}

export default App;
