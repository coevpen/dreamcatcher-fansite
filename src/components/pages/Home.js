import React from 'react';
import worldTour from '../../assets/worldTour.jpg';

const Home = () => {

    return (
        <div className="lg:mx-12 sm:mx-5">
            <h2 className="text-white text-4xl">News</h2>
            <p> Dreamcatcher is going on a World Tour and making stops in the USA!
            <br/>
            Tickets open since 4/30/22:
            </p>
            <ol>
                <li></li>
                <li></li>
            </ol>
            <p>Get tickets here: <a href="bit.ly/36QjmnE" target="_blank" rel="noferrer">bit.ly/36QjmnE</a></p>
            <img src={worldTour} alt="Dreamcatcher World Tour poster with current tour dates" width="450"/>
        </div>
    );
};

export default Home;