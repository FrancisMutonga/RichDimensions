"use client";
import React from "react";
import { motion } from "framer-motion";


const WhyUs = () => {
  return (
    <section className="relative  py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-teal-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why RDA?
        </motion.h2>
        
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {/* Experience & Expertise */}
          <motion.div
            className="bg-gray-100 shadow-lg p-6 rounded-xl flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <i className="bx bx-trophy text-5xl text-amber-500"></i>
            <h3 className="text-xl font-semibold text-teal-700 mt-4">Experience & Expertise</h3>
            <p className="text-gray-600 mt-2">
              Decades of industry experience ensure smooth and efficient auctioneering.
            </p>
          </motion.div>

          {/* Transparency & Integrity */}
          <motion.div
            className="bg-gray-100 shadow-lg p-6 rounded-xl flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <i className="bx bx-shield-quarter text-5xl text-amber-500"></i>
            <h3 className="text-xl font-semibold text-teal-700 mt-4">Transparency & Integrity</h3>
            <p className="text-gray-600 mt-2">
              We conduct auctions with the highest level of honesty and accountability.
            </p>
          </motion.div>

          {/* Client-Centric Approach */}
          <motion.div
            className="bg-gray-100 shadow-lg p-6 rounded-xl flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <i className="bx bx-user-check text-5xl text-amber-500"></i>
            <h3 className="text-xl font-semibold text-teal-700 mt-4">Client-Centric Approach</h3>
            <p className="text-gray-600 mt-2">
              Dedicated to providing the best service tailored to our clients’ needs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
