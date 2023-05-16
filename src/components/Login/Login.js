import axios from "axios";
import { useEffect, useState } from "react";
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';


const Login = ({setUser}) => {

    const baseurl = process.env.REACT_APP_BASE_URL;
    const second = '/user';
    let navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [currentUser, setCurrentUser] = useState({
        username:'',
        password: ''
    });

    const handleLogin = (e) => {
        e.preventDefault();

        console.log('this is e', e);

        const urlParams = new URLSearchParams();

        let username =''
        let password = ''

        for (const element of e.target) {
            if( element.name === 'username' ){
                username = element.value;
            }
            if(element.name === 'password') {
                password = element.value
            }
        }


        axios.get(baseurl + second +`/${username}&${password}`).then((res)=>{
            console.log('RES.DATA', res.data)
            setCurrentUser(res)
            setUser(res.data)
            navigate('/userprofile')
        }).catch(err => {
            console.log(err)
            setErrorMessage("We couldn't log you in. Please check your email and password and try again.")
        })
        
    }


    return(
        <div className='login'>
            <div className='login__card'>
                <div className="login__header">
                    <h2>LOGIN</h2>
                </div>
                <form  onSubmit={handleLogin} className='login__form'>
                    <div className='login__form-subsec'>
                        <label> 
                            <div className='login__title'>
                                Username:
                            </div>
                            <input required className='login__input' type="text" name="username"/>
                        </label>
                    </div>
                    <div className='login__form-subsec'>
                        <label> 
                            <div className='login__title'> 
                                Password:
                            </div>
                            <input required className='login__input' type='text' name='password'/>
                        </label>

                    </div>
                    <div className="login__error-message">{errorMessage}</div>
                    <div>
                        {/* <Link to='/userprofile'> */}
                            <input type='submit' value='login' className='login__button'/>           
                        {/* </Link> */}
                    </div>
                </form>
                    <Link to='/signup'>
                        <p className='newuser'> new? lets get started </p>            
                    </Link>
            </div>
        </div>
    )
}

export default Login;
