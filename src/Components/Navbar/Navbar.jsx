import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    return (
        <div className='flex items-center justify-center gap-5 pt-5'>
            <img className='w-[100px] invert' src={logo} alt="" />
            <input className='border bg-transparent rounded-md px-3 focus:outline-none' placeholder='Search your destination' type="text" />
            <ul className='flex gap-5'>
                <li><Link to={'/news'}>News</Link></li>
                <li><Link to={'/destination'}>Destination</Link></li>
                <li><Link to={'/blog'}>Blog</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
                <li><Link to={'/register'}>Registration</Link></li>
            </ul>
        </div>
    )
}

export default Navbar