import React, {Component} from 'react';
import './style.css';

class NotFound extends Component{

    render(){
        var errorNum = this.props.match.path.split('/')[1];
        var errorMessage
        if (errorNum === '403'){
            errorMessage = 'Not Authorized'
        }
        return (
            <div className='notFound'>
                <div>
                    <h1>{errorNum}</h1>
                    <h1>{errorMessage}</h1>


                </div>
            </div>
        )
    }
};


export default NotFound;