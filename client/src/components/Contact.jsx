import React, { useState } from 'react';

const Contact = ({ submitForm }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');
    return (
        <div className="contact-form">
            <img
                className="contact-img"
                src="../imgs/ZOE_CHRISTIAN_PLAYING3.JPG"
                alt="duo"
            />
            <h1>GET IN TOUCH</h1>
            <br></br>
            <form>
                <h3>NAME</h3>
                <input
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                ></input>
                <input
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                ></input>
                <br></br>
                <h3>PHONE</h3>
                <input
                    type="text"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                ></input>
                <br></br>
                <h3>E-MAIL</h3>
                <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <br></br>
                <h3>DATE</h3>
                <select onChange={(e) => setDate(e.target.value)}>{}</select>
                <br></br>
                <h3>TIME</h3>
                <select onChange={(e) => setTime(e.target.value)}></select>
                <br></br>
                <h3>MESSAGE</h3>
                <textarea
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <br></br>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        submitForm({
                            firstName,
                            lastName,
                            phoneNumber,
                            email,
                            date,
                            time,
                            message,
                        });
                    }}
                >
                    SUBMIT
                </button>
            </form>
        </div>
    );
};

export default Contact;
