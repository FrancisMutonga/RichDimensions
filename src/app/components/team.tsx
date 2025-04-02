"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "John Mwaura",
      role: "Chief Auctioneer",
      image: "/team1.jpg",
    },
    {
      name: "Jane Smith",
      role: "Legal Advisor",
      image: "/teamg.jpg",
    },
    {
      name: "Robert Brown",
      role: "Operations Manager",
      image: "/team2.jpg",
    },
  ];

  return (
    <section className="relative  py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-teal-700"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Team
        </motion.h2>
        

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-gray-300 to-stone-300  p-6 rounded-xl shadow-md flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Image
                src={member.image}
                alt={member.name}
                className="mx-auto rounded-full object-cover shadow-lg"
                height={100}
                width={100}
              />
              <h3 className="mt-4 text-xl font-semibold text-teal-700">
                {member.name}
              </h3>
              <p className="text-gray-600 mt-2">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
