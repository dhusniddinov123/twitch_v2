import React from 'react';
import Game from './game';
import Content from './contents/content';
class Games extends React.Component {
    render() {
        return (
            <div className="games">
                <h3>Popular <span className="title-highlight">Games</span></h3>
                <div className="games-carousel">
                    {Content.map(contents => (
                        <Game
                            key={contents.id}
                            image={contents.image}
                            name={contents.name}
                            vivers={contents.vivers}
                            categ={contents.categ}
                        />
                    ))}
                </div>
                <div className="divider">
                    <div className="bar" />
                    <div className="show-more">
                        Show more <i className="fa fa-chevron-down" />
                    </div>
                    <div className="bar" />
                </div>
            </div>
        )
    }
}
export default Games;