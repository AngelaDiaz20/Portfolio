import { getAllJobs } from "../js/jobs";
import Header from '../components/header/Header';
import '../Jobs.css'
import { Link } from "react-router-dom";


function Jobs(){
    const jobs = getAllJobs();
    return(
        <div className="container-all">
            <Header/>

            <div className="jobs">
                {jobs.map(job=> 
                    <div key={job.id} className="information jobs__id">
                        <div className="jobs__company">{job.empresa}</div>
                        <div className="jobs__position">{job.cargo}</div>

                        <Link to={`${job.id}`}>Ver más</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Jobs;