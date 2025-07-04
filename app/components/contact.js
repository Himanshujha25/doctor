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
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 lg:bg-transparent">
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full lg:min-h-screen xl:max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-6 sm:py-8 md:py-10 lg:py-16 xl:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg lg:shadow-none border border-blue-200 lg:border-none rounded-lg lg:rounded-none lg:flex lg:items-center lg:justify-center" id="contact">
                <div className="lg:max-w-4xl xl:max-w-5xl w-full">
                    <h2 className="text-center mb-6 sm:mb-8 font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-gray-800">
                        Contact the Doctor
                    </h2>
                    <p className="text-center text-gray-600 mb-6 sm:mb-8 md:mb-9 lg:mb-12 xl:mb-16 text-sm sm:text-base lg:text-lg xl:text-xl max-w-3xl mx-auto">
                        Please fill out the form below to get in touch with the doctor. We value your privacy and will respond promptly.
                    </p>
                
                {submitted ? (
                        <div className="text-center text-green-700 font-medium text-base sm:text-lg lg:text-xl xl:text-2xl">
                            Thank you for reaching out! Your message has been sent.
                        </div>
                ) : (
                        <div className="space-y-4 sm:space-y-6 lg:space-y-8 xl:space-y-10 max-w-2xl mx-auto">
                            <div>
                                <label className="block mb-2 font-medium text-gray-700 text-sm sm:text-base lg:text-lg xl:text-xl">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                    className="w-full px-3 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 lg:py-6 xl:py-8 rounded-lg border border-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl focus:border-blue-600 focus:outline-none transition-colors duration-200"
                                />
                            </div>
                            
                            <div>
                                <label className="block mb-2 font-medium text-gray-700 text-sm sm:text-base lg:text-lg xl:text-xl">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="you@example.com"
                                    className="w-full px-3 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 lg:py-6 xl:py-8 rounded-lg border border-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl focus:border-blue-600 focus:outline-none transition-colors duration-200"
                                />
                            </div>
                            
                            <div>
                                <label className="block mb-2 font-medium text-gray-700 text-sm sm:text-base lg:text-lg xl:text-xl">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="How can we help you?"
                                    className="w-full px-3 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 lg:py-6 xl:py-8 rounded-lg border border-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl focus:border-blue-600 focus:outline-none transition-colors duration-200 resize-y"
                                />
                            </div>
                            
                            <div className="flex items-center space-x-3 lg:space-x-4 xl:space-x-5">
                                <input
                                    type="checkbox"
                                    id="captcha"
                                    checked={captchaChecked}
                                    onChange={handleCaptchaChange}
                                    required
                                    className="h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="captcha" className="text-gray-700 cursor-pointer select-none text-sm sm:text-base lg:text-lg xl:text-xl">
                                    I am not a robot
                                </label>
                            </div>
                            
                            <button
                                type="submit"
                                disabled={!captchaChecked}
                                onClick={handleSubmit}
                                className="w-full py-3 sm:py-4 lg:py-6 xl:py-8 bg-blue-600 text-white border-none rounded-md text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold cursor-pointer transition-colors duration-200 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed"
                            >
                                Send Message
                            </button>
                        </div>
                )}
                
                    <div className="mt-6 sm:mt-8 lg:mt-12 xl:mt-16 text-center text-gray-500 text-xs sm:text-sm lg:text-base xl:text-lg">
                        Or email us directly at{' '}
                        <a href="mailto:info@oakpsychology.com" className="text-blue-600 hover:underline">
                            info@oakpsychology.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;