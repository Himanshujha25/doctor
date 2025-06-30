"use client";
import React from "react";

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white px-6 text-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(20,30,40,0.7), rgba(20,30,40,0.7)), url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1600&q=80')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Dr. Serena Blake, PsyD
        </h1>
        <h2 className="text-xl md:text-2xl mt-4 font-medium drop-shadow">
          Clinical Psychologist in Los Angeles
        </h2>
        <p className="mt-6 max-w-xl text-lg md:text-xl text-gray-200 drop-shadow">
          Compassionate care for your mental well-being. Specializing in anxiety, depression, and life transitions.
        </p>
        <a
          href="#office-hours"
          className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-lg transition"
        >
          Book a Free Consult
        </a>
      </div>
    </section>
  );
};

export default Hero;