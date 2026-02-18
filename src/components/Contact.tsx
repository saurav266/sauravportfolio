import React from 'react';
import { Mail, Github, Linkedin, Instagram, FileText, Download } from 'lucide-react';

const Contact = () => {
  return (
    <section
      className="py-24 px-6 group transition-all duration-300 hover:bg-primary/5"
      id="contact"
    >
      <div className="container max-w-6xl mx-auto">

        {/* ===== SECTION HEADER ===== */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-primary text-sm tracking-wider uppercase">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Build Scalable Systems Together
          </h2>
          <p className="text-muted-foreground text-lg">
            Open to DevOps Engineer, Cloud Engineer, and Full-Stack Developer opportunities.
            I’m passionate about automation, cloud-native infrastructure, and scalable application development.
          </p>
        </div>

        {/* ===== CONTACT CARDS ===== */}
        <div className="mt-14 flex flex-wrap justify-center gap-6">

          <a
            href="mailto:saurav840963@gmail.com"
            className="glass px-6 py-4 rounded-xl flex items-center gap-3 hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Mail className="w-5 h-5 text-primary" />
            <span>Email Me</span>
          </a>

          <a
            href="https://github.com/saurav266"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-6 py-4 rounded-xl flex items-center gap-3 hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Github className="w-5 h-5 text-primary" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/saurav-kumar-05a7502a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-6 py-4 rounded-xl flex items-center gap-3 hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Linkedin className="w-5 h-5 text-primary" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://leetcode.com/u/saurav840963/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-6 py-4 rounded-xl flex items-center gap-3 hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <FileText className="w-5 h-5 text-primary" />
            <span>LeetCode</span>
          </a>

          {/* Optional Resume Download */}
          <a
            href="/Saurav_Kumar_Resume.pdf"
            download
            className="glass px-6 py-4 rounded-xl flex items-center gap-3 hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Download className="w-5 h-5 text-primary" />
            <span>Download Resume</span>
          </a>

        </div>

        {/* ===== AVAILABILITY STATUS ===== */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            📍 Based in India | Available for Remote & On-site Roles
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
