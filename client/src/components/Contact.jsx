import React, { useState } from 'react';

const Contact = ({ submitForm }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');
    return (
        <div className="contact-wrapper">
            <img
                className="contact-img"
                src="../imgs/ZOE_CHRISTIAN_PLAYING3.JPG"
                alt="duo"
            />
            <h1>GET IN TOUCH</h1>
            <br></br>
            <div className="contact-form">
                <form>
                    {/* <h3>NAME</h3>
                    <h3>E-MAIL</h3> */}
                    <br></br>
                    <label>
                        NAME:
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                        ></input>
                    </label>
                    <label>
                        E-MAIL:
                        <input
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </label>
                    {/* <br></br>
                    <h3>PHONE</h3>
                    <input
                        type="text"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    ></input>
                    <br></br> */}
                    {/* <br></br> */}
                    {/* <h3>DATE</h3>
                    <select onChange={(e) => setDate(e.target.value)}>
                        {}
                    </select> */}
                    {/* <br></br>
                    <h3>TIME</h3>
                    <select onChange={(e) => setTime(e.target.value)}></select>
                    */}
                    {/* <br></br> */}
                    <label className="message">
                        MESSAGE:
                        <br></br>
                        <textarea
                            type="text"
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </label>
                    {/* <br></br> */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            submitForm({
                                name,
                                // phoneNumber,
                                email,
                                // date,
                                // time,
                                message,
                            });
                        }}
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
