import './Header.scss';
import mainlogo from '../../assets/Logo/logo-yellow-trans.png'
import logo from '../../assets/Logo/logo.png';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';


const Header = () => {
    return (
        <div className='navbar'> 
            <div className='navbar__media'>
                <Link to ='/'> 
                    <img src={logo} alt='Ü logo' className='navbar__logo'></img>
                </Link>
            </div>
            <div className='navbar__login'>
                <Link to='login'>
                    <p>Login</p>
                </Link>                
            </div>
        </div>
    )
}

export default Header;