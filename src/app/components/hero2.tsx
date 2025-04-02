"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutIntro = () => {
  return (
    <section className="relative  py-10 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-teal-700">Who We Are</h2>
          <p className="text-gray-600 text-lg">
            At RDA Auctioneers, we are committed to delivering professional and transparent auctioneering services. With years of experience, we specialize in asset recovery, real estate auctions, and court-mandated sales.
          </p>
         
        </motion.div>
        
        {/* Image with Animation */}
        <motion.div 
          className="w-full h-80  rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image 
            src="/who.jpg" 
            alt="About Us" 
            className="mx-auto object-cover"
            width={500} 
          height={400} 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutIntro;
