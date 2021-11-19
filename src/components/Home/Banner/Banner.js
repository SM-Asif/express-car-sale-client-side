import React from 'react';
import './Banner.css';
import { HashLink } from 'react-router-hash-link';
import { Nav } from 'react-bootstrap';

const Banner = () => {
    return (
            <div className="hero-image">
                <div className="hero-text">
                    <h1>Explore Our Brand New Car Collections</h1>
                    <p>Choose your desire car from our wide range of collections</p>
                    <Nav.Link as={HashLink} className="btn btn-primary theme-btn" to="/explore">Explore More</Nav.Link>
                </div>
            </div>
    );
};

export default Banner;