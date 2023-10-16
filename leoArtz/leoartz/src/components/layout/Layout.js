import React from "react";
import "./Layout.css"
import LeftSideBar from "../LeftSideBar";
import Maingalarry from "../Maingalarry";
import Jumbotron from "../Jumbotron";
import Footer from "./Footer";

export default function Layout() {

        return (
            <div className="layout-container">
                <div className="main">
                    <div className="left-sidebar">
                    <LeftSideBar />
                    </div>
                    <div className="main-container">
                    <Jumbotron />
                    <Maingalarry />
                    </div>
                    <div className="right-sidebar">
                    <h1>Right</h1>
                    </div>
                </div>
                <div className="footer">
                <Footer />
                </div>
            </div>
        )
}