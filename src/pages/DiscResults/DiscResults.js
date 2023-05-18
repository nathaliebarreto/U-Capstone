import './DiscResults.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DiscResults = ({discType, userAnswers, setUserAnswers, user, setUser}) => {

    const baseurl = process.env.REACT_APP_BASE_URL;
    const route = '/discpersonalities/';
    const params = useParams();
    const navigate = useNavigate();
    const answersPath = 'answers';


    const [displayDisc, setDisplayDisc] = useState()

    useEffect(() => {
        if (userAnswers) {
            axios.get(baseurl + route + userAnswers.personalityType).then((res) =>{
                console.log('Disc result res.data',res.data)
                setDisplayDisc(res.data)
            }).catch(err =>{
                console.log(err)
            })
        }
    }, [userAnswers])


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




    return(
        <div className='result'>
            {displayDisc && (
                <>
                <div className='result__intro'> 
                    <div className='result__intro-sub'>
                        <div className='result__id-section'>
                            <h2 className='result__id'>{displayDisc.id}</h2>
                        </div>
                        <h2 className='result__name'> {displayDisc.type} </h2>
                    </div>
                    <p className='result__info'> {displayDisc.intro}</p>
                </div>
                <div className='result__indepth'>
                    <p className='result__summary'> {displayDisc.summary}</p>
                    <div className='result__procon'>
                        <div className='result__strengths'>
                            <p className='result__strengths-title'>Strengths</p>
                            <p className='result__strengths-info'> {displayDisc.strengths}</p>
                        </div>
                        <div className='result__weaknesses'>
                            <p className='result__weaknesses-title'>Weaknesses</p>
                            <p className='result__weaknesses-info'> {displayDisc.weaknesses}</p>
                        </div>
                    </div>
                </div>
                <div className='result__communcation'>
                    <h3 className='result__title'>COMMUNICATION</h3>
                    <div className='result__communcation-info'>
                        <p>{displayDisc.communication}</p>
                    </div>
                </div>
                <div className='result__motivation'>
                    <h3 className='result__title'>MOTIVATION</h3>
                    <p className='result__motivation-info'>{displayDisc.motivation}</p>
                </div>
                <div className='result__career'>
                    <h3 className='result__title'> CARRERS</h3>
                    <p className='result__career-info'> {displayDisc.career}</p>
                </div>
                </>
            )}
        </div>
    )
}

export default DiscResults;
