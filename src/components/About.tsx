import React from 'react';
import { Briefcase, Code, Rocket, Cloud, Server, Database } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 px-6 group transition-all duration-300 hover:bg-primary/5" id="about">
      <div className="container max-w-6xl mx-auto">

        {/* ===== SECTION HEADER ===== */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            DevOps Engineer, Software Engineer & Full-Stack Developer
          </h2>
        </div>

        {/* ===== MAIN GRID ===== */}
        <div className="grid gap-12 md:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">

            <p className="text-muted-foreground text-lg leading-relaxed">
              Hi, I'm <strong>Saurav Kumar</strong> — a DevOps Engineer, 
              Software Engineer, and Full-Stack Developer specializing in 
              building scalable cloud-native applications and automated 
              infrastructure solutions.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I design and deploy production-ready systems using 
              <strong> AWS, Kubernetes, Docker, CI/CD pipelines, Terraform, and Linux</strong>. 
              I also build full-stack applications using 
              <strong> React, TypeScript, Node.js, and modern backend architectures</strong>.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              My expertise bridges development and operations — enabling faster 
              deployments, reliable infrastructure, microservices architecture, 
              REST APIs, and performance-optimized applications.
            </p>

          </div>

          {/* RIGHT PROFILE IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              <img
                src="/saurav-uploads/saurav-software-engineer.png"
                alt="Saurav Kumar - Software Engineer, DevOps Engineer and Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ===== SKILL CARDS ===== */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">

          <div className="glass p-6 rounded-lg space-y-3">
            <Cloud className="w-8 h-8 text-primary" />
            <h3 className="font-semibold text-lg">Cloud & DevOps</h3>
            <p className="text-muted-foreground">
              AWS (EC2, S3, RDS, IAM), Kubernetes, Docker, CI/CD automation, 
              Infrastructure as Code with Terraform.
            </p>
          </div>

          <div className="glass p-6 rounded-lg space-y-3">
            <Code className="w-8 h-8 text-primary" />
            <h3 className="font-semibold text-lg">Frontend Development</h3>
            <p className="text-muted-foreground">
              React, TypeScript, Tailwind CSS, modern UI architecture, 
              responsive and high-performance web applications.
            </p>
          </div>

          <div className="glass p-6 rounded-lg space-y-3">
            <Database className="w-8 h-8 text-primary" />
            <h3 className="font-semibold text-lg">Backend & APIs</h3>
            <p className="text-muted-foreground">
              Node.js, Express, REST APIs, authentication, database integration 
              (SQL & NoSQL), and microservices architecture.
            </p>
          </div>

        </div>

        {/* ===== PROFESSIONAL VISION ===== */}
        <div className="mt-24 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">
            Professional Vision
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            My mission is to build secure, automated, and scalable systems 
            that integrate robust backend services, modern frontend interfaces, 
            and resilient cloud infrastructure — delivering high-quality 
            end-to-end solutions.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
