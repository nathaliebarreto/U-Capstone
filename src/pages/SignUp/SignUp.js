import { Link } from 'react-router-dom';
// import DiscTest from '../DiSCTest/DiSCTest';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './SignUp.scss';



const NewUser = ({}) => {


    const [errorMessage, setErrorMessage] = useState('');


    const [newUser, setNewUser] = useState({
        name: '',
        username: '',
        password: ''
    })

    const baseURL = process.env.REACT_APP_BASE_URL;
    const route = 'users'
    const signup = 'signup'



const sendNewUser = (e) => {
    axios.post(`${baseURL}/${route}/${signup}`, newUser).then((res)=>{
        console.log(res)
    }).catch(err => {
            console.log(err)
            setErrorMessage("That username is taken. Please pick a new username and try again.")
        })
}

const handleSignup = (e) => {
    setNewUser(val => ({...val, [e.target.name]: e.target.value}
    ))
};




    return (
        <div className='signup'>
            <div className='signup__card'>
                <div className="signup__header">
                        <h2>Sign Up</h2>
                </div>
                <form noValidate className='signup__form'> 
                    <div className='signup__form-subsec'>
                        <label> 
                            <div className='signup__title'>
                                Name:
                            </div>
                            <input onChange={handleSignup}  className='signup__input' type="text" name="name" id="name" placeholder="Name" required/>
                        </label>
                    </div>
                    <div className='signup__form-subsec'>
                        <label> 
                            <div className='signup__title'>
                                Username:
                            </div>
                            <input onChange={handleSignup}  className='signup__input' type="text" name="username" id="username" placeholder="Username" required/>
                        </label>
                    </div>
                    <div className='signup__form-subsec'>
                        <label> 
                            <div className='signup__title'> 
                                Password:
                            </div>
                            <input onChange={handleSignup} className='signup__input' type='text' name='password' id="passowrd" placeholder="Password" required/>
                        </label>
                    </div>
                    <div className="signup__error-message">{errorMessage}</div>
                    <Link to='/login'>
                            <button onClick={()=> sendNewUser()}className='signup__button'>lets go</button>
                    </Link>
                </form>  
            </div>
        </div>
    )
}

export default NewUser;


    // const sendNewUser= (e) => {
    //     e.preventDefault();

    //     setAllUsers(val => ({...val, [e.target.name]: e.target.value}
    //         ))

    //     axios.post(`${baseURL}/${route}/${signup}`).then(res => {
    //         console.log('this is res', res)
    //         setNewUser(res)
    //     })
        
    
    //     console.log('handleChange',  setNewUser())
    // };