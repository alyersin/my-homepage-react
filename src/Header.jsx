import { useState } from "react";
import "./Header.css";
import ToggleNight from "./ToggleNight";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Header">
      <a href="/" className="logo">
        ERSIN
      </a>
      <ul className="ul-head">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
      {/* <div className="hamburger-icon">☰</div> */}
      <ToggleNight />
    </div>
  );
}
