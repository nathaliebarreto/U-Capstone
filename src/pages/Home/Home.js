import './Home.scss';
import { Link } from 'react-router-dom';

const Home =() =>{
    return(
        <div className='home'>
            <div className='home__hero'>
                <div className='home__intro'>
                    <p>Welcome to Ü, the app that guides you on a transformative journey of self-awareness and personal growth. </p>
                </div>
                <div className='home__hook'>
                    <div className='home__hook-card'>
                        <div className='home__hook-text'> 
                            <p>Start your journey of self-discovery by exploring the depths of your personality with our Disc Test, a powerful tool that unravels the intricacies of your character, helping you gain invaluable insights into who you truly are.</p>
                        </div>
                    </div>
                    <div className='home__discexam'>
                        <Link to='/discexam'>
                            <button className='home__discexam-button'>Start</button>
                        </Link>
                    </div>
                </div>
                <div className='home__outro'>
                    <p>Begin your journey today and embrace the remarkable potential that lies within you </p>
                </div>
            </div>
            <section>
                <div>
                    <h2>Unlock the power within, embrace self-discovery, and find solace in feeling understood.</h2>

                    <h2>Let Ü be your companion as you embark on a profound voyage of self-discovery, where understanding yourself becomes the gateway to a more fulfilling and authentic life.</h2> 
                </div>
            </section>
        </div>
    )
}

export default Home;