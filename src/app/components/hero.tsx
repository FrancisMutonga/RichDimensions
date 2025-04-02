import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
    <div className="relative min-h-screen  text-white flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/bg.jpg" // Ensure you have this image in your public folder
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <motion.h1
          className="text-5xl font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 ,}}
        >
          <span className="text-gray-500">Rich Dimensions Auctioneers</span>
          <br />
          <span className="text-teal-700">{text}|</span>
        </motion.h1>
        <p className="mt-4 text-lg text-gray-300">Dignified Debt Solutions.</p>
      </div>
    </div>
  );
}