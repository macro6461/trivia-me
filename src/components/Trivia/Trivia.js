import React, {Component} from 'react';
import TriviaQuestion from '../TriviaQuestion/TriviaQuestion.js';
import './Trivia.css';

export default class Trivia extends Component {

    state = {
        questions: [
            {
                id: 0,
                qTitle: "When is Independence Day?",
                qAnswers: [
                    {aId: 0, aContent: "July 18th"},
                    {aId: 1, aContent: "July 19th"},
                    {aId: 2, aContent: "July 30th"},
                    {aId: 3, aContent: "July 4th"}
                ],
                answer: 3,
                correct: null
            },
            {
                id: 1,
                qTitle: "When is Christmas Day?",
                qAnswers: [
                    {aId: 0, aContent: "July 18th"},
                    {aId: 1, aContent: "July 19th"},
                    {aId: 2, aContent: "December 25th"},
                    {aId: 3, aContent: "December 31st"}
                ],
                answer: 2,
                correct: null
            },
            {
                id: 2,
                qTitle: "When is New Year's Eve?",
                qAnswers: [
                    {aId: 0, aContent: "January 1st"},
                    {aId: 1, aContent: "December 31st"},
                    {aId: 2, aContent: "February 30th"},
                    {aId: 3, aContent: "December 25th"}
                ],
                answer: 1,
                correct: null
            },
        ],
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
            {this.state.showFinalButton
                ? <div onClick={this.calcResults}>Check Results</div>
                : null
            }
            {questions}
            {this.state.showFinal
                ? <div onClick={this.startOver}>START OVER</div>
                : null
            }
        </div>);
    }

};