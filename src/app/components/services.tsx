"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Services = () => {
  return (
    <section className="relative py-20 px-6 ">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-2xl font-bold text-teal-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {/* Property Auctions */}
          <motion.div
            className="bg-gray-200 shadow-lg p-6 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src="/gavel.png"
              alt="Property Auctions"
              className="w-full h-48 object-cover rounded-lg"
              width={300}
              height={200}
            />
            <h3 className="text-xl font-semibold text-teal-800 mt-4">
              Property Auctions
            </h3>
            <p className="text-gray-500 mt-2">
              We facilitate the sale of commercial and residential properties at
              competitive rates.
            </p>
          </motion.div>

          {/* Asset Recovery */}
          <motion.div
            className="bg-gray-200 shadow-lg p-6 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Image
              src="/recoveryp.png"
              alt="Asset Recovery"
              className="w-full h-48 object-cover rounded-lg"
              width={300}
              height={200}
            />
            <h3 className="text-xl font-semibold text-teal-800 mt-4">
              Asset Recovery
            </h3>
            <p className="text-gray-500 mt-2">
              Efficient and lawful recovery of seized assets with high success
              rates.
            </p>
          </motion.div>

          {/* Court-Directed Sales */}
          <motion.div
            className="bg-gray-200 shadow-lg p-6 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Image
              src="/sales.jpg"
              alt="Court-Directed Sales"
              className="w-full h-48 object-cover rounded-lg"
              width={300}
              height={200}
            />
            <h3 className="text-xl font-semibold text-teal-800 mt-4">
              Court-Directed Sales
            </h3>
            <p className="text-gray-500 mt-2">
              Handling court-mandated property and asset auctions with
              transparency.
            </p>
          </motion.div>
          {/* Private Investigations */}
          <motion.div
            className="bg-gray-200 shadow-lg p-6 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Image
              src="/magglass.png"
              alt="Private Investigations"
              className="mx-auto object-cover rounded-lg"
              width={300}
              height={200}
            />
            <h3 className="text-xl font-semibold text-teal-800 mt-4">
              Private Investigations
            </h3>
            <p className="text-gray-500 mt-2">
              Discreet and professional investigative services tailored to your
              needs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
