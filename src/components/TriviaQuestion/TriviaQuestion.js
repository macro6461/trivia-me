import React from 'react';
import { FaCheckSquare, FaRegWindowClose } from "react-icons/fa";
import './TriviaQuestion.css';


const TriviaQuestion = function TriviaQuestion(props) {

    var display = "none";

    var icon = null

    var userJourneyObj = props.userJourney.find((x)=>{return x.qId === props.qId});

    var correctAnswer = props.question.qAnswers.find((x)=>{
        return x.aId === props.question.answer
    });

    console.log(correctAnswer.aContent)

    const answers = props.question.qAnswers.map((a)=>{
        var checked = userJourneyObj && userJourneyObj.answer === a.aId;
        var backgroundColor = 'white';
        if (props.showFinal && props.question.correct && (userJourneyObj &&userJourneyObj.answer === a.aId)){
            backgroundColor = '#00A86B'
        } else if (props.showFinal && !props.question.correct && (userJourneyObj &&userJourneyObj.answer === a.aId)){
            backgroundColor = '#cc3333'
        }

        return <div key={props.qId + '-' + a.aId} className="labelContainer">
            <label htmlFor={props.qId + '-' + a.aId} style={{backgroundColor, color: backgroundColor !== 'white' ? 'white' : ''}}>
            {a.aContent}
            <input id={props.qId + '-' + a.aId}
                   name={props.qId + '-' + a.aId}
                   type="radio" value={a.aId}
                   onChange={()=>{props.recordAnswers(props.qId, a.aId)}}
                   style={{display: 'none'}}
                   checked={checked}
            />
        </label>
            {checked && a.aId !== props.question.answer
                ? <i>{correctAnswer.aContent}</i>
                : null
            }
        </div>
    });

    if (props.currentQuestion === props.qId){
        display = 'block'
    }

    if (props.showFinal && props.question.correct){
        icon = <FaCheckSquare style={{color: '#00A86B'}}/>;
        display = 'block'
    } else if (props.showFinal && !props.question.correct){
        icon = <FaRegWindowClose style={{color: '#cc3333'}}/>;
        display = 'block'
    }

    return (
        <div className="questionContainer" style={{display}}>
            <h3>{props.index + 1 + '. ' + props.question.qTitle} {icon}</h3>
            {answers}
        </div>
    )

};

export default TriviaQuestion;