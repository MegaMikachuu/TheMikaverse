import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="nav-bar">
        <h1 className="nav-title">🔮 The MikaVerse</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Cosmic Shop</Link></li>
          <li><Link to="/codex">The Codex</Link></li>
          <li><Link to="/storyhub">Storytelling HUB</Link></li>
          <li><Link to="/lore">Lore, Characters & Short Stories</Link></li>
          <li><Link to="/about">About Mikachu</Link></li>
          <li><Link to="/miko">Miko's Page</Link></li>
          <li><Link to="/adhd">ADHD Resource Hub</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>

    
    </>
  );
}
