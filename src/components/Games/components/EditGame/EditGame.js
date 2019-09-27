import React, {Component} from 'react';
import {Modal} from 'antd';
import './EditGame.css';

class EditGame extends Component{

    render(){
        return (
            <Modal title="New Game"
                   visible={true}
                   onOk={this.props.onCancel}
                   onCancel={this.props.onCancel}
            >
            </Modal>
        )
    }
};

export default EditGame;
