import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import scroll from './ScrollOptions.js';
import Links from './Links.jsx';

const validateForm = (data) => {
    let send = true;
    var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    const emailValid = pattern.test(data.email);
    const name = document.getElementById('form-name');
    const email = document.getElementById('form-email');
    const invalid = document.getElementById('form-email');
    const message = document.getElementById('form-message');

    if (data.name === '') {
        name.innerHTML = '(please enter your name)';
        send = false;
    } else {
        name.innerHTML = '&nbsp;';
    }
    if (data.email === '') {
        email.innerHTML = '(please enter your email address)';
        send = false;
    } else if (!emailValid) {
        invalid.innerHTML = '(please enter a valid email address)';
        send = false;
    } else {
        email.innerHTML = '&nbsp;';
    }
    if (data.message === '') {
        message.innerHTML = '(please enter your message)';
        send = false;
    } else {
        message.innerHTML = '&nbsp;';
    }
    return send;
};

const Contact = ({ displayModal }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const sendEmail = (data) => {
        if (validateForm(data)) {
            displayModal();
            console.log('sent!');
            // emailjs.send(
            //     process.env.SERVICE_ID,
            //     process.env.TEMPLATE_ID,
            //     data,
            //     process.env.USER_ID
            // );
        }
    };
    return (
        <section className="contact">
            <div className="contact-wrapper">
                <h2
                    className="parallax-heading"
                    data-rate="-.09"
                    data-direction="vertical"
                >
                    GET IN TOUCH
                </h2>
                <div id="contact" className="contact-form">
                    <form>
                        <br></br>
                        <label>
                            <div className="label-field">Name:</div>
                            <div id="form-name">&nbsp;</div>
                            <input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                        </label>
                        <label>
                            <div className="label-field">E-mail:</div>
                            <div id="form-email">&nbsp;</div>
                            <input
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </label>

                        <label>
                            <div className="label-field">Message:</div>
                            <div id="form-message">&nbsp;</div>
                            <textarea
                                type="text"
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </label>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                sendEmail({
                                    name,
                                    email,
                                    message,
                                });
                            }}
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
