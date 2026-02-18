import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    title: "AI-Driven Self-Healing DevOps Pipeline",
    description:
      "Built an intelligent CI/CD pipeline capable of detecting system failures using log monitoring and anomaly detection. Implemented automated rollback and recovery mechanisms within Kubernetes clusters to minimize downtime. Containerized services with Docker, deployed on AWS, and provisioned infrastructure using Terraform. Focused on automation, reliability engineering, and cloud-native architecture.",
    tech: "AWS | Kubernetes | Docker | Terraform | CI/CD | Python | Monitoring | Microservices",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    link: "#",
    github: "https://github.com/saurav266"
  },
  {
    title: "Microservices Architecture with DevOps Automation",
    description:
      "Architected a scalable microservices-based backend system with modular REST APIs and service-to-service communication. Containerized applications using Docker and orchestrated with Kubernetes. Automated deployments using CI/CD pipelines and managed infrastructure via Infrastructure as Code (Terraform). Designed for scalability, high availability, and cloud-native best practices.",
    tech: "Docker | Kubernetes | CI/CD | Terraform | Node.js | React | AWS",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    link: "#",
    github: "https://github.com/saurav266"
  },
  {
    title: "CureWrapPlus – Healthcare Management Platform",
    description:
      "Developed a full-stack healthcare platform enabling appointment scheduling, patient interaction, and digital medical workflows. Built responsive frontend using React and integrated secure backend APIs. Focused on performance optimization, authentication systems, and cloud-ready deployment strategy.",
    tech: "React | TypeScript | Node.js | REST APIs | Cloud Deployment",
    image:
      "https://images.unsplash.com/photo-1580281657521-6c6d1c25b8f9?auto=format&fit=crop&w=800&q=80",
    link: "https://www.curewrapplus.com/",
    github: "https://github.com/saurav266"
  },
  {
    title: "ApkaKitchen – Online Food Ordering Platform",
    description:
      "Built a full-stack food ordering and kitchen management system connecting customers with local kitchens. Implemented real-time order tracking, secure authentication, backend APIs, and scalable database design. Applied DevOps practices for deployment and performance optimization.",
    tech: "React | Node.js | Express | Database | CI/CD | Cloud Hosting",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    link: "https://www.apkakitchen.com/",
    github: "https://github.com/saurav266"
  }
];

const Projects = () => {
  return (
    <section
      className="py-24 px-6 bg-secondary/50 group transition-all duration-300 hover:bg-secondary/70"
      id="projects"
    >
      <div className="container max-w-6xl mx-auto">

        {/* ===== SECTION HEADER ===== */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary text-sm tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured DevOps & Full-Stack Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of production-ready systems demonstrating cloud architecture,
            automation, and scalable application development.
          </p>
        </div>

        {/* ===== PROJECT GRID ===== */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-card shadow-md transition-all duration-300 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="font-semibold text-xl">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <p className="text-xs text-primary font-medium">
                  {project.tech}
                </p>

                {/* Links */}
                <div className="flex items-center gap-6 pt-2">
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary text-sm hover:underline"
                    >
                      View Demo
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary text-sm hover:underline"
                  >
                    GitHub
                    <Github className="w-4 h-4" />
                  </a>
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
