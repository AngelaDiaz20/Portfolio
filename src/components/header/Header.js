import './Header.css';
import { Link } from 'react-router-dom';
import Angelus from './img/logo.svg';

function Header() {
    return (
        <header>
        <nav>
            <Link to="/home" className='item'>
            <img src={Angelus} alt="Logo" className="angelus"></img></Link>
            <input type="checkbox" id="check"></input>
            <label for="check" class="checkbtn">
            <i class="fa-solid fa-bars-staggered"></i>
            </label>
            <ul>
                <li>
                    <Link to="/home" className='item'>Home
                    <i className="fa-brands fa-fort-awesome"></i></Link>
                </li>

                <li>
                    <Link to="/about-me" className='item'>About me
                    <i class="fa-solid fa-address-card"></i></Link>
                </li>

                <li>
                    <Link to="/studies" className='item'>Studies
                    <i class="fa-solid fa-graduation-cap"></i></Link>
                </li>
                
                <li>
                    <Link to="/jobs" className='item'>Jobs
                    <i class="fa-solid fa-laptop-code"></i></Link>
                </li>

                <li>
                    <Link to="/skills" className='item'>Skills
                    <i class="fa-solid fa-code"></i></Link>
                </li>
            </ul>
        </nav>
    </header>

    );
}

export default Header;