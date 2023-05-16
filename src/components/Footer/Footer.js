import Insta from '../../assets/Icons/insta.png';
import Tiktok from '../../assets/Icons/tiktok.png';
import Twitter from '../../assets/Icons/twitter.png';
import './Footer.scss'


const Footer = () => {
    return(

        <div className='footer'>
            <div className='footer__text'>
                    <p>Constact us</p>
                    <p>About the Disc exam</p>
                    <p>Terms and Conditions</p>
            </div>
            {/* <div className='footer__sociallink'>
                <img src={Insta} alt='insagram link' className='footer__sociallink-insta'></img>
                <img src={Tiktok} alt='tiktok link' className='footer__sociallink-tiktok'></img>
                <img src={Twitter} alt='twitter link' className='footer__sociallink-twitter'></img>
            </div> */}
        </div>
    )
}

export default Footer;