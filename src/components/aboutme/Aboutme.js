import  './Aboutme.css';
import Angelus_animate from "../../img/Sho.svg"

function Aboutme(){
    return(
        <section className="aboutme">
                <div className="bg">
                    <p className="title-developer">DEVELOPER</p>
                    
                    <section className="container-aboutme">
                        <div className="gradient">
                            <div className="triangle">
                                <div className="my-image">
                                    <img src={Angelus_animate} alt="sho"></img>
                                </div>
                            </div>
                        </div>
                        <div className="information-aboutme">
                            <h1>A little bit <span>about me...</span></h1>
                            <p>I recently started in the world of front-end web development, inspired by the desire to bring those ideas to life, give wings to that creativity and provide solutions to those problems that usually surround us.</p>
                            <p className="information__subtitle">let's make something great!</p>
                        </div>
                </section> 
                </div>
                
        </section>
    );
}

export default Aboutme;