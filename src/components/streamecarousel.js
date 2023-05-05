import React from 'react';
import Stream from './stream';
import StreamCon from './contents/streamcontent';
class Streamecarousel extends React.Component {
    render() {
        return (
            <>
                <div>
                    <div className="streams">
                        <h3>
                            <span className="title-highlight">Live Streams</span> We Think You'll
                            Like
                        </h3>
                    </div></div>
                <div className="stream-carousel">
                    {StreamCon.map(contents => (
                        <Stream
                            key={contents.id}
                            image1={contents.image1}
                            viewers={contents.viewers}
                            image2={contents.image2}
                            title={contents.title}
                            name={contents.name}
                            game={contents.game}
                            info={contents.info}
                        />
                    ))}

                </div>
            </>
        )
    }
}
export default Streamecarousel;