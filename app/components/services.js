import React from "react";

const services = [
  {
    title: "Anxiety & Stress Management",
    image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&w=600&h=400&fit=crop",
  },
  {
    title: "Relationship Counseling",
    image: "https://images.pexels.com/photos/3184397/pexels-photo-3184397.jpeg?auto=compress&w=600&h=400&fit=crop",
  },
  {
    title: "Trauma Recovery",
    image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&w=600&h=400&fit=crop",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50 px-6" style={{
        background: "linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)"
      }}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Services & Specialties</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-xl shadow hover:shadow-md transition">
              <img
                src={s.image}
                alt={s.title}
                className="rounded-t-xl w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{s.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;