import { useParams } from "react-router-dom";
import Header from '../components/header/Header';
import '../Job.css';
import { getJob } from "../js/jobs";

function Job(){
    const params = useParams();
    const job=getJob(parseInt(params.id));
    return(
        <div>
            <Header/>

            <div className="project">
                <div className="project__image">
                    {job.job}
                </div>           
                <div className="project__information">
                    <h1 className="project__title">{job.nombre}</h1>
                    <p className="project__description">{job.description}</p>
                    <p>Made with:</p>
                    <div className="project__mean">{job.recurses}</div>
                    
                    
                    <div className="links">
                        <a href={job.git} target="_blank" rel="noreferrer" className="link-github"> Ver en github<i class="fa-brands fa-github"></i></a>
                        
                        <a href={job.deploy} target="_blank" rel="noreferrer" className="link-deploy"> Ver sitio web <i class="fa-solid fa-globe"></i></a> 
                    </div>
                </div>
                 
            </div>
        
        </div>
    );
}

export default Job;