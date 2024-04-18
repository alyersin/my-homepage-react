import { useState } from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <a href="" className="logo">
        ERSIN
      </a>
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Projects</a>
      <a href="">Services</a>
      <a href="">Contact</a>
    </div>
  );
}
