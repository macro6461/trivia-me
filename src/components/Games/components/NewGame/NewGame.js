import React, {Component} from 'react';
import {Modal, Input, Button, Collapse, Radio, Tooltip, Popover, Icon} from 'antd';
import Question from '../Question/Question.js';
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
        answersQuestion: null,
        editQ: null,
        deleteQ: null,
        editA: null,
        deleteA: null,
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
        debugger
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

    // EDITING QUESTIONS

    setEditQ = (question, e) => {
        e.stopPropagation();
            this.setState({
                editQ: question,
                answersQuestion: null
            })

    };

    resetEditQ = (e) =>{
        if (e === false){
            this.setState({
                editQ: null
            })
        }
    };

    setDeleteQ = (question, e) =>{
        e.stopPropagation();
            this.setState({
                deleteQ: question,
                answersQuestion: null
            })
    };

    resetDeleteQ = (e) =>{
        if (e === false){
            this.setState({
                deleteQ: null
            })
        }
    };

    deleteQ = (e) => { 
        e.stopPropagation()
        var questions = this.state.questions.filter((x)=>{return x.id !== this.state.deleteQ.id})
        this.setState({
            questions
        }, ()=>{
            this.resetDeleteQ(e)
        })
    }

    updateEditQName = (e, question) =>{
        var obj = {};
        obj['id'] = question.id;
        obj['qTitle'] = e.target.value;
        obj['qAnswers'] = question.qAnswers;
        obj['answer'] = question.answer
        this.setState({
            editQ: obj
        })
    };

    submitEditQuestion = (e) =>{
      e.stopPropagation();
      var questions = this.state.questions
      var q = questions.find((x)=>{return x.id === this.state.editQ.id});
      var index = questions.indexOf(q)
      questions[index] = this.state.editQ
      this.setState({
          questions
      }, ()=>{
        this.closeEditQ(e)
      })
    };

    closeEditQ = (e) =>{
        e.stopPropagation();
        this.setState({
            editQ: null
        })
    };

    // EDITING ANSWERS

    setEditA = (e, answer) => {
        debugger
        e.stopPropagation();
            this.setState({
                editA: answer
            })
    };

    setDeleteA = (question, e) =>{
        e.stopPropagation();
            this.setState({
                deleteA: question
            })
    };

    resetEditA = (e) =>{
        if (e === false){
            this.setState({
                editA: null
            })
        }
    };

    resetDeleteA = (e) =>{
        if (e === false){
            this.setState({
                deleteA: null
            })
        }
    };

    updateEditAName = (e, answer) =>{
        var question = this.state.questions.find((x)=>{return x.id ===this.state.answersQuestion});
        var answer = question.qAnswers.find((x)=>{return x.aId === answer.aId});
        var index = question.qAnswers.indexOf(answer);

        var obj = {};
        obj['aId'] = answer.aId;
        obj['aContent'] = e.target.value;

        this.setState({
            editA: obj
        })
       
    };

    submitEditAnswer = (e) =>{
        e.stopPropagation();
        var questions = this.state.questions
        var q = questions.find((x)=>{return x.id === this.state.answersQuestion});
        var index = questions.indexOf(q)
        var a = q.qAnswers.find((x)=>{return x.aId === this.state.editA.aId});
        var aIndex = q.qAnswers.indexOf(a);
        q.qAnswers[aIndex] = this.state.editA;
        questions[index] = q
        debugger
        this.setState({
            questions
        }, ()=>{
          this.closeEditA(e)
        })
      };

    closeEditA = (e) =>{
        debugger
        e.stopPropagation();
        this.setState({
            editA: null
        })
    };

    editAnswer = (answer, e)=>{
        
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
            return <Panel header={i + 1 + '. ' + question.qTitle} key={question.id} extra={
                        <div>
                            <Icon type="setting" onClick={(e)=>{this.setEditQ(question, e)}} style={{marginRight: 10}}/>
                            <Popover
                                title="Delete Question"
                                trigger="click"
                                visible={this.state.deleteQ === question}
                                content={
                                    <div style={{margin: 10}}>
                                        <p>{`Are you sure you want to delete ${this.state.deleteQ ? this.state.deleteQ.qTitle : ''}?`}</p>
                                        <Button onClick={(e)=>{this.setDeleteQ(null, e)}} style={{marginRight: 10}}>No</Button>
                                        <Button type="danger" onClick={this.deleteQ}>Delete</Button>
                                    </div>}
                                onClick={(e)=>{e.stopPropagation()}}
                                onVisibleChange={(e)=>{this.resetDeleteQ(e)}}
                            >
                                <Icon type="delete" onClick={(e)=>{this.setDeleteQ(question, e)}}/>
                            </Popover>

                        </div>

                    }><Question key={question.id}
                             currentA={this.state.currentA}
                             currentQ={this.state.currentQ}
                             correct={correct}
                             updateEditQName={this.updateEditQName}
                             setEditQ={this.setEditQ}
                             addFinalAnswer={this.addFinalAnswer}
                             updateCurrent={this.updateCurrent}
                             addAnswer={this.addAnswer}
                             question={question}
                             index={i}
                             editA={this.state.editA}
                             setEditA={this.setEditA}
                             updateEditAName={this.updateEditAName}
                             submitEditAnswer={this.submitEditAnswer}
            /></Panel>
        });

        var anyEmptyQs = this.state.questions.filter((x)=>{return x.qAnswers.length <= 0});

        var needsToPickFinalAnswer = this.state.questions.filter((x)=>{
            return x.qAnswers.length > 0 && x.answer.length <= 0
        });

        var disabled = this.state.name.length <= 0 || this.state.questions.length <= 0 || anyEmptyQs.length > 0 || needsToPickFinalAnswer.length > 0;

        var text

        if (this.state.name.length <= 0){
            text = 'Please enter a name for your game.'
        } else if (this.state.questions.length <= 0){
            text = 'Please add one or more questions.'
        } else if (anyEmptyQs.length > 0){
            text = "One or more of your questions need to answers."
        } else if (needsToPickFinalAnswer.length > 0) {
            text = "One or more of your questions need to have a final answer chosen."
        } else {
            text = "Create Game"
        }

        var footer = <div>
            <Button onClick={this.props.onCancel} style={{marginRight: 15}}>Cancel</Button>
            <Tooltip title={text}><Button type="primary" onClick={this.onSubmit} disabled={disabled}>OK</Button></Tooltip>
        </div>

        return (
            <Modal title="New Game"
                   visible={true}
                   onCancel={this.props.onCancel}
                   footer={footer}
            >
                Name: <Input value={this.state.name} onChange={(e)=>{this.updateName(e)}} allowClear style={{width: 85 + '%'}}/>
                <br/>
                {this.state.name.length > 0
                    ? <div>
                        <h4 style={{textAlign: 'center', marginTop: 10}}> Questions</h4>
                        {this.state.questions.length > 0
                            ? <Collapse onChange={this.updateAnswersQuestion}
                                        accordion={true}
                                        activeKey={!this.state.editQ  && !this.state.deleteQ ? this.state.answersQuestion : null}>
                                {questions}
                            </Collapse>
                            : null
                        }
                        {this.state.questions.length <= 4
                            ? <div style={{marginTop: 10, marginBottom: 10}}><Input value={this.state.currentQ}
                                                                                            allowClear
                                                                                            placeholder={`Question ${this.state.questions.length + 1} `}
                                                                                            onChange={(e) => {
                                                                                                this.updateCurrent(e, 'currentQ')
                                                                                            }}/>
                                <div style={{width: 100 + '%', textAlign: 'right'}}>
                                    <Button onClick={this.addQuestion} disabled={this.state.currentQ.length <= 0} style={{marginTop: 10}}>Add
                                    Question</Button>
                                </div>
                            </div>
                            : null
                        }
                    </div>
                    :null
                }
                <Modal
                title="Edit Question"
                style={{marginTop: 100}}
                visible={!!this.state.editQ}
                footer={<div style={{margin: 10}}>
                <Button onClick={(e)=>{this.setEditQ(null, e)}} style={{marginRight: 10}}>Cancel</Button>
                <Button type="primary" onClick={(e)=>{this.submitEditQuestion(e)}}>Edit</Button>
            </div>}
                >
                <Input value={this.state.editQ ? this.state.editQ.qTitle : ''}
                                   allowClear
                                   onChange={(e) => {
                                       this.updateEditQName(e, this.state.editQ)
                               }}/>
                </Modal>
            </Modal>
        )
    }
};

export default NewGame;