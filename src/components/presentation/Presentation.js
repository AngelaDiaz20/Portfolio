import  './Presentation.css';
import Programming from "../../img/undraw_programming.svg"

function Navbar(){
    return(
        <main>
            <div className="title">
                <h1 className="title-presentation">PORT <span>FOLIO</span> </h1></div>
                <div className="presentation">
            
                    <div className="presentation__image">
                        <img src={Programming} alt="Imagen de programadora"></img>
                    </div>
                
                    <div className="presentation__text">
                        <h2>Hi!,</h2>
                        <h1 className="name">I'm Angela Díaz</h1>
                        <h3>Developer web</h3>
                    </div>
                </div>
        </main>
    );
}

export default Navbar;