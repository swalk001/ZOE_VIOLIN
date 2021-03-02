import React from 'react';

const Modal = ({ displayModal, modal }) => {
    if (modal) {
        return (
            <div
                className="contact-modal-wrapper"
                onClick={() => displayModal()}
            >
                <section className="header-content">
                    <h1 className="modal-h1 animate-pop-in">
                        Thanks for reaching out!{' '}
                    </h1>
                    <h2 className="modal-h2 animate-pop-in">
                        I'll be in touch with you shortly!
                    </h2>
                </section>
            </div>
        );
    } else {
        return <div></div>;
    }
};
export default Modal;
