

let jobs=[
    {
        id:1,
        nombre:"Juliana Correal",
        empresa:"Kuepa Tech Power",
        email:"juliana.correal@kuepa.edu.co",
        cargo:"Tutor",
        anio:"2020 - actualmente",
        telefono:"311 1234567"
    },

    {
        id:2,
        nombre:"Gustavo Beltrán",
        empresa:"Servicio Nacional de Aprendiaje SENA",
        email:"gustavobeltran@misena.edu.co",
        cargo:"Instructor Teleinformática",
        anio:"2016 - actualmente",
        telefono:"311 2345678"
    }

]

export function getAllJobs(){
    return jobs;
}

export function getJob(id){
    return jobs.find((job)=> job.id===id)
}