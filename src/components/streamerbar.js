import React from 'react';

export function Streamerbar(sidebar) {
    return (
        <div className="followed-channel" key={sidebar.id}>
            <div className="profile-image">
                <img src={sidebar.image} alt="A_Seagull" />
            </div>
            <div className="profile-info">
                <p className="profile-username">{sidebar.name}</p>
                <p className="profile-game-title">{sidebar.game}</p>
            </div>
            <div className="profile-viewers">
                <div className="live-icon" />
                <div className="viewer-count">{sidebar.viewer}</div>
            </div>
        </div>)
}

export default Streamerbar;