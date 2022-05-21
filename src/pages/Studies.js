import Header from '../components/header/Header';
import { getAllStudies } from "../js/studies";
import '../Jobs.css'
import { Link } from "react-router-dom";

function Studies(){
    const studies = getAllStudies(); 
    return (
        <div className="container-all">
            <Header/>

            <div className="studies">
                {studies.map(study=> 
                    <div key={study.id} className="information studies__id"><br/>
                        <div className="information_container">
                            <div className="info study__institution">{study.institucion} </div>
                            <div className="info study__title">{study.titulo}</div>
                        </div>
                        <div className="logo">
                            {study.logo}
                        </div>
                        <Link to={`${study.id}`} className="enlace">Ver más</Link>
                    </div> 
                )}
                
            </div>
        </div>
    )
}

export default Studies;