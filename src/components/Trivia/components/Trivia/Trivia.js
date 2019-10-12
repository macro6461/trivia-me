import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TriviaQuestion from '../TriviaQuestion/TriviaQuestion.js';
import {Button, Icon} from 'antd';
import './Trivia.css';

export default class Trivia extends Component {

    state = {
        game: this.props.game,
        questions: [],
        currentQuestion: 0,
        index: 0,
        userJourney: [],
        showFinalButton: false,
        showFinal: false
    };

    componentDidMount = () => {
        if (this.state.game){
            var userJourney = this.state.userJourney;
            var questions = this.state.game.questions;
            var obj = {};
            obj['qId'] = this.state.game.questions[0].id;
            obj['answer'] = null
            userJourney.push(obj);
            this.setState({
                questions,
                userJourney,
                currentQuestion: obj.qId
            })
        }
    };

    recordAnswers = (qnId, aId) =>{
        var userJourney = this.state.userJourney;
        var q = userJourney.find((x)=>{
            return x.qId === qnId
        });
        var index = userJourney.indexOf(q);
        q.answer = aId;
        userJourney[index] = q;
        this.setState({
            userJourney,
            currentQuestion: this.state.currentQuestion + 1,
            index: this.state.index + 1
        }, ()=>{
            this.checkFinal()
        })
    };

    checkFinal = () =>{
        var userJourney = this.state.userJourney;
        var answers = userJourney.map((x)=>{return x.answer});
        if (answers.length === this.state.questions.length){
            this.setState({
                showFinalButton: true
            })
        } else {
            var obj = this.createUserJourneyObj(this.state.questions[this.state.index]);
            userJourney.push(obj);
            this.setState({
                userJourney
            })
        }
    };

    createUserJourneyObj = (question) =>{
      var obj = {};
      obj['qId'] = question.id;
      obj['answer'] = null;
        return obj
    };

    calcResults = () =>{

        var {questions, userJourney} = this.state;

        for (var i = 0; i < questions.length; i++){
            questions[i].correct = userJourney[i].answer === questions[i].answer
        }

        this.setState({
            questions,
            showFinalButton: false,
            showFinal: true
        })
    };

    startOver = () =>{
        var userJourney = [];
        var questions = this.state.questions.map((x)=>{
            x.correct = null;
            return x
        })
        var obj = {};
        obj['qId'] = this.state.questions[0].id;
        obj['answer'] = null
        userJourney.push(obj);
        this.setState({
            questions,
            userJourney,
            currentQuestion: obj.qId,
            index: 0,
            showFinal: false
        })
    };

    render(){

        var questions = this.state.questions.map((q, i)=>{
            return <TriviaQuestion
                key={i} qId={q.id}
                question={q}
                index={i}
                recordAnswers={this.recordAnswers}
                currentQuestion={this.state.currentQuestion}
                showFinal={this.state.showFinal}
                userJourney={this.state.userJourney}
            />
        });

        return (
            <div style={{width: 85 + '%', display: 'block', margin: 'auto'}}>
                <div className='backContainer'>
                    <Link to='/games' className="link"><Button type="primary" style={{fontSize: 15, color: 'white', backgroundColor: '#B19CD9', border: 'solid 1px white'}}><Icon type="logout" style={{transform: 'rotateY(180deg)'}}/> Back</Button></Link>
                </div>
            <div className="triviaContainer" >
                <h1>{this.state.game ? this.state.game.name : null}</h1>
            {this.state.showFinal
                ? <h3>You got {this.state.questions.filter(x=>x.correct).length} out of {this.state.questions.length} correct! </h3>
                : null
            }
            {this.state.showFinal
                ? <div onClick={this.startOver} className="startOverContainer">
                    <div className="startOver" >START OVER</div>
                </div>
                : null
            }
            {this.state.showFinalButton
                ? <div onClick={this.calcResults}>Check Results</div>
                : null
            }

            {questions.length > 0
             ? questions
             : <h1>GAME NOT FOUND</h1>
            }
                </div>
            </div>
        );
    }

};