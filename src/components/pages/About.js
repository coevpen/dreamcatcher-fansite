import React from 'react';
import groupPic from '../../assets/chaseMe.jpg';

const About = () => {

    return (
        <div className="about ml-96">
            <h2 className="text-4xl mb-12">About Dreamcatcher</h2>
            <p className="indent-6">Dreamcatcher is a seven member all female K-Pop group. They debuted on January 13, 2017 
            with their single album Nightmare. Their first title track was "Chase Me" filled with a rock  sound and horror themes. 
            Their fanclub name is Insomnia. Their group's name has been described to mean that they are to capture the 
            nightmares of Insomnias and fill them with happiness. </p>
            <p className="indent-6">The member's who make up the group are Dami, Handong, SuA, Yoohyeon, Siyeon, JiU, and Gahyeon. Click the Members link 
                above to learn about each individual member!
            </p>
            <img src={groupPic} alt="All seven members of Dreamcatcher" width="650"/>
        </div>
    );
};

export default About;