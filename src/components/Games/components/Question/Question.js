import React from 'react';
import {Input, Button, Radio, Tooltip, Modal, Popover, Icon} from 'antd';

const Question = (props) =>{

    const {question, index, currentQ, currentA, editQ, editA, correct, updateExclude} = props;

    return (
          <div>
          <h4 style={{textAlign: 'center'}}>Answers</h4>
          <Radio.Group onChange={(e)=>{props.addFinalAnswer(question.id, e)}}>
              {question.qAnswers.map((answer, i)=>{
                  var backgroundColor = answer.aId === correct ? '#00A86B' : '';
                  var color = answer.aId === correct ? 'white' : ''
                  return <div style={{margin: 5}} onMouseEnter={(e)=>{updateExclude(true)}} onMouseLeave={(e)=>{updateExclude(false)}} >
                      <Tooltip title="Mark as correct answer." key={answer.aId} placement="left">
                          <Radio.Button value={answer.aId} style={{marginRight: 10, backgroundColor}}>

                          <Icon type="check" style={{color}}/>
                        
                      </Radio.Button>
                  </Tooltip>
                  <div style={{display: 'inline-block'}} >
                    { props.editA && props.editA.aId === answer.aId
                      ? <Input value={props.editA ? props.editA.aContent : ''}
                      autoFocus
                      onChange={(e) => {
                          props.updateEditAName(e, props.editA)
                    }}
                        onPressEnter={(e)=>{props.submitEditAnswer(e)}}
                        onBlur={!props.exclude ? (e)=>{props.setEditA(e, null)} : null}
                    />
                        : i + 1 + '. ' + answer.aContent
                    }
                    </div>
                    <div style={{display: 'inline-block'}}>
                    { props.editA && props.editA.aId === answer.aId
                        ? <Icon type="save" onClick={(e)=>{props.submitEditAnswer(e)}} style={{marginLeft: 10}}/>
                        : <Tooltip title="Edit answer."><Icon type='edit' onClick={(e)=>{props.setEditA(e, answer)}} style={{marginLeft: 10}}/></Tooltip> 
                    }
                  <Tooltip title="Remove answer.">
                  <Popover
                                title="Remove Answer"
                                trigger="click"
                                visible={props.deleteA === answer}
                                content={
                                    <div style={{margin: 10}}>
                                        <p>{`Are you sure you want to remove '${answer.aContent}'?`}</p>
                                        <Button onClick={(e)=>{props.setDeleteA(null, e)}} style={{marginRight: 10}}>No</Button>
                                        <Button type="danger" onClick={(e)=>{props.onDeleteA(e, answer)}}>Delete</Button>
                                    </div>}
                                onClick={(e)=>{e.stopPropagation()}}
                                onVisibleChange={(e)=>{props.resetA(e)}}
                            >
                    <Icon type='delete' onClick={(e)=>{props.setDeleteA(answer, e)}} style={{marginLeft: 10, cursor: 'pointer'}}/>
                    </Popover>
                  </Tooltip>
                  </div>
                  </div>
              })}
          </Radio.Group>
          {question.qAnswers.length <= 4
              ? <div> <Input value={currentA}
                             placeholder={`Answer ${question.qAnswers.length + 1}`}
                             
                             onChange={(e) => {props.updateCurrent(e, 'currentA')}}/>
                  <div style={{width: 100 + '%', textAlign: 'right'}}>
                      <Button onClick={props.addAnswer} disabled={currentA.length <= 0} style={{marginTop: 10}}>Add Answer</Button>
                  </div>
              </div>
              : null
          }
      </div>
    )
};

export default Question;