'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <motion.section 
      className="w-full py-12 px-6 md:px-12 flex flex-col md:flex-row items-center gap-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
     
      
      {/* Right Side - Animated Image */}
      <motion.div 
        className="md:w-1/2 flex justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image 
          src="/inv.jpg" 
          alt="About Us" 
          width={500} 
          height={400} 
          className=" shadow-xl"
        />
      </motion.div>
       {/* Left Side - Text */}
       <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-700 ">Who We Are</h2>
        <p className="mt-4 text-gray-500 ">
        With a commitment to integrity and transparency, we offer expert auctioneering services, coupled with discreet and compliant debt recovery and investigation solutions.
         We are dedicated to building trust and delivering results.
        </p>
        <Link href="/about">
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            className="mt-6 bg-red-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-red-700 transition"
          >
            Learn More
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
};

export default AboutUs;
