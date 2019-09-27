import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NewGame from '../NewGame/NewGame.js';
import EditGame from '../EditGame/EditGame.js';
import './Games.scss';
import {Modal, Icon, Tooltip, Button} from 'antd';

class Games extends Component{

    state = {
        selectedGame: null,
        showDelete: false,
        showEdit: false,
        showNew: false,
    };

    selectGame = (id, directive) =>{
        if (directive){
            var game = this.props.games.find(game=>game.id === id);
            this.setState({
                selectedGame: game,
                [directive]: true
            })
        } else {
            this.setState({
                showNew: true
            })
        }
    };

    newGame = (game) =>{
        this.props.newGame(game);
        this.closeModal('showNew')
    };

    editGame = (game) => {
        this.props.editGame(game);
        this.closeModal('showEdit')
    };

    deleteGame = (game) =>{
        this.props.deleteGame(game.id);
        this.closeModal('showDelete')
    };

    closeModal = (directive) =>{
        this.setState({
            [directive]: false
        })
    };

    render(){

        var games = this.props.games.map((game, i)=>{
           return <div key={i} className="game-div">
                       <h4>{i + 1 + '. '}<Link to={`/games/${game.id}`} className="link">{game.name}</Link></h4>
                       <p>{game.questions.length} questions</p>
                       <div style={{width: 100, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                           <Link to={`/games/${game.id}`} className="link">
                               <Tooltip title="Play Now!">
                                   <Icon type="play-circle" style={{color: 'rgb(0, 168, 107)', cursor: 'pointer'}} className="icon"/>
                               </Tooltip>
                           </Link>
                           <Tooltip title="Edit Game"><Icon type="edit" onClick={()=>{this.selectGame(game.id, 'showEdit')}} style={{cursor: 'pointer'}} className="icon"/></Tooltip>
                           <Tooltip title="Delete Game"> <Icon type="delete" onClick={()=>{this.selectGame(game.id, 'showDelete')}} style={{cursor: 'pointer', color: 'red'}} className="icon"/></Tooltip>
                       </div>
               </div>
        });

        return (
            <div className="account">
                {this.state.showDelete ?
                    <Modal
                        title={this.state.selectedGame ? 'Delete ' + this.state.selectedGame.name : 'Delete'}
                        maskClosable={true}
                        onOk={()=>{this.deleteGame(this.state.selectedGame)}}
                        onCancel={()=>{this.closeModal('showDelete')}}
                        okText="Delete"
                        cancelText="Back"
                        visible={true}
                    >
                        Are you sure you want to permanently delete this game?
                    </Modal>
                    : null
                }
                {this.state.showEdit
                    ? <EditGame onEditGame={this.editGame} game={this.state.selectedGame} onCancel={()=>{this.closeModal('showEdit')}}/>
                    : null
                }
                {this.state.showNew
                    ? <NewGame onOk={this.newGame} onCancel={()=>{this.closeModal('showNew')}} games={this.props.games}/>
                    : null
                }
                <div className="header-and-new">
                    <h1>My Games</h1> <Button onClick={()=>{this.selectGame('showNew')}} className="header-and-new-button"><Icon type="plus-square"/> New Game</Button>
                </div>
                <br/>
                <div className="game-container">
                {games.length > 0
                    ? games
                    : <p>You don't have any games.</p>
                }
                </div>
            </div>
        )
    }
};

export default Games;