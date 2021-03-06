import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import GameModal from '../GameModal/GameModal.js';
import './Games.scss';
import {Modal, Icon, Tooltip, Button, Card} from 'antd';

class Games extends Component{

    state = {
        selectedGame: null,
        showDelete: false,
        showEdit: false,
        showNew: false
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

    componentDidMount = () =>{
        this.props.getGames();
    }

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
            showEdit: false,
            showDelete: false,
            showNew: false,
            selectedGame: null
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
                <Card style={{maxWidth: 1000, display: 'block', margin: 'auto'}}>
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
                {this.state.showEdit || this.state.showNew
                 ? <GameModal onEditGame={this.editGame} 
                                game={this.state.selectedGame} 
                                onCancel={this.state.showEdit ? ()=>{this.closeModal('showEdit')} : ()=>{this.closeModal('showNew')}}
                                gameType={this.state.showEdit ? 'Edit Game' : 'New Game'}
                                games={this.props.games}
                                onOk={this.state.showEdit ? this.editGame : this.newGame }
                                />
                 : null
                }

                {/* {this.state.showEdit
                    ? <EditGame onEditGame={this.editGame} game={this.state.selectedGame} onCancel={()=>{this.closeModal('showEdit')}}/>
                    : null
                }*/}
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
                </Card>
            </div>
        )
    }
};

export default Games;