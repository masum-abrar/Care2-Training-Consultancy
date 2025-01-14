import { useState } from 'react';
import contact from '../assets/contact1.jpg'; 

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully');
    setFormData({ name: '', email: '', message: '' });
    console.log(formData);
  };

  return (
    <div
      id="contact"
      className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20 px-6 mb-20"
      style={{ backgroundImage: `url(${contact})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row rounded-xl overflow-hidden">
        {/* Left Section: Contact Information */}
        <div className="w-full lg:w-1/2 bg-white bg-opacity-20 backdrop-blur-md text-white p-8 lg:p-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch!</h2>
          <p className="mb-6">
            We are looking forward to starting a project with you!
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="material-icons text-3xl mr-4">place</span>
              <p>121 Rock Street, 21 Avenue, New York, NY 92103-9000</p>
            </div>
            <div className="flex items-center">
              <span className="material-icons text-3xl mr-4">call</span>
              <p>
                1 (234) 567-891 <br /> 1 (234) 987-654
              </p>
            </div>
            <div className="flex items-center">
              <span className="material-icons text-3xl mr-4">schedule</span>
              <p>
                Mon – Fri: 10 am – 8 pm <br /> Sat, Sun: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="w-full lg:w-1/2 bg-white bg-opacity-20 backdrop-blur-md p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              className="border-2 p-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition bg-transparent text-white placeholder-gray-200"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter a valid email address"
              value={formData.email}
              onChange={handleChange}
              className="border-2 p-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition bg-transparent text-white placeholder-gray-200"
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className="border-2 p-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition bg-transparent text-white placeholder-gray-200"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md w-full transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
