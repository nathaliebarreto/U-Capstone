// import discQuestions from '../../data/discQuestions.json'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './DiSCTest.scss'
import DiscResults from '../DiscResults/DiscResults';
import { useNavigate } from 'react-router-dom';

//Bring in new user ID as params
const DiscTest = ({setDiscType}) => {

    //all consts 
    const baseURL = process.env.REACT_APP_BASE_URL;
    const route = '/discexam'
    // const [showResultsModal, setShowResultsModal] = useState(false);
    const[stopRunning, setStopRunning] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState()
    const [questions, setQuestions] = useState();
    // const [discType, setDiscType] = useState();
    let navigate = useNavigate();
    const [responses, setResponses] = useState({
        D: 0,
        I: 0,
        S: 0,
        C: 0
    });

//Axios get to get discQuestions from back end 
    useEffect(() => {
        if (!currentQuestion) {
            axios.get(baseURL+route).then((res) => {
            console.log(res.data.q1)
            setQuestions(res.data)
            setCurrentQuestion(res.data.q1)
        })
        .catch((error) => {
            console.log(error);
            })
        }
    },[])

//Calculates what the users Disc type is
    const discResult = () => {
        const d = responses.D;
        const i = responses.I;
        const s = responses.S;
        const c = responses.C;


        if (d === i && d > s && d > c) {
            return "DI/ID";
        } else if (d === s && d > i && d > c){
            return "DS/SD";
        } else if ( d === c && d > i && d > s){
            return  "DC/CD";
        } else if ( i === s && i > d && i > c){
            return "IS/SI";
        } else if ( i === c && i > d && i > s){
            return "IC/CI";
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
    const recordResponse= (e) => {
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
        console.log('current responses count ', responses)
    }, [responses])


// when all 24 quedtions have been answered the disc result function is ran
const totalQuestions = Object.values(responses);
const sum = totalQuestions.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);


// runs the disc type evaluator, sets the result as the disc type opens the modal AND stops test from running again
if ( stopRunning === false && sum === 24) {
    const yourResults = discResult(responses);

    console.log('Sum === 24 run discResult')
    
    discResult(responses)

    console.log("You are a ",discResult(responses))

    console.log('shouold be results', yourResults)

    setDiscType(yourResults);
    // setShowResultsModal(true);
    setStopRunning(true);
    navigate('/discresults')
}


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
            {/* {showResultsModal && (
                        <DiscResults result={discType}/>
                    )
                } */}
        </div>
    )
}

export default DiscTest;