import Forja from '../img/projects/forja.png';
import Cuphead from '../img/projects/cuphead.png';
import Animalandia from '../img/projects/animalandia.png';
import Mil_huellitas from '../img/projects/mil huellitas.png';
import Crustaceo from '../img/projects/crustaceo.png';
import Liquore_store from '../img/projects/liquore store.png';
import Halo from '../img/projects/halo.png';
import Crud from '../img/projects/CRUD clientes.png'

let jobs=[
    {
        id:1,
        nombre:"Animalandia",
        empresa:"Kuepa Tech Power",
        email:"juliana.correal@kuepa.edu.co",
        cargo:"Tutor",
        anio:"2020 - actualmente",
        telefono:"311 1234567",
        image:<img src={Animalandia} alt="Logo Colegio"></img>,
        recurses:<div className="resources"><i class="fa-brands fa-bootstrap"></i>
                    <i class="fa-brands fa-css3-alt"></i>
                    <i class="fa-brands fa-html5"></i>
                    <i class="fa-brands fa-js"></i>
                 </div>
    },

    {
        id:2,
        nombre:"Crustáceo Cascarudo",
        empresa:"Servicio Nacional de Aprendiaje SENA",
        email:"gustavobeltran@misena.edu.co",
        cargo:"Instructor Teleinformática",
        anio:"2016 - actualmente",
        telefono:"311 2345678",
        image:<img src={Crustaceo} alt="Logo Colegio"></img>
    },

    {
        id:3,
        nombre:"Mil huellitas",
        empresa:"Servicio Nacional de Aprendiaje SENA",
        email:"gustavobeltran@misena.edu.co",
        cargo:"Instructor Teleinformática",
        anio:"2016 - actualmente",
        telefono:"311 2345678",
        image:<img src={Mil_huellitas} alt="Logo Colegio"></img>
    },

    {
        id:4,
        nombre:"Cuphead",
        empresa:"Servicio Nacional de Aprendiaje SENA",
        email:"gustavobeltran@misena.edu.co",
        cargo:"Instructor Teleinformática",
        anio:"2016 - actualmente",
        telefono:"311 2345678",
        image:<img src={Cuphead} alt="Logo Colegio"></img>
    },

    {
        id:5,
        nombre:"Forja Empresas",
        empresa:"Servicio Nacional de Aprendiaje SENA",
        email:"gustavobeltran@misena.edu.co",
        cargo:"Instructor Teleinformática",
        anio:"2016 - actualmente",
        telefono:"311 2345678",
        image:<img src={Forja} alt="Logo Colegio"></img>
    },


    {
        id:6,
        nombre:"Liquore Store",
        empresa:"Servicio Nacional de Aprendiaje SENA",
        email:"gustavobeltran@misena.edu.co",
        cargo:"Instructor Teleinformática",
        anio:"2016 - actualmente",
        telefono:"311 2345678",
        image:<img src={Liquore_store} alt="Logo Colegio"></img>
    },

    {
        id:7,
        nombre:"Halo Infinite",
        empresa:"Servicio Nacional de Aprendiaje SENA",
        email:"gustavobeltran@misena.edu.co",
        cargo:"Instructor Teleinformática",
        anio:"2016 - actualmente",
        telefono:"311 2345678",
        image:<img src={Halo} alt="Logo Colegio"></img>
    },

    {
        id:8,
        nombre:"CRUD - Clientes",
        empresa:"Servicio Nacional de Aprendiaje SENA",
        email:"gustavobeltran@misena.edu.co",
        cargo:"Instructor Teleinformática",
        anio:"2016 - actualmente",
        telefono:"311 2345678",
        image:<img src={Crud} alt="Logo Colegio"></img>
    },


]

export function getAllJobs(){
    return jobs;
}

export function getJob(id){
    return jobs.find((job)=> job.id===id)
}