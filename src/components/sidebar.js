import React from 'react';
import Streamerbar from './streamerbar';
import Streamercontent from './streamcontent';
import SidebarContent from './contents/sidebarcontent';
class Sidebar extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="streamer-bar">
          <div className="followed-channels">
          <p style={{fontSize: '15px', marginLeft: '10px'}}>RECOMMENDED CHANNELS</p>
            {SidebarContent.map(contents => (
              <Streamerbar
                key={contents.id}
                image={contents.image}
                name={contents.name}
                viewer={contents.viewer}
              />
            ))}

          </div>
        </div>
        <Streamercontent />
      </div>
    )
  }
}
export default Sidebar;