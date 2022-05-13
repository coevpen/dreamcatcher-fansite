import React from 'react';
import worldTour from '../../assets/worldTour.jpg';

const Home = () => {

    return (
        <div className="lg:mx-12 sm:mx-5">
            <div className="home-page ml-96">
                <h2 className="text-white text-4xl">News</h2>
                <br/>
                <h3 className="text-white text-2xl">04/30/22:</h3>
                <p> Dreamcatcher is going on a World Tour and making stops in the USA!
                <br/>
                Tour Dates:
                </p>
                <ul className="list-disc ml-4 my-3">
                    <li>[New York] 6/28 Palladium Times Square</li>
                    <li>[Reading] 7/1 Santander Arena</li>
                    <li>[Louisville] 7/3 Old Forester's Paristown Hall</li>
                    <li>[Chicago] 7/7 Radius Chicago</li>
                    <li>[Minneapolis] 7/9 Skyway Theater</li>
                    <li>[Denver] 7/12 Fillmore Auditorium</li>
                    <li>[San Franscisco] 7/14 The Midway</li>
                    <li>[Los Angeles] 7/17 The Wiltern</li>
                </ul>
                <p>Get tickets here: <a href="bit.ly/36QjmnE" target="_blank" rel="noferrer">bit.ly/36QjmnE</a></p>
                <img src={worldTour} alt="Dreamcatcher World Tour poster with current tour dates" width="450"/>
            </div>
        </div>
    );
};

export default Home;