import Colegio from '../img/studies/Dep el Tequendama.svg';
import Sena from '../img/studies/Sena.svg';
import U_distrital from '../img/studies/U Distrital.svg';
import MisionTIC from '../img/studies/Mision TIC.svg'
import Kuepa from '../img/studies/Kuepa.svg'

let studies=[
    {
        id:1,
        institucion:"Colegio Departamental El Tequendama",
        fecha:"2011-2016",
        titulo:"Bachiller académico",
        logo:<img src={Colegio} alt="Logo Colegio"></img>
    },

    {
        id:2,
        institucion:"Servicio Nacional de Aprendizaje SENA",
        fecha:"2015-2016",
        titulo:"Técnico en sistemas",
        logo:<img src={Sena} alt="Logo SENA"></img>
    },

    {
        id:3,
        institucion:"Universidad Distrital Francisco José de Caldas",
        fecha:"2017-2019",
        titulo:"Ingeniería Industrial",
        logo:<img src={U_distrital} alt="Logo Universidad Distrital"></img>
    },

    {
        id:4,
        institucion:"MisionTIC2022 - Universidad Nacional de Colombia",
        fecha:"2021-2021",
        titulo:"Certificado con énfasis en desarrollo de aplicaciones web",
        logo:<img src={MisionTIC} alt="Logo Mision TIC"></img>
    },

    {
        id:5,
        institucion:"Kuepa edutech",
        fecha:"2022",
        titulo:"Técnico en procesamiento de datos",
        logo:<img src={Kuepa} alt="Logo Kuepa"></img>
    },

]


export function getAllStudies(){
    return studies;
}

export function getStudie(id){
    return studies.find((study)=> study.id===id)
}