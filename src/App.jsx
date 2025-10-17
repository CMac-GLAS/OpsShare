import React, { useState } from "react";

export default function App() {
  const opsBlue = "rgb(11, 83, 148)";
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `New OpsShare inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailto = `mailto:cmcdonnell@ops-share.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-blue-50 to-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold font-sans">
            <span style={{ color: opsBlue }}>Ops</span>
            <span className="text-gray-500">Share</span>
          </h1>
          <nav className="space-x-6">
            <a href="#about" style={{ color: opsBlue }} className="hover:underline">About</a>
            <a href="#services" style={{ color: opsBlue }} className="hover:underline">Services</a>
            <a href="#contact" style={{ color: opsBlue }} className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="px-6 py-10 space-y-16">
        {/* Hero */}
        <section className="relative text-center space-y-6 py-20 px-4 bg-gradient-to-r from-blue-100 via-white to-blue-100 overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
            aria-hidden="true"
          />
          <div className="relative z-10 space-y-10">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight space-y-4 text-gray-700">
              Data operations services your school needs,
              <br />
              <span className="text-gray-700">at a fraction of the cost of an employee.</span>
              <div className="mt-12 flex flex-col items-center">
                <span className="text-3xl md:text-5xl font-bold text-gray-700">That’s</span>
                <span className="text-5xl md:text-7xl font-bold font-sans">
                  <span style={{ color: opsBlue }}>Ops</span>
                  <span className="text-gray-500">Share.</span>
                </span>
              </div>
            </h2>
            <a
              href="#contact"
              style={{ backgroundColor: opsBlue }}
              className="inline-block text-white text-lg font-medium px-6 py-3 rounded hover:opacity-90 transition shadow-md hover:shadow-lg mt-6"
            >
              Contact Us
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 grid md:grid-cols-[3fr_1fr] gap-8 items-center">
          <div className="space-y-4">
            <h2 style={{ color: opsBlue }} className="text-2xl font-semibold">About Us</h2>
            <p>
              OpsShare is an Ohio-based data management firm that allows schools to share data operations staff in order to
              access high-quality expertise—at a fraction of the cost of hiring full-time employees.
            </p>
            <p>
              Our purpose is to help high-quality schools thrive by providing skilled services at an affordable cost—so that
              our schools can invest less into the red tape, and more into their students.
            </p>
            <p>
              Utilizing our services not only ensures reliable, high-quality operational support—but also helps schools
              maximize their funding. Through expert data management and precise state reporting, we help ensure that your
              school receives every dollar of state funding available to it.
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
              alt="Database server with analytics charts"
              className="w-[80%] max-w-xs mx-auto"
            />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h2 style={{ color: opsBlue }} className="text-3xl font-bold">Services</h2>
            <p className="mt-2 text-gray-700 max-w-3xl mx-auto">
              Practical, high-impact support for Ohio schools. We handle the data and compliance work so your team can focus
              on students.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
              <div style={{ color: opsBlue }} className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold mb-4">DATA</div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Student Data Management</h3>
              <p className="text-gray-700 mb-4">
                Easily our most popular suite of services. We'll take care of everything A to Z. From getting you set up on
                an enrollment platform, to direct management of your student data in the SIS, to EMIS Reporting, we'll take
                care of it all so you don't have to.
              </p>
              <a href="#contact" style={{ color: opsBlue }} className="mt-auto hover:underline">Schedule a Convo</a>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
              <div style={{ color: opsBlue }} className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold mb-4">$</div>
              <h3 className="text-xl font-semibold mb-2">Data Cleanup & Funding Maximization</h3>
              <p className="text-gray-700 mb-4">
                Funding leakage due to data integrity issues is a highly common issue that often goes overlooked. We'll
                perform a full sweep to isolate any data integrity issues impacting your funding and compliance and assist in
                getting it repaired.
              </p>
              <a href="#contact" style={{ color: opsBlue }} className="mt-auto hover:underline">Schedule a Convo</a>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
              <div style={{ color: opsBlue }} className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold mb-4">EXL</div>
              <h3 className="text-xl font-semibold mb-2">Excel Training</h3>
              <p className="text-gray-700 mb-4">
                Our highly rated Excel trainings focuses on functions most useful and relevant to school staff. Send us out to
                deliver a training to your staff for a low rate, flat fee.
              </p>
              <a href="#contact" style={{ color: opsBlue }} className="mt-auto hover:underline">Schedule a Convo</a>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
              <div style={{ color: opsBlue }} className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold mb-4">APPS</div>
              <h3 className="text-xl font-semibold mb-2">Custom Sheets & Apps Script</h3>
              <p className="text-gray-700 mb-4">
                Calendars, rostering, EMIS exports, and dashboards built on Google Workspace—fast, reliable, and easy to use.
              </p>
              <a href="#contact" style={{ color: opsBlue }} className="mt-auto hover:underline">Schedule a Convo</a>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
              <div style={{ color: opsBlue }} className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold mb-4">ENR</div>
              <h3 className="text-xl font-semibold mb-2">Enrollment Workflows</h3>
              <p className="text-gray-700 mb-4">
                Could your enrollment processes use improvement? We'll help install an enrollment process that will ensure a
                smooth experience for your families and effortless data migrations into your Student Information System.
              </p>
              <a href="#contact" style={{ color: opsBlue }} className="mt-auto hover:underline">Schedule a Convo</a>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
              <div style={{ color: opsBlue }} className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold mb-4">C</div>
              <h3 className="text-xl font-semibold mb-2">Consulting</h3>
              <p className="text-gray-700 mb-4">
                Don't need direct management of your data and reporting processes but could use ongoing guidance? We'll be
                there to make sure everything is being done right and on-time, ensuring critical deliverables and deadlines
                throughout the year are met.
              </p>
              <a href="#contact" style={{ color: opsBlue }} className="mt-auto hover:underline">Schedule a Convo</a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-3xl mx-auto text-center py-10" aria-label="Contact">
          <h2 style={{ color: opsBlue }} className="text-2xl font-semibold mb-4">Contact</h2>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
              <div>
                <label className="block text-left font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2"
                  style={{ borderColor: opsBlue }}
                />
              </div>
              <div>
                <label className="block text-left font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2"
                  style={{ borderColor: opsBlue }}
                />
              </div>
              <div>
                <label className="block text-left font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2"
                  style={{ borderColor: opsBlue }}
                />
              </div>
              <button
                type="submit"
                style={{ backgroundColor: opsBlue }}
                className="text-white px-6 py-2 rounded font-medium hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-2" style={{ color: opsBlue }}>Thank you!</h3>
              <p>Your message has been prepared in your email client. We'll get back to you soon.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
