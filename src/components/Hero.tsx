import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative group transition-all duration-300 hover:bg-primary/5">
      
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent group-hover:from-primary/10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative space-y-6 text-center max-w-3xl mx-auto"
      >

        {/* Small Intro */}
        <span className="inline-block text-primary/80 text-sm tracking-wider uppercase">
          Welcome to my portfolio
        </span>

        {/* MAIN SEO H1 */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Saurav Kumar
          <span className="text-primary block mt-3 text-2xl md:text-3xl font-semibold">
            DevOps Engineer & Software Engineer
          </span>
        </h1>

        {/* SEO Optimized Description */}
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
          DevOps Engineer and Software Engineer with hands-on experience in 
          AWS cloud infrastructure, Kubernetes orchestration, Docker, CI/CD 
          automation, Terraform, and modern web application development using 
          React and TypeScript.
        </p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a 
            href="#projects" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            View My Projects
          </a>
        </motion.div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#about">
          <ArrowDown className="w-6 h-6 text-primary" />
        </a>
      </motion.div>

    </section>
  );
};

export default Hero;
