import React from 'react';
import './style.css';
import {Icon} from 'antd';

class DeletePage extends React.Component{

    state = {
      display: 'none'
    };

    componentDidMount = () =>{
        setTimeout(()=>{
            this.props.toDelete()
        }, 5000);

        setTimeout(()=>{
           this.setState({
               display: 'block'
           })
        }, 2000);
    };

    render(){
        return (
            <div className='notFound'>
                <div>
                    <h1><Icon type="frown" /></h1>
                    <h1>We're sorry to see you leave.</h1>
                    <h1>You account has been successfully deleted.</h1>
                    <Icon type='loading'
                          style={{
                              display: this.state.display,
                              color: '#B19CD9',
                              fontSize: 30
                          }}/>
                </div>
            </div>
        )
    }
};


export default DeletePage;