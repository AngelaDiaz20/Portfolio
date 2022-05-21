import { Link } from 'react-router-dom';
import  './Navbar.css';

function Navbar(){
    return(
        <nav>
            <Link to="/home" className='item'>Home
                <i className="fa-brands fa-fort-awesome"></i>
            </Link>

            <Link to="/about-me" className='item'>About me
                <i class="fa-solid fa-address-card"></i>
            </Link>

            <Link to="/studies" className='item'>Estudies
                <i class="fa-solid fa-graduation-cap"></i>
            </Link>

            <Link to="/jobs" className='item'>Jobs
                <i class="fa-solid fa-laptop-code"></i>
            </Link>

            <Link to="/skills" className='item'>Skills
                <i class="fa-solid fa-code"></i>
            </Link>
        </nav>
    );
}

export default Navbar;