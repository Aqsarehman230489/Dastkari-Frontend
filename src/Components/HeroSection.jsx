import React, { useEffect } from 'react';
import '../assets/css/HeroSection.css';
import bg1 from '../assets/images/bg-2.jpg';
import bg2 from '../assets/images/bg-5.jpg';
import bg3 from '../assets/images/bg-7.jpg';

function HeroSection() {
    useEffect(() => {
        // Initialize the carousel manually if needed
        const carouselElement = document.getElementById('carouselExampleAutoplaying');
        const carousel = new window.bootstrap.Carousel(carouselElement, {
            interval: 6000,  // 4 seconds interval for auto sliding
            ride: 'carousel',  // Automatically start the carousel
        });

        // You might want to reinitialize or refresh the carousel on window resize
        const handleResize = () => {
            carousel.refresh(); // Refresh carousel to recalculate dimensions
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
       
        <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={bg2} className="d-block w-100" alt="..." style={{ height: '100%', objectFit: 'cover' }} />
                    
                    <div className="carousel-caption d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <h5 className="animated-text">Pakistani Art and Craft</h5>
                            <p className="animated-text">Explore the rich cultural heritage of Pakistan through handcrafted masterpieces.</p>
                            <a href="#explore" className="btn btn-primary btn-lg">Explore Now</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={bg3} className="d-block w-100" alt="..." style={{ height: '100%', objectFit: 'cover' }} />
                    <div className="carousel-caption d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <h5 className="animated-text">Art Inspired by Tradition</h5>
                            <p className="animated-text">Discover the elegance of handmade crafts passed down through generations.</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={bg1} className="d-block w-100" alt="..." style={{ height: '100%', objectFit: 'cover' }} />
                    <div className="carousel-caption d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <h5 className="animated-text">The Heart of Pakistani Craftsmanship</h5>
                            <p className="animated-text">Experience the art of weaving, pottery, and embroidery from across Pakistan.</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default HeroSection;
