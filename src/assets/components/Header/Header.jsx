import React from "react";
import "../Header/header.css";
import logo from "../../images/logo.png";

function Header() {
  return (
    <div className="container">
      <div className="header">
        <img className="logo" src={logo} alt="" />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>
        <div className="qwe">
          <form>
            <span className="inp">
              <input type="search" placeholder="What are you looking for?" />
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <span className="i">
              <span className="hearth">
                <i class="fa-solid fa-heart"></i>
                <b>4 </b>
              </span>
              <i class="fa-solid fa-cart-shopping"></i>
              <i class="fa-solid fa-user"></i>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Header;
