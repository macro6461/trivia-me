import React from 'react';
import './../Games/Games.css';

const DeleteGame = (props) => {

    return (
        <div className="delete-modal">
            <h1>Are you sure you want to permanently delete {props.game.name}?</h1>
            <div className="modal-footer">
                <div onClick={props.onCancel}>Cancel</div>
                <div onClick={()=>{props.onDelete(props.game.id)}}>Delete</div>
            </div>
        </div>
    );
};

export default DeleteGame;