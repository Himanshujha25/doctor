import React, { useState } from "react";

const faqData = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions are conducted via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice required for all cancellations.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 bg-gray-100 px-6" style={{
        background: "linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)"
      }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4 text-lg text-gray-700">
          {faqData.map((item, idx) => (
            <div key={idx} className="bg-white rounded shadow">
              <button
                className="w-full text-left px-6 py-4 font-semibold focus:outline-none flex justify-between items-center"
                onClick={() => toggle(idx)}
              >
                {item.question}
                <span className={`transform transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? "max-h-40 py-2 opacity-100" : "max-h-0 opacity-0 py-0"
                }`}
                style={{ transitionProperty: "max-height, opacity, padding" }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;