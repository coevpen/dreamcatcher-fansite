import React, { useState } from 'react';
import Modal from '../MemberModal';

// member pictures
import Dami from '../../assets/damiShot.jpg';
import Gahyeon from '../../assets/gahyeonShot.jpg';
import Jiu from '../../assets/jiuShot.jpg';
import Sua from '../../assets/suaShot.jpg';
import Handong from '../../assets/handongShot.jpg';
import Siyeon from '../../assets/siyeonShot.jpg';
import Yoohyeon from '../../assets/yoohyeonShot.jpg';

const Members = () => {

    const [showModal, setShowModal] = useState(false);
    const openModal = () =>{
        setShowModal(prev => !prev)
    }

    const [bios] = useState([

        {
            Name: "Dami",
            image: require(`../../assets/dami.jpg`),
            Birthdate: "March 7, 1997",
            Position: "Main Rapper"
        },
        {
            Name: "Gahyeon",
            image: require(`../../assets/gahyeon.jpg`),
            Birthdate: "February 3, 1999",
            Position: "Sub-vocal"
        },
        {
            Name: "Jiu",
            image: require(`../../assets/jiu.jpg`),
            Birthdate: "May 17, 1994",
            Position: "Leader, Lead-vocal"
        },
        {
            Name: "SuA",
            image: require(`../../assets/sua.jpeg`),
            Birthdate: "August 10, 1994",
            Position: "Main dancer, sub-vocal"
        },
        {
            Name: "Yoohyeon",
            image: require(`../../assets/yoohyeon.jpg`),
            Birthdate: "January 7, 1997",
            Position: "Lead vocals"
        },
        {
            Name: "Handong",
            image: require(`../../assets/handong.jpg`),
            Birthdate: "March 26, 1996",
            Position: "Sub-vocal"
        },
        {
            Name: "Siyeon",
            image: require(`../../assets/siyeon.jpg`),
            Birthdate: "October 1, 1995",
            Position: "Main vocal"
        }
    ]);

    const [currentBio, setCurrentBio] = useState(bios[0]);

    const toggleModal = (index) => {
        setCurrentBio(bios[index]);
    };

    return (
        <>

        <div  className="headShot-rows">
            <div className="picContainer picOdd">
                <img className="headShot" src={Dami} alt="Dami" data-index="0" onClick={() => {openModal(); toggleModal(0);}}/>
            </div>

            <div className="picContainer picEven">
                <img className="headShot" src={Gahyeon} alt="Gahyeon" data-index="1" onClick={() => {openModal(); toggleModal(1);}}/>
            </div>

            <div className="picContainer picOdd">
                <img className="headShot" src={Jiu} alt="Jiu" data-index="2" onClick={() => {openModal(); toggleModal(2);}}/>
            </div>

            <div className="picContainer picEven">
                <img className="headShot" src={Sua} alt="Sua" data-index="3" onClick={() => {openModal(); toggleModal(3);}}/>
            </div>

            <div className="picContainer picOdd">
                <img className="headShot" src={Yoohyeon} alt="Yoohyeon" data-index="4" onClick={() => {openModal(); toggleModal(4);}}/>
            </div>

            <div className="picContainer picEven">
                <img className="headShot" src={Handong} alt="Handong" data-index="5" onClick={() => {openModal(); toggleModal(5);}}/>
            </div>

            <div className="picContainer picOdd">
                <img className="headShot" src={Siyeon} alt="Siyeon" data-index="6" onClick={() => {openModal(); toggleModal(6);}}/>
            </div>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} currentBio={currentBio} />
        </>
    );
};

export default Members;