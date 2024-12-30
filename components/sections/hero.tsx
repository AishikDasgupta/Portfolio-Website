"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

export function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1557186817-c11ad50d5b41?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Transition */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImage === index ? 1 : 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Overlay for Contrast */}
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            <TypeAnimation
              sequence={[
                "Hello, this is Aishik Dasgupta",
                1000,
                "I'm a Full Stack Developer",
                1000,
                "I build modern web applications",
                1000,
                "I create amazing user experiences",
                1000,
                "I help businesses grow",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg max-w-2xl mx-auto mt-4"
        >
          I specialize in building exceptional digital experiences. Currently, I
          am focused on building accessible, human-centered products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6"
        >
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
