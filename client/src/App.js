// libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// used BrowserRouter instead of Router due to issues
// considered Switch too

// components
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import GameContainer from './containers/GameContainer'; // Play page in navbar
import GameRules from './components/GameRules';
import LeaderBoardContainer from './containers/LeaderBoardContainer';
import ErrorPage from './components/ErrorPage';

const App = () => { 
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/play" element={<GameContainer />} />
          <Route path="/game-rules" element={<GameRules />} />
          <Route path="/leaderboard" element={<LeaderBoardContainer />} />
          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </Router>
    </div>
  );
};


export default App;