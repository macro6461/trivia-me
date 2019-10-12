import React, {Component} from 'react';
import './style.css';
import {Icon} from 'antd';

class NotFound extends Component{

    render(){
        var errorNum = this.props.match.path ? this.props.match.path.split('/')[1] : null
        var errorMessage
        if (errorNum === '403'){
            errorMessage = 'Not Authorized'
        } else if (errorNum === '404'){
            errorMessage = 'Not Found'
        } else {
            errorMessage = 'There was an error processing your request.'
        }
        return (
            <div className='notFound'>
                <div>
                    <h1><Icon type="frown" /></h1>
                    <h1>{errorNum}</h1>
                    <h1>{errorMessage}</h1>

                </div>
            </div>
        )
    }
};


export default NotFound;