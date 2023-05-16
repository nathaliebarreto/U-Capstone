import './DiscResults.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

const DiscResults = ({result}) => {

    const baseurl = process.env.REACT_APP_BASE_URL;
    const route = '/discpersonalities/';

    console.log('Should jut be a letter',result)


    const [displayDisc, setDisplayDisc] = useState()

    useEffect(()=>{

        axios.get(baseurl + route + result).then((res) =>{
            console.log('HEYYYYY DATAAAA',res.data)
            setDisplayDisc(res.data)
        }).catch(err =>{
            console.log(err)
        })
    }, [])

    return(
        <div>
            <div className='result__title'> 
                <h2> Personality type</h2>
                <p> id </p>
            </div>
            <div className='result__subsec'>
                <p className='result__sec-heading'>Personality name</p>
                <p className='result__smalltext'> intro</p>
            </div>
            <div className='result__subsec'>
                <p className='result__sec-heading'>about ID type</p>
                <p className='result__smalltext'> Summary</p>
            </div>
            <div className='result__subsec'>
                <div className='result__strengths'>
                    <p className='result__sec-heading'>strengths</p>
                    <p className='result__smalltext'> info</p>
                </div>
                <div className='result__weaknesses'>
                    <p className='result__sec-heading'>weaknesses</p>
                    <p className='result__smalltext'> info</p>
                </div>
            </div>
            <div className='result__subsec'>
                <h2>Communication</h2>
                <div>
                    <p>communicaiton info</p>
                </div>
            </div>
            <div className='result__subsec'>
                <h2>motivation</h2>
                <div>
                    <p>motivation info</p>
                </div>
                <div>
                    <h3> potential careers</h3>
                    <p> jobs</p>
                </div>
            </div>

            <div >

            </div>
            {/* <p>{displayDisc.}</p> */}
            <p>here are your disc resaults </p>
            {/* {displayDisc.map((type) => (
                <div key={type.id}>
                <p>ID: {type.id}</p>
                <p>Type: {type.type}</p>
                <p>Nickname: {type.nickname}</p>
                <p>Abbreviation: {type.abbreviation}</p>
                <p>Introduction: {type.intro}</p>
                <p>Summary: {type.summary}</p>
                <p>Strengths: {type.strengths}</p>
                <p>Weaknesses: {type.weaknesses}</p>
                <p>Communication: {type.communication}</p>
                <p>Motivation: {type.motivation}</p>
                <p>Career: {type.career}</p>
                </div>
            ))} */}
                    {displayDisc && (
                            <>
                                                    <div key={displayDisc.id}>
                                                            <p>ID: {displayDisc.id}</p>
                                                            <p>displayDisc: {displayDisc.displayDisc}</p>
                                                            <p>Nickname: {displayDisc.nickname}</p>
                                                            <p>Abbreviation: {displayDisc.abbreviation}</p>
                                                            <p>Introduction: {displayDisc.intro}</p>
                                                            <p>Summary: {displayDisc.summary}</p>
                                                            <p>Strengths: {displayDisc.strengths}</p>
                                                            <p>Weaknesses: {displayDisc.weaknesses}</p>
                                                            <p>Communication: {displayDisc.communication}</p>
                                                            <p>Motivation: {displayDisc.motivation}</p>
                                                            <p>Career: {displayDisc.career}</p>
                                                            </div>
                                                
                        </>
                    )}
        </div>
    )
}

export default DiscResults;

// {filteredVideos.map ((vid) => {
//     return (
//         <Link to={`/video/${vid.id}`} > 
//             <div className="nextvid" > 
//                 <img className="nextvid__pic" src={vid.image}  alt="next-playing-video"></img>
//                 <div className="nextvid__info"> 
//                     <p className='nextvid__info-bold'>{vid.title}</p>
//                     <p>{vid.channel}</p>
//                 </div>
//                 <br></br>
//             </div>
//         </Link>)} 
// )}