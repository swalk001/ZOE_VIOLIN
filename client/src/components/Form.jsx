import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { isScrolledIntoViewFromTop } from '../js/Effects.js';

const Form = ({ displayModal }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const sendEmail = (data) => {
        displayModal();
        emailjs.send(
            process.env.SERVICE_ID,
            process.env.TEMPLATE_ID,
            data,
            process.env.USER_ID
        );
    };
    const target = document.getElementsByClassName('book');
    const section = document.getElementsByClassName('section-book');

    window.addEventListener('scroll', () => {
        if (isScrolledIntoViewFromTop(section[0])) {
            target[0].classList.add('book--animate');
        } else {
            target[0].classList.remove('book--animate');
        }
    });
    return (
        <section className="section-book" id="contact">
            <h2
                className="book__heading scroll-horizontal-left"
                data-rate="-.17"
                data-direction="vertical"
            >
                Let's Talk
            </h2>
            <div className="row">
                <div className="book">
                    <div className="book__form">
                        <form
                            action="#"
                            className="form"
                            onSubmit={(e) => {
                                e.preventDefault();
                                sendEmail({
                                    name,
                                    email,
                                    message,
                                });
                            }}
                        >
                            <div className="u-margin-bottom-medium">
                                <br></br>
                            </div>
                            <div className="form__group">
                                <input
                                    type="text"
                                    className="form__input"
                                    placeholder="Full Name"
                                    id="name"
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                <label htmlFor="name" className="form__label">
                                    Full Name
                                </label>
                            </div>

                            <div className="form__group">
                                <input
                                    type="email"
                                    className="form__input"
                                    placeholder="Email Address"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <label htmlFor="email" className="form__label">
                                    Email Address
                                </label>
                            </div>

                            <label>
                                <textarea
                                    type="text"
                                    className="contact--textarea"
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Message"
                                    required
                                ></textarea>
                            </label>

                            <div className="form__group">
                                <button className="contact__form--button">
                                    Connect
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form;
