import './Home.scss';
import { Link } from 'react-router-dom';
import selfDiscovery from '../../assets/media/selfDiscovery.jpeg'


const Home =() =>{
    return(
        <div className='home'>
                <div className='home__intro'>
                    <h2 >Unlock the power within, embrace self-discovery, and find solace in feeling understood.</h2>
                </div>
                <div className='home__quote-container'> 
                    <div className='home__quote-circle'>
                        <h3 className='home__quote'>It's time Ü begin your transformative journey to self-awareness and personal growth </h3>
                    </div>
                    <div className='home__hero-content-exam'>
                        <Link to='/login'>
                            <button className='home__hero-content-exam-button'>Log in to start</button>
                        </Link>
                    </div>
                </div>
                <div className='home__hero-title'>
                    <h3 className='test'> Discover more about yourself through</h3>
                    <div className='home__hero'>
                            <div className='home__hero-media'>
                                <img src={selfDiscovery} alt='self discovery' className='home__hero-media-img'></img>
                            </div>
                            <div className='home__hero-content'>
                                <div className='home__hero-content-text'> 
                                <div>
                                    <h2> The Disc Personality Test</h2>
                                </div>
                                    <p>Discover the depths of your personality with our Disc Test, a powerful tool that unravels the intricacies of your character, helping you gain invaluable insights into who you truly are.</p>
                                </div>
                            </div>
                    </div>
                    <div  className='disc-info'>
                        <h3 className='disc-info-title'> What is Disc?</h3>
                        <p className='disc-info-text'> DiSC is a behavior-assessment tool that reports scores in four personality profiles</p> 
                        <ul className='disc-info-text-ul'>
                            <li>Dominance </li>
                            <li>Influence</li>
                            <li>Steadiness</li>
                            <li>Conscientiousness</li>
                        </ul>
                        <p className='disc-info-text'> these profiles give insight on how you respond to conflict, what motivates you, stresses you out, and how you solve problems.</p>
                    </div>
                </div>
        </div>
    )
}

export default Home;
