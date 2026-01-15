import { motion } from "framer-motion";
import { FlaskConical, AlertTriangle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiments = [
  {
    name: "AI Dungeon Master",
    description: "GPT-powered D&D game master that adapts to player choices",
    status: "Chaotic",
    tech: ["GPT-4", "React", "WebSocket"],
  },
  {
    name: "Code Poetry",
    description: "Generates haikus from your git commit history",
    status: "Absurd",
    tech: ["Git API", "NLP", "Art"],
  },
  {
    name: "Mood-Based Playlist",
    description: "Analyzes your code style to generate matching Spotify playlists",
    status: "Wild",
    tech: ["Spotify API", "Sentiment Analysis"],
  },
  {
    name: "Terminal Tarot",
    description: "CLI-based tarot readings with AI-generated interpretations",
    status: "Mystical",
    tech: ["CLI", "GPT-4", "ASCII Art"],
  },
];

export function PlaygroundSection() {
  return (
    <section id="playground" className="relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-accent/30 mb-6">
            <FlaskConical className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Experimental Zone</span>
          </div>
          <h2 className="section-title">
            The <span className="text-gradient">Playground</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Not everything here is polished—that's the point.
          </p>
        </motion.div>

        {/* Warning Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 p-4 rounded-xl bg-accent/10 border border-accent/20 mb-8"
        >
          <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0" />
          <p className="text-sm text-muted-foreground">
            <span className="text-accent font-semibold">Heads up:</span> These are unfinished, weird, or just-for-fun projects. Expect bugs, chaos, and occasional brilliance.
          </p>
        </motion.div>

        {/* Experiments Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {experiments.map((experiment, index) => (
            <motion.div
              key={experiment.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover-lift group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="px-2 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">
                    {experiment.status}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-bold mb-2">{experiment.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{experiment.description}</p>
              <div className="flex flex-wrap gap-2">
                {experiment.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 rounded-md bg-muted/50 text-xs text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Got a weird idea? Let's build it together.</p>
          <Button variant="outline" size="lg">
            Suggest an Experiment
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
