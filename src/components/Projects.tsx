
import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    title: "CureWrapPlus",
    description: "A healthcare-focused web platform designed to manage medical services, patient interactions, and digital health workflows with a user-friendly interface.",
    image: "https://images.unsplash.com/photo-1580281657521-6c6d1c25b8f9?auto=format&fit=crop&w=800&q=80",
    link: "https://www.curewrapplus.com/", // add live URL if deployed
    github: "https://github.com/saurav266"
  },
  {
    title: "ApkaKitchen",
    description: "An online food ordering and kitchen management application that connects users with local kitchens, enabling seamless ordering and real-time updates.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    link: "https://www.apkakitchen.com/", // add live URL if deployed
    github: "https://github.com/saurav266"
  },
  {
    title: "Microservices Architecture Project",
    description: "A scalable microservices-based system implementing REST APIs, service-to-service communication, and modular backend design using modern DevOps practices.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    link: "#",
    github: "https://github.com/saurav266"
  }
];


const Projects = () => {
  return (
    <section className="py-24 px-6 bg-secondary/50 group transition-all duration-300 hover:bg-secondary/70" id="projects">
      <div className="container max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-primary text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground">A selection of my recent work and collaborations</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-card transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="glass absolute inset-x-0 bottom-0 p-6 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  
                  <div className="pt-2 flex items-center gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary text-sm hover:underline"
                    >
                      <span>View Demo</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary text-sm hover:underline"
                    >
                      <span>GitHub</span>
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
