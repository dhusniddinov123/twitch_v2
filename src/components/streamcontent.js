import React from 'react';
import Games from './games';
import Streamecarousel from './streamecarousel';

class Streamercontent extends React.Component {
    render() {
        return (
            <div className="stream-content">
                <Games />
                <Streamecarousel />
                <Streamecarousel />
            </div>
        )
    }
}
export default Streamercontent;