"use client";
import React from "react";
import { motion } from "framer-motion";

const OurProcess = () => {
  return (
    <section className="relative  py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-teal-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Proven Auction Process
        </motion.h2>
        <motion.p
          className="mt-4 text-amber-500 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          From asset listing to final sale, we ensure a smooth and transparent process.
        </motion.p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white shadow-lg p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-teal-700">Step 1: Asset Evaluation</h3>
            <p className="text-gray-600 mt-2">We assess assets to determine their market value and auction viability.</p>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-teal-700">Step 2: Listing & Marketing</h3>
            <p className="text-gray-600 mt-2">We list and promote assets to attract serious buyers.</p>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-teal-700">Step 3: Auction & Sale</h3>
            <p className="text-gray-600 mt-2">We conduct the auction and ensure a smooth transaction for all parties.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
