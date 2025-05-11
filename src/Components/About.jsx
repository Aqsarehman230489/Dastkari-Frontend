import React from "react";
import "../assets/css/About.css";
import pkmap from '../assets/images/pk-map.jpg';

function About() {
    return (
        <div className="container my-5">
            <div className="card shadow-sm border-0 p-3">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2>Welcome to <span className="highlight">Dastkari</span></h2>
                        <p>
                            At <strong>Dastkari</strong>, we celebrate the fusion of tradition and creativity. Our platform 
                            empowers artisans to showcase their unique skills, connect with customers worldwide, 
                            and sustain the heritage of handcrafting that defines Pakistani culture.
                        </p>
                        <p>
                            <em>"Every craft tells a story, every design has a soul."</em>
                        </p>
                        <ul className="list-unstyled">
                            <li><strong>Discover</strong> exclusive handmade treasures from local artisans.</li>
                            <li><strong>Connect</strong> with a vibrant community of creators and enthusiasts.</li>
                            <li><strong>Support</strong> sustainable craftsmanship for a better future.</li>
                        </ul>
                        <p>
                            Join <span className="highlight1">Dastkari</span> in celebrating the artistry of skilled hands, 
                            and take home a piece of culture that resonates with beauty and authenticity.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img 
                            src={pkmap} 
                            alt="Artisan at work" 
                            className="img-fluid rounded shadow" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
