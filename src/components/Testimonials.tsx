"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Testimonials = () => {
  return (
    <section className="py-20 text-center bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Apa Kata Mereka?</h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2">Testimoni dari pengguna.</p>

      <Swiper spaceBetween={20} slidesPerView={1} className="mt-8 w-full max-w-lg mx-auto">
        <SwiperSlide className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
          <p className="text-gray-700 dark:text-gray-300">"Template ini sangat membantu! Desainnya modern dan mudah dikustomisasi."</p>
          <h4 className="font-semibold text-gray-800 dark:text-white mt-4">Andi Rahman</h4>
          <p className="text-gray-500 text-sm">CEO TechStartup</p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
