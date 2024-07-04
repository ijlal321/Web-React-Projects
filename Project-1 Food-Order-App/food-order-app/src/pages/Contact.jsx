import React, { useState } from 'react';
import '../Styles/Contact.css';
import sideImg from "../assets/south.jpg";

const Contact = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('/api/send-message-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });
            
            if (response.ok) {
                console.log('Message sent successfully!');
                // Optionally, reset the textarea after successful submission
                setMessage('');
            } else {
                console.error('Failed to send message.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    return (
        <div className="Contact">
            <div className='left-container'>
                <img src={sideImg} alt="Contact" />
            </div>
            <div className='right-container'>
                <h2>Contact Information</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla convallis libero eget tortor dignissim, at aliquet
                    neque congue. Mauris in libero eu enim mollis egestas.
                </p>
                <p>Email: contact@example.com</p>
                <p>Phone: +1234567890</p>
                <form onSubmit={handleSubmit}>
                    <input
                        value={message}
                        onChange={handleChange}
                        placeholder="Enter your message..."
                    ></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
