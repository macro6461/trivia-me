import React, {Component} from 'react';
import TriviaQuestion from '../TriviaQuestion/TriviaQuestion.js';
import triviaGame from '../../triviaGame';
import './Trivia.css';

export default class Trivia extends Component {

    state = {
        questions: triviaGame.questions,
        currentQuestion: 0,
        userJourney: [],
        showFinalButton: false,
        showFinal: false
    };

    componentDidMount = () => {
        var userJourney = this.state.userJourney;
        var obj = {};
        obj['qId'] = this.state.questions[0].id;
        obj['answer'] = null
        userJourney.push(obj)
          this.setState({
              userJourney
          })
    };

    recordAnswers = (qnId, aId) =>{
        var userJourney = this.state.userJourney
        var q = userJourney.find((x)=>{
            return x.qId === qnId
        });
        var index = userJourney.indexOf(q)
        q.answer = aId;
        userJourney[index] = q
        this.setState({
            userJourney,
            currentQuestion: this.state.currentQuestion + 1
        }, ()=>{
            console.log(this.state.currentQuestion);
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
            var obj = this.createUserJourneyObj(this.state.questions[this.state.currentQuestion]);
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

    nextQuestion = () =>{

        this.setState({

        })
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
            x.correct = null
            return x
        })
        var obj = {};
        obj['qId'] = this.state.questions[0].id;
        obj['answer'] = null
        userJourney.push(obj)
        this.setState({
            questions,
            userJourney,
            currentQuestion: 0,
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

        return (<div className="triviaContainer" >
            {this.state.showFinal
                ? <h2>You got {this.state.questions.filter(x=>x.correct).length} out of {this.state.questions.length} correct! </h2>
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
            {questions}
        </div>);
    }

};