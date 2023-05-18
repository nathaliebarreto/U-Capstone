import './UserHome.scss';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import disclogo from'../../assets/media/disc.png';


const UserHome = ({user, setUser, userAnswers, setUserAnswers}) => {

    const baseurl = process.env.REACT_APP_BASE_URL;
    const answersPath = 'answers';
    const params = useParams();

    const navigate = useNavigate();


    console.log('this is user', user)

    useEffect(() => {
        if(!user){
            const {userId} = params;
            axios.get(`${baseurl}/user/${userId}`).then((res)=>{
                console.log('THIS IS user resdata ', res.data)
                setUser(res.data)
            }).catch(err => {
                console.log('MESSAGE', err)
                navigate('/login');
            })
        } else {
            axios.get(`${baseurl}/${answersPath}/${user.id}`).then((res)=>{
                console.log('THIS IS answers RES.DATA ', res.data)
                setUserAnswers(res.data)
            })
        }
        console.log('THIS IS PARAMS',params);
    }, [user])



    return (
        <> 
        {user && (
                <div className='user'>
                    <div className='user__welcome'>
                        <p>Welcome {user.name}</p>
                    </div>
                    <div className='user__sub'>
                        <section className='user__exams'>
                            <h2 className='user__exams-title'>Self discovery tests</h2>
                            
                            <div className='user__exams-tests'>
                                <Link to='/disctest'>
                                    <div className='user__exams-tests-link'>
                                        {userAnswers ? <p>DiSC Test - take again</p> : <p>DiSC Test</p> }
                                    </div>
                                </Link>
                            </div>
                        </section>
                        {userAnswers && (
                        <section className='user__results'> 
                            <h2  className='user__results-title'> Your Journey </h2>
                            <div className='user__results-result' onClick={()=>{navigate(`/discresults/${user.id}`)}}>
                                    <p className='user__results-link'> DiSC results </p>
                            </div>
                        </section>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default UserHome;