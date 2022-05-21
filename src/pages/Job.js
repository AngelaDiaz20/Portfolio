import { useParams } from "react-router-dom";
import Header from '../components/header/Header';
import { getJob } from "../js/jobs";

function Job(){
    const params = useParams();
    const job=getJob(parseInt(params.id));
    return(
        <div>
            <Header/>
            <h1> Detalle del Job</h1>

            <div>
                <p><strong>Cargo</strong> {job.cargo}</p>
                <p><strong>Duración</strong> {job.anio}</p>
                <p><strong>Jefe inmediato</strong> {job.nombre}</p>
                <p><strong>Email</strong> {job.email}</p>
                <p><strong>Teléfono</strong> {job.telefono}</p>
            </div>
        
        </div>
    )
}

export default Job;