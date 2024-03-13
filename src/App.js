import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Quiz from './components/Quiz';
function App() {
  return (
      <Router>
          <div className="App">
              <header className="App-header">
                  <h1>Quizzical</h1>
                  <p>Test your knowledge</p>
                  <Link to="/Quiz"><button>Start Quiz</button></Link>
              </header>

              {/* Define Routes */}
              <Routes>
                  <Route path="/Quiz" element={<Quiz/>} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
