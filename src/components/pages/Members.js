import React from 'react';
import Dami from '../../assets/damiShot.jpg';
import Gahyeon from '../../assets/gahyeonShot.jpg';
import Jiu from '../../assets/jiuShot.jpg';
import Sua from '../../assets/suaShot.jpg';
import Handong from '../../assets/handongShot.jpg';
import Siyeon from '../../assets/siyeonShot.jpg';
import Yoohyeon from '../../assets/yoohyeonShot.jpg';

const Members = () => {

    return (
        <div className="headShot-rows">
            <div className="picContainer picOdd">
                <img className="headShot" src={Dami} alt="Dami"/>
            </div>

            <div className="picContainer picEven">
                <img className="headShot" src={Gahyeon} alt="Gahyeon"/>
            </div>

            <div className="picContainer picOdd">
                <img className="headShot" src={Jiu} alt="Jiu"/>
            </div>

            <div className="picContainer picEven">
                <img className="headShot" src={Sua} alt="Sua"/>
            </div>

            <div className="picContainer picOdd">
                <img className="headShot" src={Yoohyeon} alt="Yoohyeon"/>
            </div>

            <div className="picContainer picEven">
                <img className="headShot" src={Handong} alt="Handong"/>
            </div>

            <div className="picContainer picOdd">
                <img className="headShot" src={Siyeon} alt="Siyeon"/>
            </div>
        </div>
    );
};

export default Members;