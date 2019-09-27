import React, {Component} from 'react';
import {Modal, Input, Button, Collapse, Radio, Tooltip} from 'antd';
import './NewGame.css';

const { Panel } = Collapse;

class NewGame extends Component{

    state = {
        name: '',
        timed: false,
        questions: [],
        correctAnswer: '',
        currentQ: '',
        currentA: '',
        answersQuestion: null
    };

    updateCurrent = (x, directive) =>{
        this.setState({
            [directive]: x.target.value
        })
    };

    addQuestion = () =>{
        var obj = {};
        obj['id'] = this.state.questions.length + 1;
        obj['qTitle'] = this.state.currentQ;
        obj['qAnswers'] = [];
        obj['answer'] = '';
        var questions = this.state.questions;
        questions.push(obj);
        this.setState({
            questions,
            currentQ: ''
        });
    };

    addAnswer = () =>{
        var obj = {};

        var questions = this.state.questions;
        var question = questions.find((x)=>{return x.id === this.state.answersQuestion});
        obj['aId'] = question.qAnswers.length + 1;
        obj['aContent'] = this.state.currentA;
        var index = questions.indexOf(question);

        question.qAnswers.push(obj);
        questions[index] = question;

        this.setState({
            questions,
            currentA: ''
        });
    };

    addFinalAnswer = (x, c) =>{
        var questions = this.state.questions;
        var question = questions.find((q)=>{return q.id === x});
        var index = questions.indexOf(question);
        question.answer = c.target.value;
        questions[index] = question
        this.setState({
            questions
        })
    };

    updateName = (v) =>{
        this.setState({
            name: v.target.value
        })
    };

    updateAnswersQuestion = (x) =>{
        var answersQuestion = x ? parseInt(x) : null;
        this.setState({
            answersQuestion
        })
    };

    onSubmit = () =>{
        var game = {};
        game['id'] = this.props.games.length + 1;
        game['name'] = this.state.name;
        game['timed'] = this.state.timed;
        game['correct']= null;
        game['questions'] = this.state.questions;
        this.props.onOk(game);
        this.props.onCancel();
    };

    render(){

        var questions = this.state.questions.map((question, i)=>{
            var correct = question.answer;
            return <Panel header={i + 1 + '. ' + question.qTitle} key={question.id} >
                <h4 style={{textAlign: 'center'}}>Answers</h4>
                    <Radio.Group onChange={(e)=>{this.addFinalAnswer(question.id, e)}}>
                    {question.qAnswers.map((answer, i)=>{
                        var backgroundColor = answer.aId === correct ? '#B19CD9' : '';
                        var color = answer.aId === correct ? 'white' : '';
                       return <Tooltip title="Mark as correct answer." key={answer.aId}>
                           <Radio.Button value={answer.aId} style={{backgroundColor, color}}>
                           {i + 1 + '. ' + answer.aContent}
                       </Radio.Button>
                       </Tooltip>
                    })}
                    </Radio.Group>
                <br/>
                {question.qAnswers.length <= 4
                    ? <div>Answer {question.qAnswers.length + 1 + '. '} <Input value={this.state.currentA} allowClear onChange={(e) => {
                    this.updateCurrent(e, 'currentA')
                }}/>
                        <Button onClick={this.addAnswer} disabled={this.state.currentA.length <= 0}>Add Answer</Button></div>
                    : null
                }
                </Panel>
        });

        var anyEmptyQs = this.state.questions.filter((x)=>{return x.qAnswers.length <= 0});

        var disabled = this.state.name.length <= 0 || this.state.questions.length <= 0 || anyEmptyQs.length > 0

        return (
            <Modal title="New Game"
                   visible={true}
                   onOk={this.onSubmit}
                   onCancel={this.props.onCancel}
                   okButtonProps={{disabled}}
            >
                Name: <Input value={this.state.name} onChange={(value)=>{this.updateName(value)}} allowClear/>
                <br/>
                {this.state.name.length > 0
                    ? <div>
                        <h4 style={{textAlign: 'center', marginTop: 10}}> Questions</h4>
                        <Collapse onChange={this.updateAnswersQuestion} accordion={true}>
                        {questions}
                        </Collapse>
                        {this.state.questions.length <= 4
                            ? <div style={{marginTop: 10, marginBottom: 10}}><p>Question {this.state.questions.length + 1 + '. '}</p> <Input value={this.state.currentQ}
                                                                                            allowClear
                                                                                            onChange={(e) => {
                                                                                                this.updateCurrent(e, 'currentQ')
                                                                                            }}/>
                                <Button onClick={this.addQuestion} disabled={this.state.currentQ.length <= 0} style={{marginTop: 10}}>Add
                                    Question</Button></div>
                            : null
                        }
                    </div>
                    :null
                }
            </Modal>
        )
    }
};

export default NewGame;