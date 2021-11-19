import React from 'react';
import Banner from './Banner/Banner';
import Cars from './Cars/Cars';
import Faq from './Faq/Faq';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cars></Cars>
            <Reviews></Reviews>
            <Faq></Faq>
        </div>
    );
};

export default Home;