import React from 'react';
import {
  Code,
  Database,
  Layout,
  Server,
  Terminal,
  Cloud,
  GitBranch,
  Cpu
} from 'lucide-react';

const skillCategories = [
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS (EC2, S3, RDS, IAM)",
      "Docker",
      "Kubernetes",
      "CI/CD Pipelines",
      "Terraform (Infrastructure as Code)",
      "Linux & Bash Scripting"
    ]
  },
  {
    title: "Backend Engineering",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Microservices Architecture",
      "Authentication & Authorization",
      "API Integration"
    ]
  },
  {
    title: "Frontend Engineering",
    icon: Layout,
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "Responsive UI Design"
    ]
  },
  {
    title: "Programming",
    icon: Code,
    skills: [
      "Java (DSA)",
      "JavaScript",
      "TypeScript",
      "C++",
      "HTML5",
      "CSS3"
    ]
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Firebase"
    ]
  },
  {
    title: "Monitoring & Automation",
    icon: Cpu,
    skills: [
      "Git & GitHub",
      "GitHub Actions",
      "Jenkins (CI/CD)",
      "Log Monitoring",
      "System Optimization",
      "Deployment Automation"
    ]
  }
];

const Skills = () => {
  return (
    <section
      className="py-24 px-6 bg-secondary/30 group transition-all duration-300 hover:bg-secondary/50"
      id="skills"
    >
      <div className="container max-w-6xl mx-auto">

        {/* ===== SECTION HEADER ===== */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary text-sm tracking-wider uppercase">
            Technical Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            DevOps, Cloud & Full-Stack Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive experience across cloud infrastructure, DevOps automation,
            backend systems, and modern frontend development.
          </p>
        </div>

        {/* ===== SKILL GRID ===== */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="glass p-6 rounded-xl space-y-4 shadow-md hover:shadow-xl transition-all duration-300 hover:bg-primary/5"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-7 h-7 text-primary" />
                  <h3 className="font-semibold text-lg">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-muted-foreground flex items-center gap-2 text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
