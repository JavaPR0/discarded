import React from "react";
import image01 from '../img/artz1.jpg';
import image02 from '../img/artz2.jpg';
import image04 from '../img/artz4.jpg';
import image05 from '../img/artz5.jpg';
import "./Maingalarry.css"

export default function Maingalarry(){

    return (
        <div className="card-container">

            <div className="card">
                <div className="card-img">
                    <img src={image01}  alt=""/>
                </div>
                <div className="card-content">
                <p> Artist: Tommy </p>
                <p>Detail: Smile in HOPE</p>
                <button>Read more</button>


                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src={image02}  alt=""/>
                </div>
                <div className="card-content">
                <p> Artist: Tommy </p>
                <p>Detail: Smile in HOPE</p>
                <button>Read more</button>


                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src={image04}  alt=""/>
                </div>
                <div className="card-content">
                <p> Artist: Tommy </p>
                <p>Detail: Smile in HOPE</p>
                <button>Read more</button>


                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src={image05}  alt=""/>
                </div>
                <div className="card-content">
                <p> Artist: Tommy </p>
                <p>Detail: Smile in HOPE</p>
                <button>Read more</button>


                </div>
            </div>     

        </div> 
    )

}