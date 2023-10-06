import './Navbar.css'
import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center gap-5 pt-5'>
            <img className='w-[100px] invert' src={logo} alt="" />
            <div className='flex items-center relative'>
                <input className='border bg-transparent rounded-md px-9 py-1 focus:outline-none' placeholder='Search your destination' type="text" />
                <BsSearch className='absolute text-xl mx-3' />
            </div>
            <ul className='flex flex-col md:flex-row gap-5'>
                <li><NavLink to={'/news'}>News</NavLink></li>
                <li><NavLink to={'/destination'}>Destination</NavLink></li>
                <li><NavLink to={'/blog'}>Blog</NavLink></li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>
                <li><NavLink to={'/login'}>Login</NavLink></li>
                <li><NavLink to={'/register'}>Registration</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar