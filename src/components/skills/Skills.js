import  './Skills.css';
import Figma from '../../img/skills/figma.svg';
import Adobexd from '../../img/skills/adobexd.svg';
import Ilustrator from '../../img/skills/ilustrator.svg';
import Html5 from '../../img/skills/html5.svg';
import Css3 from '../../img/skills/css3.svg';
import Javascript from '../../img/skills/javascript.svg';
import Bootstrap from '../../img/skills/bootstrap.svg';
import React_icon from '../../img/skills/react.svg';
import Python from '../../img/skills/python.svg';

function Skills(){
    return(
        
        <section className="skills">
            <h1>SKILLS</h1>
            <section className='skills__design'>
                <h2 className="skills__subtitle">Design <span>Skills</span></h2>
                <div className="skills__icons">
                <div className="icons">
                    <img src={Figma} className="icon" alt="Icono de Figma"></img>
                    <p className="icon-name">Figma</p>
                </div>
                
                <div className="icons">
                    <img src={Adobexd} className="icon" alt="Icono de Adobe xd"></img>
                    <p className="icon-name">Adobe Xd</p>
                </div>

                <div className="icons">
                    <img src={Ilustrator} className="icon" alt="Icono de Ilustrator"></img>
                    <p className="icon-name">Ilustrator</p>
                </div></div>

            </section>

            <section className='skills__programming'>

                <h2 className="skills__subtitle">Programming <span> Skills</span></h2>
                <div className="skills__icons">

                <div className="icons">
                    <img src={Html5} className="icon" alt="Icono de Html5"></img>
                    <p className="icon-name">Html5</p>
                </div> 

                <div className="icons">
                    <img src={Css3} className="icon" alt="Icono de Css3"></img>
                    <p className="icon-name">Css3</p>
                </div>

                <div className="icons">
                    <img src={Javascript} className="icon" alt="Icono de Javascript"></img>
                    <p className="icon-name">Javascript</p>
                </div>

                <div className="icons">
                    <img src={Bootstrap} className="icon" alt="Icono de Bootstrap"></img>
                    <p className="icon-name">Bootstrap</p>
                </div>

                <div className="icons">
                    <img src={React_icon} className="icon" alt="Icono de React"></img>
                    <p className="icon-name">React</p>
                </div>

                <div className="icons">  
                    <img src={Python} className="icon" alt="Icono de Python"></img>
                    <p className="icon-name">Python</p></div>
                </div> 

            </section>
        </section>
    );
}

export default Skills;