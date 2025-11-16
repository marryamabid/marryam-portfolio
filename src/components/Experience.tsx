import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Section Leader",
      organization: "Stanford Code in Place",
      location: "Remote",
      period: "Apr – Jun 2025",
      description: [
        "Mentored 8–12 students in an introductory Python course",
        "Conducted weekly coding sessions",
        "Guided students in algorithmic thinking and assignments",
      ],
    },
    {
      title: "Dev Weekends Fellowship 2025",
      organization: "Fellowship Program",
      location: "Remote",
      period: "Jun – Sep 2025",
      description: [
        "Completed 3-month fellowship (MERN + DSA)",
        "Built full-stack apps",
        "Solved 100+ LeetCode problems",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-foreground leading-tight"
        >
          Experience
        </motion.h2>

        {/* Timeline List */}
        <div className="relative space-y-10">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-primary/20 rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative pl-16"
            >
              {/* Dot */}
              <motion.span
                whileHover={{ scale: 1.2 }}
                className="absolute left-0 top-6 w-5 h-5 bg-primary rounded-full ring-4 ring-primary/30"
              ></motion.span>

              <Card className="p-6 hover:shadow-xl transition-all duration-300 border border-primary/10 rounded-2xl bg-background/60 backdrop-blur-sm">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary text-lg font-medium">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1 text-sm text-muted-foreground md:text-right mt-3 md:mt-0">
                    <div className="flex items-center gap-1 md:justify-end">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 md:justify-end">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description List with staggered animation */}
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  {exp.description.map((point, idx) => (
                    <motion.li
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      className="flex items-start gap-2 text-foreground"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
