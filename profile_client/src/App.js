import './App.css';
import Navbar2 from './components/Navbar2';
import Footer from './components/Footer';

import About from './views/About';
import Contact from './views/Contact';
import Works from './views/Works';
import Home from './views/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} exact />
        </Routes>
        <Navbar2 />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/works' element={<Works />} />
        </Routes>
      </Router>

      <Footer />


    </div>
  );
}

export default App;
