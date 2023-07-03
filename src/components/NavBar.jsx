import React, { useEffect, useState } from "react";
import logo from "./../assets/images/logo.svg";
import "./../assets/styles/NavBar.scss";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  // PREVENT SCROLLING WHEN NAVBAR OPENS
  useEffect(() => {
    open
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [open]);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" aria-hidden="true" />
      </div>

      <ul className={`navlinks ${open ? "show-sidebar" : ""}`}>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>

      <div
        className={`mobile-menu ${open ? "open" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="mobile-menu__icon"></span>
      </div>
    </nav>
  );
};

export default NavBar;
