import React from "react";
import doctor from "../assets/doctor.jpg";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6"
      style={{
        background: "linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)"
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center shadow-lg rounded-xl bg-white p-8">
        <Image
          src={doctor}
          alt="Dr. Serena Blake"
          className="rounded-full border-4 border-blue-200 shadow-md w-80 h-80 object-cover"
        />
        <div>
          <h2 className="text-4xl font-extrabold mb-4 text-blue-900">About Dr. Serena Blake</h2>
          <p className="text-lg text-gray-700 mb-4">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) with 8 years of experience and 500+ client sessions.
            She uses evidence-based methods like CBT and mindfulness to help people overcome anxiety, trauma, and relational struggles.
            Whether in her Los Angeles office or over Zoom, she provides a safe and supportive space for healing.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>8+ years of clinical experience</li>
            <li>Certified in CBT & Mindfulness</li>
            <li>500+ client sessions</li>
            <li>In-person & virtual appointments</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;