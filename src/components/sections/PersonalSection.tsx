import { motion } from "framer-motion";
import { Quote, ArrowRight, Lightbulb } from "lucide-react";

const principles = [
  "Ship first, perfect later.",
  "Every bug is a lesson.",
  "AI is a tool, not a crutch.",
  "Curiosity is a superpower.",
  "Build in public, learn faster.",
];

const currentlyExploring = [
  "Autonomous AI agents for development workflows",
  "Voice-first interfaces",
  "WebGPU for ML in the browser",
  "Building in public on X/Twitter",
];

export function PersonalSection() {
  return (
    <section id="personal" className="relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Behind the <span className="text-gradient">Code</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A glimpse into how I think and what drives me.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Builder Principles */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Quote className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Builder Principles</h3>
            </div>
            <ul className="space-y-4">
              {principles.map((principle, index) => (
                <motion.li
                  key={principle}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-lg">{principle}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Currently Exploring */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-accent animate-pulse-glow" />
              <h3 className="text-2xl font-bold">Currently Exploring</h3>
            </div>
            <ul className="space-y-4">
              {currentlyExploring.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-2 h-2 mt-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Featured Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block">
            <Quote className="absolute -top-6 -left-6 w-12 h-12 text-primary/20" />
            <blockquote className="text-2xl md:text-3xl font-bold max-w-3xl mx-auto leading-relaxed">
              "The best time to build was yesterday.
              <br />
              <span className="text-gradient">The second best time is now.</span>"
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
