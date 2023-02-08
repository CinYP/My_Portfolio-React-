import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
