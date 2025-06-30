import React from "react";

const OfficeHours = () => {
  return (
    <section id="office-hours" className="py-16 px-6 bg-white" style={{
        background: "linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)"
      }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Office Hours & Fees</h2>
        <ul className="text-lg text-gray-700 space-y-4">
          <li>
            <strong>In-Person Appointments:</strong> Wednesdays & Fridays, 9:00 AM – 5:00 PM
          </li>
          <li>
            <strong>Virtual Sessions (Zoom):</strong> Mondays & Thursdays, 12:00 PM – 4:00 PM
          </li>
          <li>
            <strong>Individual Session Fee:</strong> $220 per session
          </li>
          <li>
            <strong>Couples Session Fee:</strong> $260 per session
          </li>
          <li>
            <strong>Office Location:</strong> 456 Oak Avenue, Los Angeles, CA 90027
          </li>
          <li>
            <strong>Contact:</strong> (323) 555-0123 &nbsp;|&nbsp;
            <a
              href="mailto:info@oakpsychology.com"
              className="text-blue-600 underline"
            >
              info@oakpsychology.com
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OfficeHours;