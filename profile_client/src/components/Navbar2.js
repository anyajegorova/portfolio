import './Navbar2.css';
import { NavLink } from "react-router-dom";

const Navbar2 = () => {
    return (
        <div className='navbar-container'>
            <nav className='navMenu'>
                <NavLink to='/' end >Home</NavLink>
                <NavLink to='/about' end >About</NavLink>
                <NavLink to='/works' end >Works</NavLink>
                <NavLink to='/contact' end >Contact</NavLink>
            </nav>
        </div>
    )
}

export default Navbar2;