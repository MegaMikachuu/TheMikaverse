import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Stars from './components/Stars.jsx';
import Shop from  './pages/Shop.jsx'
import Codex from './pages/Codex.jsx'
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Stars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/codex" element={<Codex />} />



        {/*       <Route path="/storyhub" element={<Storyhub />} />
                  <Route path="/lore" element={<Lore />} />
                  <Route path="/miko" element={<Miko />} />
                  <Route path="/adhd" element={<ADHD />} />
                  <Route path="/contact" element={<Contact />} />
      */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
