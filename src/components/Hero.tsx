"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center py-20 bg-blue-50 dark:bg-gray-800">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Landing Page untuk Startup & SaaS</h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2">Tampilan modern, cepat, dan mudah disesuaikan.</p>
      <motion.button whileHover={{ scale: 1.1 }} className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md">
        Coba Sekarang
      </motion.button>
    </motion.section>
  );
};

export default Hero;
