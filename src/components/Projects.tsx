import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "HomeLinker",
      subtitle: "Real Estate Web App",
      description:
        "A full-stack real estate platform featuring secure authentication using Google OAuth & JWT. Includes complete CRUD APIs for property listings integrated with MongoDB Atlas, ensuring reliable and scalable performance.",
      technologies: ["MERN", "Tailwind CSS", "Google OAuth", "JWT"],
      links: [
        {
          label: "Live Demo",
          url: "https://classy-creponne-f6e3ff.netlify.app/",
          icon: ExternalLink,
        },
        {
          label: "Frontend Repo",
          url: "https://github.com/marryamabid/frontend-realestate",
          icon: Github,
        },
        {
          label: "Backend Repo",
          url: "https://github.com/marryamabid/backend-realestate",
          icon: Github,
        },
      ],
    },
    {
      title: "SmartLearn",
      subtitle: "School Management Dashboard",
      description:
        "Full-stack admin dashboard built with Next.js & TypeScript. Features reusable UI components, clean architecture, PostgreSQL database with Prisma ORM, Clerk authentication, and Docker setup for streamlined local development.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma ORM",
        "Clerk Auth",
      ],
      links: [
        {
          label: "Live Demo",
          url: "https://school-management-app-sigma.vercel.app/",
          icon: ExternalLink,
        },
        {
          label: "GitHub Repo",
          url: "https://github.com/marryamabid/School-Management-App",
          icon: Github,
        },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-foreground"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="p-6 flex flex-col h-full rounded-2xl hover:shadow-2xl shadow-md transition-all bg-background/60 backdrop-blur-sm">
                {/* Title Section */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-muted-foreground mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="px-3 py-1 text-sm rounded-full"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.links.map((link, idx) => (
                    <Button
                      key={idx}
                      variant={idx === 0 ? "default" : "outline"}
                      size="sm"
                      className="gap-2 hover:scale-[1.03] transition-all"
                      asChild
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <link.icon className="h-4 w-4" />
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
