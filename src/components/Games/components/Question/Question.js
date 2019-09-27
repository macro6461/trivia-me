import React from 'react';
import {Input, Button, Radio, Tooltip} from 'antd';

const Question = (props) =>{

    const {question, index, currentQ, currentA, editQ, editA, correct} = props;

    return (
          <div>
          <h4 style={{textAlign: 'center'}}>Answers</h4>
          <Radio.Group onChange={(e)=>{props.addFinalAnswer(question.id, e)}}>
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
      </div>
    )
};

export default Question;