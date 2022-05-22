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
                            <div className="information__job">
                            <div className="jobs__name">{job.nombre}</div>
                            <Link to={`${job.id}`}>See more</Link></div>
                        </div>
                    </div>
                )}       
            </div>
        </div>
    )
}

export default Jobs;