import Forja from '../img/projects/forja.png';
import Cuphead from '../img/projects/cuphead.png';
import Animalandia from '../img/projects/animalandia.png';
import Mil_huellitas from '../img/projects/mil huellitas.png';
import Crustaceo from '../img/projects/crustaceo.png';
import Liquore_store from '../img/projects/liquore store.png';
import Halo from '../img/projects/halo.png';
import Crud from '../img/projects/CRUD clientes.png'

import Html5 from '../img/skills/html5.svg';
import Css3 from '../img/skills/css3.svg';
import Javascript from '../img/skills/javascript.svg';
import Bootstrap from '../img/skills/bootstrap.svg';
import Python from '../img/skills/python.svg';
import Workbench from '../img/skills/workbench.svg';
import Django from '../img/skills/django.svg'
import Heroku from '../img/skills/heroku.svg'
import Springboot from '../img/skills/spring-boot.svg'
import Java from '../img/skills/java.svg'

import Job_huellitas from '../img/project/huellitas.png'
import Job_forja from '../img/project/forja.png'
import Job_animalandia from '../img/project/animalandia.png'
import Job_cuphead from '../img/project/cuphead.png'
import Job_halo from '../img/project/halo.png'
import Job_crustaceo from '../img/project/crustaceo.png'

let jobs=[
    {
        id:1,
        nombre:"Animalandia",
        image:<img src={Animalandia} alt="Imagen Animalandia"></img>,
        job:<img src={Job_animalandia} alt="Imagen Animalandia"></img>,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique malesuada amet, elit urna. Tempus viverra ac pharetra urna. Maecenas enim, aliquam porta lectus laoreet a massa malesuada ullamcorper. Iaculis vehicula eu eget pharetra, euismod nibh.",
        recurses:<div className="resources">
                    <img src={Html5} className="i" alt="Icono Html5"></img>
                    <img src={Css3} className="i" alt="Icono Css3"></img>
                    <img src={Javascript} className="i" alt="Icono Javascript"></img>
                    <img src={Bootstrap} className="i" alt="Icono Bootstrap"></img>
                 </div>,
        git:"https://github.com/AngelaDiaz20/Animalandia-responsive",
        deploy:"https://angeladiaz20.github.io/Animalandia-responsive/"
        
    },

    {
        id:2,
        nombre:"Crustáceo Cascarudo",
        image:<img src={Crustaceo} alt="Imagen Crustáceo Cascarudo"></img>,
        job:<img src={Job_crustaceo} alt="Imagen Crustáceo Cascarudo"></img>,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique malesuada amet, elit urna. Tempus viverra ac pharetra urna. Maecenas enim, aliquam porta lectus laoreet a massa malesuada ullamcorper. Iaculis vehicula eu eget pharetra, euismod nibh.",
        recurses:<div className="resources">
                    <img src={Html5} className="i" alt="Icono Html5"></img>
                    <img src={Css3} className="i" alt="Icono Css3"></img>
                 </div>,
        git:"https://github.com/AngelaDiaz20/AngelaDiaz20.github.io",
        deploy:"https://angeladiaz20.github.io/"
    },

    {
        id:3,
        nombre:"Mil huellitas",
        image:<img src={Mil_huellitas} alt="Imagen Mil Huellitas"></img>,
        job:<img src={Job_huellitas} alt="Imagen Huellitas"></img>,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique malesuada amet, elit urna. Tempus viverra ac pharetra urna. Maecenas enim, aliquam porta lectus laoreet a massa malesuada ullamcorper. Iaculis vehicula eu eget pharetra, euismod nibh.",
        recurses:<div className="resources">
                    <img src={Html5} className="i" alt="Icono Html5"></img>
                    <img src={Css3} className="i" alt="Icono Css3"></img>
                    <img src={Javascript} className="i" alt="Icono Javascript"></img>
                 </div>,
        git:"https://github.com/AngelaDiaz20/Mil-Huellitas",
        deploy:"https://angeladiaz20.github.io/Mil-Huellitas/src/pages/adopcion/adopcion.html"
    },

    {
        id:4,
        nombre:"Cuphead",
        image:<img src={Cuphead} alt="Imagen Cuphead"></img>,
        job:<img src={Job_cuphead} alt="Imagen Cuphead"></img>,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique malesuada amet, elit urna. Tempus viverra ac pharetra urna. Maecenas enim, aliquam porta lectus laoreet a massa malesuada ullamcorper. Iaculis vehicula eu eget pharetra, euismod nibh.",
        recurses:<div className="resources">
                    <img src={Html5} className="i" alt="Icono Html5"></img>
                    <img src={Css3} className="i" alt="Icono Css3"></img>
                 </div>,
        git:"https://github.com/AngelaDiaz20/Cuphead",
        deploy:"https://angeladiaz20.github.io/Cuphead/"
    },

    {
        id:5,
        nombre:"Forja Empresas",
        image:<img src={Forja} alt="Imagen Forja Empresas"></img>,
        job:<img src={Job_forja} alt="Imagen Forja Empresas"></img>,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique malesuada amet, elit urna. Tempus viverra ac pharetra urna. Maecenas enim, aliquam porta lectus laoreet a massa malesuada ullamcorper. Iaculis vehicula eu eget pharetra, euismod nibh.",
        recurses:<div className="resources">
                    <img src={Html5} className="i" alt="Icono Html5"></img>
                    <img src={Css3} className="i" alt="Icono Css3"></img>
                    <img src={Javascript} className="i" alt="Icono Javascript"></img>
                 </div>,
        git:"https://github.com/AngelaDiaz20/Forja-Empresas-responsive",
        deploy:"https://angeladiaz20.github.io/Forja-Empresas-responsive" 
    },


    {
        id:6,
        nombre:"Liquore Store",
        image:<img src={Liquore_store} alt="Imagen Liquore Store"></img>,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique malesuada amet, elit urna. Tempus viverra ac pharetra urna. Maecenas enim, aliquam porta lectus laoreet a massa malesuada ullamcorper. Iaculis vehicula eu eget pharetra, euismod nibh.",
        recurses:<div className="resources">
                    <img src={Python} className="i" alt="Icono Python"></img>
                    <img src={Django} className="i" alt="Icono Django"></img>
                    <img src={Heroku} className="i" alt="Icono Heroku"></img>
                    <img src={Html5} className="i" alt="Icono Html5"></img>
                    <img src={Css3} className="i" alt="Icono Css3"></img>
                    <img src={Javascript} className="i" alt="Icono Javascript"></img>
                    <img src={Bootstrap} className="i" alt="Icono Bootstrap"></img>
                 </div>,
        git:"https://github.com/AngelaDiaz20/Liquore-Store",
        deploy:"http://localhost:3000/error/not-found"
    },

    {
        id:7,
        nombre:"Halo Infinite",
        image:<img src={Halo} alt="Imagen Halo"></img>,
        job:<img src={Job_halo} alt="Imagen Halo"></img>,
        description:"(Website is under construction) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique malesuada amet, elit urna. Tempus viverra ac pharetra urna. Maecenas enim, aliquam porta lectus laoreet a massa malesuada ullamcorper. Iaculis vehicula eu eget pharetra, euismod nibh.",
        recurses:<div className="resources">
                    <img src={Html5} className="i" alt="Icono Html5"></img>
                    <img src={Css3} className="i" alt="Icono Css3"></img>
                    <img src={Javascript} className="i" alt="Icono Javascript"></img>
                </div>,
        git:"https://github.com/AngelaDiaz20/Halo-infinite",
        deploy:"https://angeladiaz20.github.io/Halo-infinite/index.html"
    },

    {
        id:8,
        nombre:"CRUD - Clientes",
        image:<img src={Crud} alt="Imagen CRUD - Clientes"></img>,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique malesuada amet, elit urna. Tempus viverra ac pharetra urna. Maecenas enim, aliquam porta lectus laoreet a massa malesuada ullamcorper. Iaculis vehicula eu eget pharetra, euismod nibh.",
        recurses:<div className="resources">
                    <img src={Java} className="i" alt="Icono Java"></img>
                    <img src={Springboot} className="i" alt="Icono Springboot"></img>
                    <img src={Workbench} className="i" alt="Icono Workbench"></img>
                </div>,
        git:"https://github.com/AngelaDiaz20/Base-de-datos---Clientes-/tree/main/RETO%205",
        deploy:"https://angeladiaz20.github.io/Mil-Huellitas/src/pages/adopcion/adopcion.html"
    },


]

export function getAllJobs(){
    return jobs;
}

export function getJob(id){
    return jobs.find((job)=> job.id===id)
}