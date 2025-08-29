"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="  rounded-xl py-10 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <motion.h2
         initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl text-teal-700 font-bold leading-tight"
        >
          Looking to Buy or Sell at Auction?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-gray-800 max-w-2xl mx-auto"
        >
         Join Rich Dimensions Auctioneers for trusted, transparent, and 
          professional auction services. From prime properties to vehicles 
          and office assets — we connect buyers and sellers with ease.</motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="inline-block bg-white text-teal-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-secondary transition duration-300"
          >
            Contact Us Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
