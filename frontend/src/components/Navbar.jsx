import React from "react";
import { Search, Bell, User, SquarePlus, Bookmark } from "lucide-react";
import "../styles/navbar.css";
import fixmycityLogo from "../assets/fixmycity_logo.svg";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={fixmycityLogo} className="logo_icon" alt="logo" />
        <span className="logo-text">FixMyCity</span>
      </div>

      <div className="nav-search">
        <input type="text" placeholder="Search..." />
        <span class="navbtn nav-search-icon">
          <Search size={20} />
        </span>
      </div>

      <div className="nav-right">
        <button className="navbtn btn-addreport">
          <SquarePlus size={20} />
        </button>
        <button className="navbtn btn-bookmarks">
          <Bookmark size={20} />
        </button>
        <button className="navbtn btn-notification">
          <Bell size={20} />
        </button>
        <button className="navbtn btn-user">
          <User size={20} />
        </button>
        <button className="navbtn btn-user">
          <ThemeToggle />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
