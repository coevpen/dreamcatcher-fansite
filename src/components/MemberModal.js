import React from 'react';
import {MdClose} from 'react-icons/md';

function MemberModal({showModal, setShowModal, currentBio}){
    const { Name, image, Birthdate, Position } = currentBio;
    return (
        <>
        {showModal ? (
            <div className="modal-wrapper" showModal={showModal}>
                <img src={image} className="modal-img" alt="Dami"/>
                <div className="modal">
                    <h1>{Name}</h1>
                    <ul>
                        <li>Birthdate: {Birthdate}</li>
                        <li>Position: {Position}</li>
                    </ul>
                    <p>This is Dami's bio.</p>
                </div>
                <MdClose className="modal-close-btn" aria-label="Close modal" onClick={() => setShowModal(prev => !prev)}/>
            </div>
        ):null}
        </>
    );
}

export default MemberModal;