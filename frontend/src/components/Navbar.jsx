import React from "react";
import { useEffect, useState } from "react";
import { Search, Bell, User, SquarePlus, Bookmark } from "lucide-react";
import "../styles/navbar.css";
import darklogo from "../assets/fmc_darkmode_logo.svg";
import lightlogo from "../assets/fmc_lightmode_logo.svg";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains("dark"));
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/homepage" className="logo-link">
          <img
            src={isDark ? darklogo : lightlogo}
            alt="FixMyCity Logo"
            className="logo_icon"
          />
          <span className="logo-text">FixMyCity</span>
        </Link>
      </div>

      <div className="nav-search">
        <input type="text" placeholder="Search..." />
        <span class=" nav-search-icon">
          <Search size={20} />
        </span>
      </div>

      <div className="nav-right">
        <button className="navbtn btn-addreport" data-title="Add report">
          <SquarePlus size={20} />
        </button>
        <button className="navbtn btn-bookmarks" data-title="View Bookmarks">
          <Bookmark size={20} />
        </button>
        <button
          className="navbtn btn-notification"
          data-title="View Notifications"
        >
          <Bell size={20} />
        </button>
        <button className="navbtn btn-user" data-title="View Profile">
          <User size={20} />
        </button>

        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
