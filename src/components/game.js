import React from 'react';
export function Game(props) {
    return (
        <div className="game">
            <div className="game-cover" ket={props.id}>
                <img src={props.image} alt="Animal Crossing" />
            </div>
            <div className="game-info">
                <p className="game-title">{props.name}</p>
                <p className="game-viewership">{props.vivers}</p>
            </div>
            <div className="game-categories">
                <span>{props.categ}</span>
            </div>
        </div>
    )
}
export default Game;