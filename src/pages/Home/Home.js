import './Home.scss';
import { Link } from 'react-router-dom';
import selfDiscovery from '../../assets/media/selfDiscovery.jpeg'


const Home =() =>{
    return(
        <div className='home'>
                {/* <div className='home__intro'>
                    <p>Let us help Ü begin your transformative journey to self-awareness and personal growth </p>
                    <p>Welcome to Ü, the app that guides you on a transformative journey of self-awareness and personal growth.</p>
                </div> */}
                <div className='home__hero-title'>
                    <div>
                        <h2> Disc Personality Test</h2>
                    </div>
                    <div className='home__hero'>
                            <div className='home__hero-media'>
                                <img src={selfDiscovery} alt='self discovery' className='home__hero-media-img'></img>
                            </div>
                            <div className='home__hero-content'>
                                <div className='home__hero-content-text'> 
                                    <p>Start your journey of self-discovery by exploring the depths of your personality with our Disc Test, a powerful tool that unravels the intricacies of your character, helping you gain invaluable insights into who you truly are.</p>
                                </div>
                                <div className='home__hero-content-exam'>
                                    <Link to='/login'>
                                        <button className='home__hero-content-exam-button'> Log in to begin your journey</button>
                                    </Link>
                                </div>
                            </div>
                    </div>
                </div>
                <div  className='home__disc-info'>
                    <h3 className='home__disc-info-title'> What is Disc?</h3>
                    <p className='home__disc-info-text'> DiSC is a behavior-assessment tool that reports scores in four personality profiles</p> 
                    <ul className='home__disc-info-text-ul'>
                        <li>Dominance </li>
                        <li>Influence</li>
                        <li>Steadiness</li>
                        <li>Conscientiousness</li>
                    </ul>
                    <p className='home__disc-info-text'> these profiles give insight on how you respond to conflict, what motivates you, stresses you out, and how you solve problems.</p>
                </div>
                <div className='home__outro'>
                    <p>Begin your journey today and embrace the remarkable potential that lies within you </p>
                </div>
            
        </div>
    )
}

export default Home;

{/* <section>
                <div>
                    <h2>Unlock the power within, embrace self-discovery, and find solace in feeling understood.</h2>

                    <p>Let Ü be your companion as you embark on a profound voyage of self-discovery, where understanding yourself becomes the gateway to a more fulfilling and authentic life.</p> 
                </div>
            </section> */}