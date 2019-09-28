import React from 'react';
import {Input, Button, Radio, Tooltip, Modal, Popconfirm, Icon} from 'antd';

const Question = (props) =>{

    const {question, index, currentQ, currentA, editQ, editA, correct} = props;

    const updateEditA = (e, answer) =>{
        props.setEditA(e, answer)
    }

    debugger

    return (
          <div>
          <h4 style={{textAlign: 'center'}}>Answers</h4>
          <Radio.Group onChange={(e)=>{props.addFinalAnswer(question.id, e)}}>
              {question.qAnswers.map((answer, i)=>{
                  return <div>
                      <Tooltip title="Mark as correct answer." key={answer.aId} placement="left">
                          <Radio value={answer.aId} style={{marginRight: 10}}>
                        
                      </Radio>
                  </Tooltip>
                  {i + 1 + '. ' + answer.aContent}
                          <Icon type='setting' onClick={(e)=>{updateEditA(e, answer)}} style={{marginLeft: 10}}/>
                  </div>
              })}
          </Radio.Group>
          {question.qAnswers.length <= 4
              ? <div> <Input value={currentA}
                             placeholder={`Answer ${question.qAnswers.length + 1}`}
                             allowClear
                             onChange={(e) => {props.updateCurrent(e, 'currentA')}}/>
                  <div style={{width: 100 + '%', textAlign: 'right'}}>
                      <Button onClick={props.addAnswer} disabled={currentA.length <= 0} style={{marginTop: 10}}>Add Answer</Button>
                  </div>
              </div>
              : null
          }


        <Modal
            title="Edit Answer"
            style={{marginTop: 100}}
            visible={!!props.editA}
            footer={<div style={{margin: 10}}>
            <Button onClick={(e)=>{props.setEditA(null, e)}} style={{marginRight: 10}}>Cancel</Button>
            <Button type="primary" onClick={(e)=>{props.submitEditAnswer(e)}}>Edit</Button>
        </div>}
            >
            <Input value={props.editA ? props.editA.aContent : ''}
                                allowClear
                                onChange={(e) => {
                                    props.updateEditAName(e, props.editA)
                            }}/>
        </Modal>
      </div>
    )
};

export default Question;