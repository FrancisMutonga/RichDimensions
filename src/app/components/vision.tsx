"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const OurVision = () => {
  return (
    <section className="relative  py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-center text-teal-700">Our Vision</h2>
          <p className="text-gray-700 text-lg">
            We envision a future where auctions are seamless, transparent, and accessible to all. Through innovation and expertise, we aim to lead the industry with trust and efficiency.
          </p>
         
        </motion.div>
        
        {/* Image on Right */}
        <motion.div
          className="w-full md:w-1/2 h-80 rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/vision.png" 
            alt="Our Vision" 
            className=" object-cover mx-auto"
            height={400}
            width={400}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OurVision;