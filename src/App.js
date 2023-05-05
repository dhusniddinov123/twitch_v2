import Sidebar from './components/sidebar';

function App() {
  return (

    <div className="container">
      <header>
        <div className="nav_bar">
          <div id="nav1">
            <div id="twtIcon"><i className="fab fa-twitch" /></div>
            <p>TWITCH</p>
            <i className="fas fa-ellipsis-h" style={{ transform: 'rotate(90deg)' }} />
          </div>
          <div id="nav2">
            <div id="search_box">
              <div id="search"><input type="search" name placeholder="Search" /></div>
              <div id="magnifier"><i className="fas fa-search" /></div>
            </div>
          </div>
          <div id="nav3">
            <div><i className="fa-regular fa-envelope" /></div>
            <button> Sign Up</button>
            <button> Sign In</button>
            <div><i className="fa-regular fa-user" /></div>
          </div>
        </div>
      </header>
      <Sidebar />



    </div>
  );
}

export default App;
