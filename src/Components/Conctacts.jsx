import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaCheckCircle, FaUser, FaComment } from 'react-icons/fa';
const Contact = () => {
  const [verified, setVerified] = useState(false);

  const onRecaptchaChange = (value) => {
    setVerified(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!verified) {
      alert("Please verify that you're not a robot!");
      return;
    }
  };

  return (
    <div className="container mt-10">
      <div className='bg-blue-900 rounded-t-lg w-full h-[150px] text-center pt-8'>
        <h2 className="text-6xl text-white">Contact</h2>
      </div>
      <div className=" bg-white grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className='align-items-center p-10'>
              <h3 className="text-xl font-semibold text-gray-700">Get in <span className="text-blue-600">Touch</span></h3>
              <div className="mt-4">
                <iframe
                  title="Google Map"
                  className="w-full h-56 rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.462743519487!2d11.4832043!3d3.8641465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfac0d1d6781%3A0x420e55952e736069!2sSINARES!5e0!3m2!1sfr!2scm!4v1694008974582!5m2!1sfr!2scm"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              {/* Contact Details */}
              <ul className="mt-10 space-y-2">
                <li className="text-gray-700 flex items-center ">
                   <FaMapMarkerAlt className='mr-4 text-2xl text-blue-900' /> Yaoundé, Cameroun
                </li>
                <li className="text-gray-700 flex items-center">
                  <FaEnvelope className='mr-4 text-2xl text-blue-900'/>  info@sinares.com
                </li>
                <li className="text-gray-700 flex items-center">
                  <FaPhoneAlt className='mr-4 text-2xl text-blue-900'/> +237 6 74 09 32 53
                </li>
                <li className="text-gray-700 flex items-center">
                  <FaCheckCircle className='mr-4 text-2xl text-blue-900'/>   We Are Available
                </li>
              </ul>
            </div>
            <div>        
              <form onSubmit={handleSubmit} className="mt-4 space-y-4 p-10 ">
              <h3 className="text-xl font-semibold text-gray-700 align-center">Contact <span className="text-blue-600">Form</span></h3>
                <div className="flex items-center border-b-2 border-gray-400 p-2 focus:rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200">
                  <FaUser className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="flex-1 outline-none"
                    required
                  />
                </div>
                <div className="flex items-center border-b-2 border-gray-400 p-2 focus:rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200">
                  <FaEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 outline-none"
                    required
                  />
                </div>
                <div className="flex  border-b-2 border-gray-400 p-2 focus:rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200">
                  <FaComment className="text-gray-400 mr-2 mt-2"/>
                  <textarea
                    placeholder="Message for Me"
                    className="flex-1 outline-none"
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <div className="mt-4">
                  <ReCAPTCHA
                    sitekey="6Lc2KzgqAAAAANkCM26F7Nsyypvd24UjGNp3V6zh"
                    onChange={onRecaptchaChange}
                  />
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="bg-blue-900 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
                    disabled={!verified}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

      <div className="text-center text-slate-600 mt-8">
        © 2024 All rights reserved. Sinares Sarl
      </div>
    </div>
  );
};

export default Contact;
