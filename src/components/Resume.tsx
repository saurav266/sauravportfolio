import React, { useState } from 'react';
import { Download, FileText, Calendar, Building2, GraduationCap, ChevronDown, ChevronUp, Eye } from 'lucide-react';

const certificates = [
  {
  title: "Decode JAVA+DSA 1.0",
  institution: "Physics Wallah",
  date: "2025",
  description: "Successfully completed the Decode Java+DSA 1.0 Program.",
  image: "/certificate/java-Certificate_page-0001.png",
  certificateImage: "/certificate/java-Certificate_page-0001.png"  },
  {
    title: "Backend Development", 
    institution: "Physics Wallah",
    date: "2025",
    description: "Deep dive into advanced React patterns and best practices.",
    image: "/certificate/BAckend development certificate saurav-1.png",
    certificateImage: "/certificate/BAckend development certificate saurav-1.png"
  },
  {
    title: "C++",
    institution: "Physics Wallah",
    date: "2021",
    description: "Professional certification in C++ development.",
    image: "/certificate/c++-1.png",
    certificateImage: "/certificate/c++-1.png"
  },
  // {
  //   title: "AWS Cloud Practitioner",
  //   institution: "Amazon Web Services",
  //   date: "2022",
  //   description: "Cloud computing and AWS services certification.",
  //   image: "/certificates/aws-cert.jpg",
  //   certificateImage: "/certificates/aws-cert-full.jpg"
  // }
];

const Resume = () => {
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const visibleCertificates = showAllCertificates ? certificates : certificates.slice(0, 2);


  return (
    <section className="py-24 px-6 group transition-all duration-300 hover:bg-primary/5" id="resume">
      <div className="container max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-primary text-sm tracking-wider uppercase">Resume</span>
          <h2 className="text-3xl md:text-4xl font-bold">My Career Journey</h2>
          <p className="text-muted-foreground">
            A detailed view of my experiences, skills, and qualifications.
          </p>
          <a
            href="public\Saurav_Resume (2).jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md gap-2"
          >
            Download Resume
            <Download className="w-4 h-4" />
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Work Experience */}
          {/* <div className="space-y-6">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </div>
            <div className="space-y-4">
              <div className="glass p-6 rounded-lg space-y-3">
                <h4 className="font-semibold text-lg">Frontend Developer</h4>
                <p className="text-primary text-sm">Tech Solutions Inc.</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>2020 - Present</span>
                </div>
                <p className="text-muted-foreground">
                  Developed and maintained user interfaces for web applications using React and
                  related technologies. Collaborated with cross-functional teams to deliver
                  high-quality software solutions.
                </p>
              </div>

              <div className="glass p-6 rounded-lg space-y-3">
                <h4 className="font-semibold text-lg">Web Developer Intern</h4>
                <p className="text-primary text-sm">WebDev Studios</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>2019 - 2020</span>
                </div>
                <p className="text-muted-foreground">
                  Assisted in the development of web applications using HTML, CSS, and JavaScript.
                  Gained experience in responsive web design and front-end development workflows.
                </p>
              </div>
            </div>
          </div> */}

          {/* Education and Certificates */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Education & Certificates</h3>
            </div>
            <div className="space-y-6">
              <div className="glass p-6 rounded-lg space-y-3">
                <h4 className="font-semibold text-lg">Bachelor of Computer Science</h4>
                <p className="text-primary text-sm">Sarala Birla University,Ranchi</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>2023 - 2027</span>
                </div>
                <p className="text-muted-foreground">
                  Specialized in Software Engineering with a focus on web technologies and Problem solving.
                  Graduated with First Class Honours.
                </p>
              </div>

              {/* Certificates Section */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Professional Certificates</h4>
                <div className="space-y-4">
                  {visibleCertificates.map((cert, index) => (
                    <div 
                      key={index} 
                      className="glass p-6 rounded-lg space-y-4 fade-in" 
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="aspect-[16/9] overflow-hidden rounded-lg relative group">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <button
                            onClick={() => setSelectedCertificate(cert.certificateImage)}
                            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                            View Certificate
                          </button>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg">{cert.title}</h4>
                        <p className="text-primary text-sm">{cert.institution}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{cert.date}</span>
                        </div>
                        <p className="text-muted-foreground">{cert.description}</p>
                        <button
                          onClick={() => setSelectedCertificate(cert.certificateImage)}
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
                        >
                          <Eye className="w-4 h-4" />
                          View Certificate
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {certificates.length > 2 && (
                  <button
                    onClick={() => setShowAllCertificates(!showAllCertificates)}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mx-auto mt-6"
                  >
                    {showAllCertificates ? (
                      <>
                        Show Less
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Show More Certificates
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedCertificate(null)}>
          <div className="relative max-w-4xl w-full bg-background rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedCertificate} 
              alt="Certificate" 
              className="w-full h-auto"
            />
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
