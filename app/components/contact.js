'use client';
import { useState } from 'react';

function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [captchaChecked, setCaptchaChecked] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleCaptchaChange = (e) => {
        setCaptchaChecked(e.target.checked);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className=''>
            <div className="contact-container" id='contact'>
                <h2 className="contact-title">Contact the Doctor</h2>
                <p className="contact-desc">
                    Please fill out the form below to get in touch with the doctor. We value your privacy and will respond promptly.
                </p>
                {submitted ? (
                    <div className="contact-success">
                        Thank you for reaching out! Your message has been sent.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="Your Name"
                                onFocus={e => e.target.style.borderColor = '#1976d2'}
                                onBlur={e => e.target.style.borderColor = '#cfd8dc'}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="you@example.com"
                                onFocus={e => e.target.style.borderColor = '#1976d2'}
                                onBlur={e => e.target.style.borderColor = '#cfd8dc'}
                            />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                placeholder="How can we help you?"
                                onFocus={e => e.target.style.borderColor = '#1976d2'}
                                onBlur={e => e.target.style.borderColor = '#cfd8dc'}
                            />
                        </div>
                        <div className="captcha-group">
                            <input
                                type="checkbox"
                                id="captcha"
                                checked={captchaChecked}
                                onChange={handleCaptchaChange}
                                required
                            />
                            <label htmlFor="captcha">
                                I am not a robot
                            </label>
                        </div>
                        <button
                            type="submit"
                            disabled={!captchaChecked}
                            className="submit-btn"
                        >
                            Send Message
                        </button>
                    </form>
                )}
                <div className="contact-footer">
                    Or email us directly at <a href="mailto:info@oakpsychology.com">info@oakpsychology.com</a>
                </div>
            </div>
            <style jsx>{`
                .contact-container {
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                    box-sizing: border-box;
                    background: linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%);
                    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
                    border: 1px solid #e3e8f0;
                }
                .contact-title {
                    text-align: center;
                    margin-bottom: 32px;
                    font-family: fantasy;
                    font-size: 2rem;
                }
                .contact-desc {
                    text-align: center;
                    color: #555;
                    margin-bottom: 36px;
                }
                .contact-success {
                    text-align: center;
                    color: #2e7d32;
                    font-weight: 500;
                }
                .form-group {
                    margin-bottom: 24px;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 500;
                }
                .form-group input,
                .form-group textarea {
                    width: 100%;
                    padding: 14px;
                    border-radius: 8px;
                    border: 1px solid #cfd8dc;
                    font-size: 16px;
                    transition: border-color 0.2s;
                    outline: none;
                    box-sizing: border-box;
                }
                .form-group textarea {
                    resize: vertical;
                }
                .captcha-group {
                    margin-bottom: 24px;
                    display: flex;
                    align-items: center;
                }
                .captcha-group input[type="checkbox"] {
                    margin-right: 10px;
                }
                .captcha-group label {
                    user-select: none;
                    cursor: pointer;
                }
                .submit-btn {
                    width: 100%;
                    padding: 12px;
                    background: #1976d2;
                    color: #fff;
                    border: none;
                    border-radius: 6px;
                    font-size: 18px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background 0.2s;
                }
                .submit-btn:disabled {
                    background: #90caf9;
                    cursor: not-allowed;
                }
                .contact-footer {
                    margin-top: 32px;
                    text-align: center;
                    color: #888;
                    font-size: 14px;
                }
                .contact-footer a {
                    color: #1976d2;
                }
                @media (min-width: 600px) {
                    .contact-container {
                        padding: 48px 40px;
                        max-width: 600px;
                    }
                    .contact-title {
                        font-size: 2.5rem;
                    }
                }
                @media (min-width: 900px) {
                    .contact-container {
                        max-width: 600px;
                        padding: 56px 64px;
                    }
                    .contact-title {
                        font-size: 3rem;
                    }
                }
                @media (max-width: 480px) {
                    .contact-container {
                        padding: 24px 8px;
                        max-width: 100vw;
                    }
                }
                 @media (min-width: 1200px) {
        .contact-container {
            max-width: 1000px;
        }
    }
            `}</style>
            <style jsx global>{`
                body {
                    overflow-x: hidden;
                }
            `}</style>
        </div>
    );
}

export default Contact;
