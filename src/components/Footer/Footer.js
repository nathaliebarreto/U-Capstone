
import './Footer.scss'
import { Link } from 'react-router-dom';

const Footer = () => {

 
    return(

        <div className='footer'>
            <div className='footer__text'>
                    <Link to='/'>
                        <p className='link'>About the Disc exam</p>
                    </Link>
            </div>
        </div>
    )
}

export default Footer;

