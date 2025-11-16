import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      degree: "BBIT (Bachelor in Business & Information Technology)",
      institution: "University of Engineering & Technology (UET), Lahore",
      period: "2021–2025",
      grade: "CGPA: 3.43",
      subjects: [
        "Web Dev",
        "Software Engineering",
        "DBMS",
        "DSA",
        "OOP",
        "Software QA",
        "Computer Networks",
        "DLD",
      ],
    },
    {
      degree: "Intermediate (Pre-Medical)",
      institution: "KIPS College, Lahore",
      period: "2021",
      grade: "91.27%",
      subjects: ["Biology", "Physics", "Chemistry"],
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-foreground leading-tight"
        >
          Education
        </motion.h2>

        {/* Timeline Wrapper */}
        <div className="relative space-y-10">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-primary/20 rounded-full"></div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative pl-16"
            >
              {/* Dot */}
              <span className="absolute left-0 top-6 w-5 h-5 bg-primary rounded-full ring-4 ring-primary/30"></span>

              <Card className="p-6 hover:shadow-xl transition-all duration-300 border border-primary/10 rounded-2xl bg-background/60 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shadow-sm">
                      <GraduationCap className="h-7 w-7 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    {/* Degree + Institution */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {edu.degree}
                        </h3>
                        <p className="text-primary font-medium">
                          {edu.institution}
                        </p>
                      </div>

                      <div className="text-sm text-muted-foreground md:text-right mt-2 md:mt-0">
                        <p>{edu.period}</p>
                        <p className="font-medium text-foreground">
                          {edu.grade}
                        </p>
                      </div>
                    </div>

                    {/* Subjects */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {edu.subjects.map((subject, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
