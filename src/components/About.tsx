import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-foreground"
        >
          About Me
        </motion.h2>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 rounded-2xl bg-background/60 backdrop-blur-sm shadow-lg border border-primary/10">
            <p className="text-lg text-foreground leading-relaxed">
              BBIT graduate from UET Lahore with hands-on experience in
              full-stack development using MERN Stack, Next.js, Python, APIs,
              and modern UI frameworks. Skilled in building scalable,
              user-focused applications with secure authentication systems, REST
              APIs, databases, and responsive interfaces. Passionate about
              writing clean, efficient code and continuously learning new
              technologies.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
