import React, { Fragment, useState } from 'react';
import emailjs from 'emailjs-com';
import { isScrolledIntoViewFromTop } from '../js/Effects.js';

const ContactForm = ({ displayModal }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const sendEmail = (data) => {
        console.log(data);
        displayModal();
        // emailjs.send(
        //     process.env.SERVICE_ID,
        //     process.env.TEMPLATE_ID,
        //     data,
        //     process.env.USER_ID
        // );
    };
    const target = document.getElementsByClassName('contact-form');
    const section = document.getElementsByClassName('section-contact-form');

    window.addEventListener('scroll', () => {
        if (isScrolledIntoViewFromTop(section[0])) {
            target[0].classList.add('contact-form--animate');
        } else {
            target[0].classList.remove('contact-form--animate');
        }
    });

    return (
        <Fragment>
            <div className="section-contact-form">
                <div className="contact-form">
                    <div className="contact-form__wrapper">
                        <h2 className="contact-form__heading">Let's Talk</h2>
                        <p className="contact-form__info" id="contact-form">
                            zoewviolin@gmail.com
                            <br></br>
                            803-807-8570
                        </p>
                        <form
                            action="#"
                            className="contact-form__form"
                            onSubmit={(e) => {
                                e.preventDefault();
                                sendEmail({
                                    firstName,
                                    lastName,
                                    email,
                                    message,
                                });
                            }}
                        >
                            <div className="contact-form__name">
                                <div className="contact-form__name--input">
                                    First Name
                                    <input
                                        type="text"
                                        id="first name"
                                        onChange={(e) =>
                                            setFirstName(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <div className="contact-form__name--input">
                                    Last Name
                                    <input
                                        type="text"
                                        id="last name"
                                        onChange={(e) =>
                                            setLastName(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                            </div>
                            <div className="contact-form__email">
                                Email
                                <input
                                    type="email"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="contact-form__message">
                                Message
                                <textarea
                                    type="text"
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                            </div>
                            <button className="contact-form__button">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ContactForm;
