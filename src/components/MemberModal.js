import React from 'react';
import {MdClose} from 'react-icons/md'; //the x button for the modal close

// modal shows each member bio after their photo is clicked on
function MemberModal({showModal, setShowModal, currentBio}){
    const { Name, image, Birthdate, Position } = currentBio;
    return (
        <>
        {showModal ? (
            <div className="modal">
                <div className="modal-inside">
                    <div>
                        <img src={image} className="modal-img" alt="Dami"/>
                    </div>
                    <div className="modal-bio">
                        <h1>{Name}</h1>
                        <ul>
                            <li>Birthdate: {Birthdate}</li>
                            <li>Position: {Position}</li>
                        </ul>
                    </div>
                    <MdClose className="modal-close-btn" aria-label="Close modal" onClick={() => setShowModal(prev => !prev)}/>
                </div>
            </div>
        ):null}
        </>
    );
}

export default MemberModal;