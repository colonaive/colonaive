import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AdvisoryBoard from './pages/AdvisoryBoard';
import GetScreened from './pages/GetScreened';
import Partner from './pages/Partner';
import KnowledgeHub from './pages/KnowledgeHub';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/advisory-board" element={<AdvisoryBoard />} />
        <Route path="/get-screened" element={<GetScreened />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/knowledge-hub" element={<KnowledgeHub />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
