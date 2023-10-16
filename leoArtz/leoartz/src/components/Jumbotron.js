import React from "react";
import "./Jumbotron.css";
import img6 from "../img/artz6.jpg"

export default function Jumbotron() {
    return (
        <div className="jumbotron">
        <div className="jumbotron-background">
            <img src={img6} alt=""/>
        </div>
        <div className="jumbotron-content" >
        <h1>Welcome to LeoArtz</h1>
            <p>Our platform will empower artists, creators, and innovators and share their work with the world. 
            Our platform will use energy-efficient blockchain solutions, ensuring a positive footprint and responsible creation that portrays the beauty of Africa and its Culture as a means of lifestyle and sustainability towards peace and human development. 
            </p>

            <p>
            Like our page and get in Touch: We want to hear from you! If youre an artist, collector, or just an NFT enthusiast, drop us a DM or tag us with your thoughts and questions. We are all ears.</p>
         </div>
         <div className="overlay"></div>
        </div>
    )
}