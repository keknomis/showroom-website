// import App from "../App"
import './device.css'
function Device(props){
    return (
        <div>
            <section className='box'>
            <h1>{props.name}</h1>
            <img src={props.img}></img>
            <h4>Sensor description {}</h4>
            <p>{props.desc}
            </p>
            <button>Read more</button>
            <button>Goto sensor page</button>
            </section>
        </div>
    )
}

export default Device