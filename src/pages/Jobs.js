import { getAllJobs } from "../js/jobs";
import Header from '../components/header/Header';
import '../Projects.css'
import { Link } from "react-router-dom";


function Jobs(){
    const jobs = getAllJobs();
    return(
        <div className="container-all-jobs">
            <Header/>

            <div className="jobs">
                {jobs.map(job=> 
                    <div key={job.id} className="information-jobs__id">
                        <div className="jobs__image">{job.image}
                        
                        <div className="jobs__name">{job.nombre}</div>

                        <div className="jobs__means"> Made with:{job.recurses}</div>
                            
                        <button className="button__job"><Link to={`${job.id}`} className="link">See more</Link></button></div>
                    </div>

                    
                )}       
            </div>
        </div>
    )
}

export default Jobs;