import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
//importing because the navbar exists in every component
import NavBar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
