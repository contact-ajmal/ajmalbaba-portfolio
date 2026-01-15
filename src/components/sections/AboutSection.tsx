import { motion } from "framer-motion";
import { Brain, Zap, Rocket, Lightbulb } from "lucide-react";

const timeline = [
  {
    year: "The Beginning",
    title: "Curiosity Sparked",
    description: "Started exploring code, fascinated by turning ideas into reality.",
    icon: Lightbulb,
  },
  {
    year: "The Shift",
    title: "Discovered AI",
    description: "AI changed everything—suddenly, building became 10x faster.",
    icon: Brain,
  },
  {
    year: "The Experiment",
    title: "Rapid Prototyping",
    description: "Started shipping projects in days, not months. Learning in public became the way.",
    icon: Zap,
  },
  {
    year: "Now",
    title: "Building the Future",
    description: "Creating at the intersection of AI and human creativity. Every day is an experiment.",
    icon: Rocket,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            The <span className="text-gradient">Story</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Not a resume. A narrative of curiosity, experimentation, and building in public.
          </p>
        </motion.div>

        {/* Philosophy Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 md:p-12 mb-20"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 text-primary mb-4">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Augmented Builder</h3>
              <p className="text-muted-foreground">
                AI didn't replace my creativity—it amplified it. Now I think in systems, build in sprints, and ship constantly.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/20 text-secondary mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Rapid Experimentation</h3>
              <p className="text-muted-foreground">
                Ideas are cheap. Execution is everything. I prototype fast, fail faster, and iterate until it works.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20 text-accent mb-4">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Learning in Public</h3>
              <p className="text-muted-foreground">
                Every project is a lesson. I share the wins, the failures, and everything in between.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Evolution Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                
                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-sm text-primary font-semibold">{item.year}</span>
                  <h3 className="text-2xl font-bold mt-1 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                
                {/* Spacer for other side */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
