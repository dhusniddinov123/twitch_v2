import React from 'react';

export function Stream(stream1) {
    return (
        <div className="stream" key={stream1.id}>
            <div className="stream-thumbnail">
                <span className="live">LIVE</span>
                <img src={stream1.image1} alt="Overwatch" />
                <span className="viewers">{stream1.viewers}</span>
            </div>
            <div className="stream-info">
                <div className="stream-profile-avatar">
                    <img src={stream1.image2} alt="eeveea_" />
                </div>
                <div className="stream-text">
                    <p className="stream-title">
                        {stream1.title}
                    </p>
                    <p className="stream-host">{stream1.name}</p>
                    <p className="stream-game">{stream1.game}</p>
                    <div className="game-categories">
                        <span>{stream1.info}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Stream;