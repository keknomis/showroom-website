import App from "../App"
import './device.css'

function Device({sensors}) {
    return (
        <div>
            {sensors.map((sensor) => {
                const {id, name, img, desc} = sensor;
                return <article key={id} className='box'>
                    <h1> {name}</h1>
                    <img src={img}className='img'/>
                    <p>{desc}</p>
                    <button> Read more</button>
                    <button> Goto sensor page</button>
                </article>
            })}
        </div>
    )
}

export default Device