import React from 'react';

const Modal = ({ displayModal, modal }) => {
    if (modal) {
        return (
            <div className="contact-modal-wrapper">
                <div className="contact-modal">
                    <button onClick={() => displayModal()}>X</button>
                    <h1>Thanks for reaching out!</h1>
                    <h2>I'll be in touch with you shortly!</h2>
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default Modal;
