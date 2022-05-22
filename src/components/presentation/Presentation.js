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
                        <div className="social-media">
                            Find me on:
                            <div className='social-media__icons'>
                                <a href="figma.com/@AngelusDiaz" target="_blank" rel="noreferrer" className="link-figma"><i class="fa-brands fa-figma"></i></a>
                                
                                <a href="https://github.com/AngelaDiaz20" target="_blank" rel="noreferrer" className="link-github"><i class="fa-brands fa-github-square"></i></a>
                                
                                <a href="https://codepen.io/AngelusDiaz" target="_blank" rel="noreferrer" className="link-codepen"><i class="fa-brands fa-codepen"></i></a>
                                
                                <a href="https://www.behance.net/angeladiaz19" target="_blank" rel="noreferrer" className="link-behance"><i class="fa-brands fa-behance-square"></i></a>
                                
                                <a href="#" target="_blank" rel="noreferrer" className="link-linkedin"><i class="fa-brands fa-linkedin"></i></a></div>
                        </div>
                    </div>
                </div>
        </main>
    );
} 

export default Navbar;