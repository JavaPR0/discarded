import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
           <img src="../img/artzlogo.jpg" alt="" />
            <h1>Logo</h1>
            </div>

            <ul>
            <li>Home</li>
            <li>Connect Wallet</li>
            <li>About Us</li>
            </ul>
        </div>
    )
}