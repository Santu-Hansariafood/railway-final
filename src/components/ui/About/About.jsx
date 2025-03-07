"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AboutImage from "../../../../public/images/slide1.jpg";
import SplashCursor from "@/components/animation/SplashCursor/SplashCursor";

const About = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-16 space-y-8 md:space-y-0 md:space-x-10 overflow-hidden">
      {/* SplashCursor Animation in Background */}
      <div className="absolute inset-0 z-0">
        <SplashCursor />
      </div>

      {/* Background Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Left Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 text-center md:text-left space-y-4 z-10"
      >
        <h2 className="text-4xl font-bold text-white drop-shadow-lg">About Us</h2>
        <p className="text-lg leading-relaxed text-white drop-shadow-md">
          We are committed to providing the best services in the industry. Our
          team consists of dedicated professionals striving for excellence.
        </p>
        <p className="text-lg leading-relaxed text-white drop-shadow-md">
          With years of experience and a deep understanding of the industry, we
          bring efficiency, reliability, and innovation to every project we
          undertake.
        </p>
        <p className="text-lg leading-relaxed text-white drop-shadow-md">
          Our mission is to continuously improve and deliver quality solutions
          that exceed expectations.
        </p>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 flex justify-center z-10"
      >
        <Image
          src={AboutImage}
          alt="About Us Image"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default About;
