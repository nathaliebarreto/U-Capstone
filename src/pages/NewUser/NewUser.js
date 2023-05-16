import { Link } from 'react-router-dom';
import DiscTest from '../DiSCTest/DiSCTest';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './NewUser.scss';



const NewUser = ({}) => {

    // const [newUser, setNewUser] = useState({
    //     name: '',
    //     username: '',
    //     password: ''
    // })
    // const baseURL = process.env.REACT_APP_BASE_URL;
    // const route = '/users'
    // const signup = '/signup'


    // const sendNewUser= (e) => {
    //     e.preventDefault();

    //     setAllUsers(val => ({...val, [e.target.name]: e.target.value}
    //         ))

    //     axios.post(baseURL + route + signup).then(res => {
    //         console.log('this is res', res)
    //         setNewUser(res)
    //     })
        
    
    //     console.log('handleChange',  setNewUser())
    // };



    return (
        <div className='newuser'>
            <div className= 'newuser_card'>
                <form noValidate>
                    <label> 
                        Name: 
                        <input type='text' name='name' placeholder='name'/>
                    </label> 
                    <label>
                        User Name:
                        <input type='text' name='username' placeholder='username'/>
                    </label>
                    <label>
                        Password: 
                        <input type='text' name='password' placeholder='username'/>
                    </label>
                    {/* <Link to='/discexam' element={<DiscTest/>}> 
                        <button onClick={(e)=> sendNewUser(e)}> lets get started </button>
                    </Link> */}
                </form>
            </div>

        </div>
    )
}

export default NewUser;
