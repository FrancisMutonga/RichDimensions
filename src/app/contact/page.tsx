"use client";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    error: "",
    success: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setFormStatus({
        error: "",
        success: "Your message has been successfully submitted.",
      });

      // Reset the form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      setFormStatus({
        error: "Failed to submit your message. Please try again later.",
        success: "",
      });
    }
  };

  return (
    <div className="mx-aut0 p-6 mt-20">
      {/* Contact Form Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-teal-700 text-center  mb-8">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <form
            className="bg-teal-600 p-8 space-y-8 rounded-xl shadow-lg"
            onSubmit={handleSubmit}
          >
            <h3 className="text-lg font-bold text-white text-left">
              Write us a Message
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Fields */}
              <div className="flex flex-col">
                <label
                  className="text-sm font-bold text-white"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="mt-2 p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-sm font-bold text-white"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="mt-2 p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-bold text-white" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-2 p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-white" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="mt-2 p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="flex flex-col mb-6">
              <label className="text-sm font-bold text-white" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="mt-2 p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 text-stone-300 rounded-lg hover:bg-red-700"
            >
              Submit
            </button>

            {/* Status Messages */}
            {formStatus.error && (
              <p className="text-red-500 mt-4">{formStatus.error}</p>
            )}
            {formStatus.success && (
              <p className="text-green-500 mt-4">{formStatus.success}</p>
            )}
          </form>

          {/* Contact Info Card */}
          <div className="bg-[url('/cantact.jpg')] bg-cover bg-center p-4 space-y-12 items-center rounded-lg shadow-lg flex items-center justify-center">
            <div className="bg-black/60 p-6 rounded-xl  ">
              <h3 className="text-2xl text-white font-bold text-left mb-6">
                Our Contact Information
              </h3>
              <div className="space-y-4 text-white">
                <div className="flex items-center">
                  <FaPhoneAlt className="text-white mr-4" />
                  <span className="text-lg">0755944533</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-white mr-4" />
                  <span className="text-lg">richdimensionsauctioneers@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-white mr-4" />

                  <span>
                  Shell Gikambura, 2nd Floor, Office C4
                  </span>
                </div>
                <div className="flex gap-12 items-center text-xl">
                  <a
                    href="https://www.facebook.com/people/Rich-Dimensions-Auctioneers/61575191037082/?rdid=QIUXe3JyCxMvSaMU&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Z9SngnvqE%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="text-white hover:text-blue-800" />
                  </a>
                  <a
                    href="https://wa.me/254755944533"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="text-white hover:text-blue-600" />
                  </a>
                  <a
                    href="https://www.instagram.com/richdimensions_auctioneers/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-white hover:text-blue-900" />
                  </a>
                  <a
                    href="https://www.tiktok.com/search?q=rich.dimensions.a&t=1746598252202"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTiktok className="text-white hover:text-blue-900" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </section>
    </div>
  );
};

export default ContactPage;
