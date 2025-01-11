import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { GiElephant, GiSandSnake } from "react-icons/gi";
import { MdMenu, MdClose } from "react-icons/md";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [submenuActive, setSubmenuActive] = useState(null);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleSubmenu = (index) => {
    setSubmenuActive(submenuActive === index ? null : index);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        <GiElephant />
        <span>Podróże egzotyczne</span>
        <GiSandSnake />
      </h1>

      {/* Hamburger menu */}
      <div className="menu-icons" onClick={toggleMenu}>
        {menuActive ? <MdClose /> : <MdMenu />}
      </div>

      {/* Menu */}
      <ul className={`nav-menu ${menuActive ? "active" : ""}`}>
        {MenuItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => setSubmenuActive(index)}
            onMouseLeave={() => setSubmenuActive(null)}
            onClick={() => toggleSubmenu(index)}
            className={item.submenu ? "has-submenu" : ""}
          >
            <Link to={item.url} className={item.cName}>
              {item.icon}
              {item.title}
            </Link>
            {item.submenu && (
              <ul
                className={`submenu ${
                  submenuActive === index ? "submenu-active" : ""
                }`}
              >
                {item.submenu.map((subitem, subindex) => (
                  <li key={subindex}>
                    <Link to={subitem.url} className={subitem.cName}>
                      {subitem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
