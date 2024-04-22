import { useState } from "react";
import "./Header.css";
import "./BorderTest.css";
import ToggleNight from "./ToggleNight";
import NavbarComponents from "./NavbarComponents";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Header">
      <NavbarComponents logo="ERSIN" />
      <NavbarComponents text="Home" />
      <NavbarComponents text="About" />
      <NavbarComponents text="Projects" />
      <NavbarComponents text="Services" />
      <NavbarComponents text="Contact" />
      {/* <div className="hamburger-icon">☰</div> */}
      <ToggleNight />
    </div>
  );
}
