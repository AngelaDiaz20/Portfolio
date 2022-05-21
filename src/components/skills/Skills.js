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
                <img src={Figma} className="icon" alt="Icono de Figma"></img>
                <img src={Adobexd} className="icon" alt="Icono de Adobe xd"></img>
                <img src={Ilustrator} className="icon" alt="Icono de Ilustrator"></img>
            </section>
            <section className='skills__programming'>
                <h2 className="skills__subtitle">Programming <span> Skills</span></h2>
                <img src={Html5} className="icon" alt="Icono de Html5"></img>
                <img src={Css3} className="icon" alt="Icono de Css3"></img>
                <img src={Javascript} className="icon" alt="Icono de Javascript"></img>
                <img src={Bootstrap} className="icon" alt="Icono de Bootstrap"></img>
                <img src={React_icon} className="icon" alt="Icono de React"></img>
                <img src={Python} className="icon" alt="Icono de Python"></img>
            </section>
        </section>
    );
}

export default Skills;