import React from 'react';
import { FaCheckSquare, FaRegWindowClose } from "react-icons/fa";
import './TriviaQuestion.css';


const TriviaQuestion = function TriviaQuestion(props) {

    const animateAndRecordAnswers = (e) =>{
        var label = e.target;
        var children = label.childNodes;

        for (var i = 0; i < children.length; i++){
            if (children[i].nodeName === 'SPAN'){
                children[i].remove()
            }
        }

        var el = label.getBoundingClientRect();

        var posX = el.left,
            posY = el.top,
            buttonWidth = el.width,
            buttonHeight =  el.height;

        var span = document.createElement("span");

        span.classList = 'ripple';

        span.id = label.id + 'span';

        label.prepend(span);

        if(buttonWidth >= buttonHeight) {
            buttonHeight = buttonWidth;
        } else {
            buttonWidth = buttonHeight;
        }

        // Get the center of the element
        var x = e.pageX - posX - buttonWidth / 2;
        var y = e.pageY - posY - buttonHeight / 2;

        var child = document.getElementById(label.id + 'span');

        child.style = `width: ${buttonWidth}px; height: ${buttonHeight}px; top: ${y}px; left: ${x}px;`

        child.classList += ' rippleEffect';

        setTimeout(()=>{
            props.recordAnswers(props.qId, parseInt(label.id.split("-")[1]))
        }, 300);
    };

    var display = "none";

    var icon = null

    var userJourneyObj = props.userJourney.find((x)=>{return x.qId === props.qId});

    var correctAnswer = props.question.qAnswers.find((x)=>{
        return x.aId === props.question.answer
    });

    var len = props.question.qAnswers.length;

    const answers = props.question.qAnswers.map((a, i)=>{
        var checked = userJourneyObj && userJourneyObj.answer === a.aId;
        var backgroundColor = 'white';
        if (props.showFinal && props.question.correct && (userJourneyObj &&userJourneyObj.answer === a.aId)){
            backgroundColor = '#00A86B'
        } else if (props.showFinal && !props.question.correct && (userJourneyObj &&userJourneyObj.answer === a.aId)){
            backgroundColor = '#cc3333'
        }
           return <div key={props.qId + '-' + a.aId} className="labelDiv">
               <label id={props.qId + '-' + a.aId} key={props.qId + '-' + a.aId} onClick={!props.showFinal ? animateAndRecordAnswers : null} className="labelContainer" style={{backgroundColor, color: backgroundColor !== 'white' ? 'white' : ''}} htmlFor={props.qId + '-' + a.aId}>
            {a.aContent}
            <input id={props.qId + '-' + a.aId}
                   name={props.qId + '-' + a.aId}
                   type="radio" value={a.aId}
                   // onChange={()=>{props.recordAnswers(props.qId, a.aId)}}
                   style={{display: 'none'}}
                   checked={checked}
            />
{/*<div className="pulseDiv"></div>*/}
        </label>
               {checked && a.aId !== props.question.answer
                   ? <div><i style={{float: 'right'}}>{correctAnswer.aContent}</i></div>
                   : null
               }
               {i === len - 1
                   ? <br/>
                   :null
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