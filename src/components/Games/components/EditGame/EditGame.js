import React, {Component} from 'react';
import {Modal} from 'antd';
import './EditGame.css';

class EditGame extends Component{

    state = {
        game: this.props.game
    }

    render(){
        return (
            <Modal title="Edit Game"
                   visible={true}
                   onCancel={this.props.onCancel}
                   footer={footer}
            >
                Name: <Input value={this.state.name} 
                onChange={(e)=>{this.updateName(e)}} style={{width: 85 + '%'}}/>
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
                                                                                            onPressEnter={this.addQuestion} 
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

            </Modal>
        )
    }
};

export default EditGame;
