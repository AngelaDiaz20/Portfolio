import Error from '../img/not-found.png'
import '../Error404.css'

function Error404(){
    return(
        <div className='not-found'>
            <div className='not-found__error'>
            <div className='not-found__information'>
                <h1>Opps!</h1>
                <h2>The page you requested could <span>not be found</span></h2>
            </div>
            <img src={Error} alt="Imagen de gatito Page Not Found" className='kitty-not-found'></img></div>
        </div>
    )
}

export default Error404;