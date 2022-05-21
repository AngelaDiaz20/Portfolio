import  './Designresponsive.css';
import Phone_responsive from '../../img/phone.png';
import Tablet_responsive from '../../img/tablet.png';



function Designresponsive(){
    return(
        <section className="container-devices-responsive">
            <h1>Design responsive</h1>
            <div className="devices-responsive">
                <div className="devices">
                    <img src={Phone_responsive} className="Phone_responsive" alt="Imagen de celular"></img>
                    <img src={Tablet_responsive} className="Tablet_responsive" alt="Imagen de tablet"></img>
                </div>
            </div>
        </section>
    ); 
} 

export default Designresponsive;