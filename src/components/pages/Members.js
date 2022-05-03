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

    const [currentBio, setCurrentBio] = useState();

    const bios = [

        {
            Name: "",
            image: "",
            Birthdate: "",
            Position: ""
        },
        {
            Name: "",
            image: "",
            Birthdate: "",
            Position: ""
        },
        {
            Name: "",
            image: "",
            Birthdate: "",
            Position: ""
        },
        {
            Name: "",
            image: "",
            Birthdate: "",
            Position: ""
        },
        {
            Name: "",
            image: "",
            Birthdate: "",
            Position: ""
        },
        {
            Name: "",
            image: "",
            Birthdate: "",
            Position: ""
        },
        {
            Name: "",
            image: "",
            Birthdate: "",
            Position: ""
        }
    ];

    return (
        <div className="headShot-rows">
            <div className="picContainer picOdd">
                <img className="headShot" src={Dami} alt="Dami" onClick={openModal}/>
            </div>

            <div className="picContainer picEven">
                <img className="headShot" src={Gahyeon} alt="Gahyeon" onClick={openModal}/>
            </div>

            <div className="picContainer picOdd">
                <img className="headShot" src={Jiu} alt="Jiu" onClick={openModal}/>
            </div>

            <div className="picContainer picEven">
                <img className="headShot" src={Sua} alt="Sua" onClick={openModal}/>
            </div>

            <div className="picContainer picOdd">
                <img className="headShot" src={Yoohyeon} alt="Yoohyeon" onClick={openModal}/>
            </div>

            <div className="picContainer picEven">
                <img className="headShot" src={Handong} alt="Handong" onClick={openModal}/>
            </div>

            <div className="picContainer picOdd">
                <img className="headShot" src={Siyeon} alt="Siyeon" onClick={openModal}/>
            </div>

            <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
    );
};

export default Members;