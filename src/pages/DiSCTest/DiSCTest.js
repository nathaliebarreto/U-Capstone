import { useEffect, useState } from 'react';
import axios from 'axios';
import './DiSCTest.scss'
import { useNavigate } from 'react-router-dom';


//Bring in new user ID as params
const DiscTest = ({ setDiscType, user, discType, setUserAnswers }) => {

    const baseURL = process.env.REACT_APP_BASE_URL;
    const exam = 'discexam'
    const answers = 'answers'
    const[stopRunning, setStopRunning] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState()
    const [questions, setQuestions] = useState();
    let navigate = useNavigate();
    const [responses, setResponses] = useState({
        D: 0,
        I: 0,
        S: 0,
        C: 0
    });

    const [discAnswersData, setDiscAnswersData] = useState ()

//Axios get to get discQuestions from back end 
    useEffect(() => {
        if (!currentQuestion) {
            axios.get(`${baseURL}/${exam}`).then((res) => {
            setQuestions(res.data)
            setCurrentQuestion(res.data.q1)
        })
        .catch((error) => {
            console.log(error);
            })
        }
    },[])

//Scores Disc exam
    const discScore = () => {
        const d = responses.D;
        const i = responses.I;
        const s = responses.S;
        const c = responses.C;


        if (d === i && d > s && d > c) {
            return "DI/ID";
        } else if ( d === c && d > i && d > s){
            return  "DC/CD";
        } else if ( i === s && i > d && i > c){
            return "IS/SI";
        }else if( s === c && d > s && i > s){
            return "SC/CS";
        } else if (d > i && d > s && d > c) {
            return "D";
        } else if (i > d && i > s && i > c) {
            return "I";
        } else if (s > d && s > i && s > c) {
            return "S";
        } else if (c > d && c > i && c > s) {
            return "C";
        } else {
            return "You're a perfectly balanced DISC unicorn!";
        }
    }


// event handler that pushes DISC value into state and changes question
    const recordResponse = (e) => {
        console.log('This shows the button click', e)

        const buttonType = e.target.value
        const newValue = responses[buttonType] + 1
        const newResponse = {...responses}
        const nextQuestion = `q${currentQuestion.questionNumber + 1}`
        newResponse[buttonType] = newValue
        setResponses(newResponse)
        setCurrentQuestion(questions[nextQuestion])
    }


//Showing the current responses count 
    useEffect(() => {
        console.log('current responses count', responses)
        if (sum === 24){
            setDiscAnswersData({
                score: responses,
                userId: user.id,
                personalityType: discScore(responses) 
            })
        } 
    }, [responses])


// when all 24 quedtions have been answered the disc result function is ran
    const totalQuestions = Object.values(responses);
    const sum = totalQuestions.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);


    useEffect(() => {
        if (stopRunning === false && sum === 24 && discAnswersData) {
            const yourResults = discScore(responses);
            console.log('Sum === 24 run discResult')
            discScore(responses)
            // setDiscType(yourResults);
            setStopRunning(true);
            navigate(`/discresults/${user.id}`)
        
            axios.post(`${baseURL}/${answers}/disc`, discAnswersData).then(res =>{
                console.log('DISC TEST-ANSWERS', res.data)
                setUserAnswers(res.data)
            })
        }
    },[sum, stopRunning, discAnswersData])

    return (
        <div className='disctest'>
            <div className= 'disctest__card'>
                <div className='disctest__instructions'>
                <p>Select only one word from each set that you feel describes you best right now.</p>
                </div>
                {currentQuestion && 
                    <>
                        <div className='disctest__sub-card'>
                            <div className='disctest__number'>
                                <p> x of x</p>
                            </div>
                            <div className='disctest__multiplechoice'>
                                <div className='disctest__multiplechoice-subsec'>
                                    {Object.keys(currentQuestion.answers).map(answer => {
                                        const currentAnswer = currentQuestion.answers[answer]
                                        return (
                                            
                                            <button onClick={(e)=> recordResponse(e)} key={answer} value={answer} className='disctest__question'>{currentAnswer}</button>
                                        )}
                                    )}
                                </div>
                            </div>  
                        </div>   
                    </>
                }
            </div>
        </div>
    )
}

export default DiscTest;