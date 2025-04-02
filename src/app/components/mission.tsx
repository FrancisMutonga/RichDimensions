"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const OurMission = () => {
  return (
    <section className="relative  py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image on Left */}
        <motion.div
          className="w-full md:w-1/2 h-80 rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/mission.jpg" 
            alt="Our Mission" 
            className="mx-auto object-cover"
            width={500} 
            height={400} 
          />
        </motion.div>
        
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-center text-teal-700">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            Our mission is to revolutionize auctioneering by providing seamless, transparent, and highly efficient services. We strive to connect buyers and sellers with fairness and integrity.
          </p>
          <div className="flex gap-4">
            
            <Link href="contact" className="border border-gray-900 text-gray-900 px-6 py-3 rounded-lg shadow-md hover:bg-red-600 hover:text-white transition">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurMission;
