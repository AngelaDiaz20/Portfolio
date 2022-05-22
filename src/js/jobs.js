import Forja from '../img/projects/forja.svg';
import Cuphead from '../img/projects/cuphead.svg';
import Animalandia from '../img/projects/animalandia.svg';
import Mil_huellitas from '../img/projects/mil huellitas.svg';
import Crustaceo from '../img/projects/crustaceo.svg';
import Liquore_store from '../img/projects/liquore_store.svg';

let jobs=[
    {
        id:1,
        nombre:"Forja empresas",
        empresa:"Kuepa Tech Power",
        email:"juliana.correal@kuepa.edu.co",
        cargo:"Tutor",
        anio:"2020 - actualmente",
        telefono:"311 1234567",
        image:<img src={Animalandia} alt="Logo Colegio"></img>
    },

    {
        id:2,
        nombre:"Cuphead",
        empresa:"Servicio Nacional de Aprendiaje SENA",
        email:"gustavobeltran@misena.edu.co",
        cargo:"Instructor Teleinformática",
        anio:"2016 - actualmente",
        telefono:"311 2345678",
        image:<img src={Crustaceo} alt="Logo Colegio"></img>
    },

    {
        id:3,
        nombre:"Animalandia",
        empresa:"Servicio Nacional de Aprendiaje SENA",
        email:"gustavobeltran@misena.edu.co",
        cargo:"Instructor Teleinformática",
        anio:"2016 - actualmente",
        telefono:"311 2345678",
        image:<img src={Mil_huellitas} alt="Logo Colegio"></img>
    },

    {
        id:4,
        nombre:"Animalandia",
        empresa:"Servicio Nacional de Aprendiaje SENA",
        email:"gustavobeltran@misena.edu.co",
        cargo:"Instructor Teleinformática",
        anio:"2016 - actualmente",
        telefono:"311 2345678",
        image:<img src={Cuphead} alt="Logo Colegio"></img>
    },

    {
        id:5,
        nombre:"Animalandia",
        empresa:"Servicio Nacional de Aprendiaje SENA",
        email:"gustavobeltran@misena.edu.co",
        cargo:"Instructor Teleinformática",
        anio:"2016 - actualmente",
        telefono:"311 2345678",
        image:<img src={Forja} alt="Logo Colegio"></img>
    },


    {
        id:6,
        nombre:"Animalandia",
        empresa:"Servicio Nacional de Aprendiaje SENA",
        email:"gustavobeltran@misena.edu.co",
        cargo:"Instructor Teleinformática",
        anio:"2016 - actualmente",
        telefono:"311 2345678",
        image:<img src={Liquore_store} alt="Logo Colegio"></img>
    },


]

export function getAllJobs(){
    return jobs;
}

export function getJob(id){
    return jobs.find((job)=> job.id===id)
}