import React from "react";
import "./Header.css";
import Clock from "/home/cyf19/Desktop/CYF-Projects/cyf-hotel-react/src/Clock.js";

export default function Header() {
  return (
    <div className="Header">
      <div className="Header-logo">
        <h1>CYF Hotel</h1>
        <img
          className="App-logo"
          src="https://image.flaticon.com/icons/svg/139/139899.svg"
          alt="Hotel Logo"
        />
      </div>
      <Clock className="Clock" />
    </div>
  );
}
