import { useEffect, useState } from "react";
import { motion } from "framer-motion";


const words = ["Private Investigation", "Auctioneering", "Asset Recovery"];

export default function Home() {
  const [text, setText] = useState("Your Brand");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setText(words[index].slice(0, i));
      i++;
      if (i > words[index].length) clearInterval(typingInterval);
    }, 150);
    return () => clearInterval(typingInterval);
  }, [index]);

  return (
    <div className="relative w-full p-8 flex items-center justify-center overflow-hidden">
       {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-6">
        <motion.h1
          className="text-xl md:text-3xl lg:text-5xl font-extrabold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="block text-gray-600">Rich Dimensions Auctioneers</span>
          <span className="text-teal-700">{text}|</span>
        </motion.h1>
        <p className="mt-4 text-lg text-gray-300">Dignified Debt Solutions.</p>
      </div>
    </div>
  );
}
