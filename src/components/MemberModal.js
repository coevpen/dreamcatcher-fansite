import React from 'react';
import {MdClose} from 'react-icons/md';

function MemberModal({showModal, setShowModal}){

    return (
        <>
        {showModal ? (
            <div className="modal-wrapper" showModal={showModal}>
                <img src={require(`../assets/dami.jpg`)} className="modal-img" alt="Dami"/>
                <div className="modal">
                    <h1>Dami</h1>
                    <p>This is Dami's bio.</p>
                </div>
                <MdClose className="modal-close-btn" aria-label="Close modal" onClick={() => setShowModal(prev => !prev)}/>
            </div>
        ):null}
        </>
    );
}

export default MemberModal;