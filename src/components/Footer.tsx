import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-14 px-6 bg-secondary/50">
      <div className="container max-w-6xl mx-auto">

        {/* ===== TOP GRID ===== */}
        <div className="grid gap-10 md:grid-cols-3 items-start">

          {/* LEFT: BRANDING */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Saurav Kumar
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              DevOps Engineer | Software Engineer | Full-Stack Developer
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Specializing in AWS, Kubernetes, Docker, CI/CD, Terraform,
              and modern web application development.
            </p>
          </div>

          {/* CENTER: NAVIGATION */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          {/* RIGHT: SOCIAL */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Me</h4>

            <div className="flex space-x-4">
              <a
                href="https://github.com/saurav266"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/saurav-kumar-05a7502a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:saurav840963@gmail.com"
                className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Open to DevOps, Cloud Engineering, and Full-Stack opportunities.
            </p>
          </div>

        </div>

        {/* ===== BOTTOM COPYRIGHT ===== */}
        <div className="mt-14 pt-6 border-t border-primary/10 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Saurav Kumar. Built with React & Deployed on Cloud.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
