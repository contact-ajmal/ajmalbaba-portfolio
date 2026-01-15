import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronRight, Zap, Timer, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProjectStatus = "live" | "prototype" | "experiment" | "progress";
type ProjectMood = "fun" | "serious" | "wild" | "experimental";
type BuildSpeed = "24h" | "weekend" | "long-term";

interface Project {
  id: string;
  name: string;
  tagline: string;
  status: ProjectStatus;
  mood: ProjectMood;
  speed: BuildSpeed;
  complexity: number; // 1-5
  techStack: string[];
  problem: string;
  idea: string;
  solution: string;
  learnings: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: "1",
    name: "NeuroDash",
    tagline: "Real-time AI analytics dashboard",
    status: "live",
    mood: "serious",
    speed: "weekend",
    complexity: 4,
    techStack: ["React", "TypeScript", "TailwindCSS", "OpenAI", "Supabase"],
    problem: "AI outputs are overwhelming and hard to visualize in real-time.",
    idea: "What if you could see AI thinking patterns as beautiful, flowing data?",
    solution: "Built a real-time visualization dashboard that turns AI responses into interactive charts and flows.",
    learnings: "WebSocket performance is tricky. Learned to batch updates for smooth animations.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "2",
    name: "PromptForge",
    tagline: "Craft prompts that actually work",
    status: "prototype",
    mood: "experimental",
    speed: "24h",
    complexity: 3,
    techStack: ["Next.js", "GPT-4", "Prisma", "Vercel"],
    problem: "Most people write terrible prompts and wonder why AI gives bad results.",
    idea: "A playground where you can test, iterate, and perfect your prompts.",
    solution: "Interactive prompt builder with side-by-side comparison and scoring.",
    learnings: "Prompt engineering is part science, part art. Built in evaluation metrics helped users learn faster.",
    liveUrl: "#",
  },
  {
    id: "3",
    name: "VoiceCanvas",
    tagline: "Speak your designs into existence",
    status: "experiment",
    mood: "wild",
    speed: "weekend",
    complexity: 5,
    techStack: ["React", "Whisper API", "DALL-E", "Framer Motion"],
    problem: "Designers and non-designers alike struggle to quickly visualize ideas.",
    idea: "What if you could describe a UI and watch it appear?",
    solution: "Voice-to-design tool that generates layouts from natural language descriptions.",
    learnings: "Voice input needs careful UX. Confirmation steps prevented costly API calls.",
    githubUrl: "#",
  },
  {
    id: "4",
    name: "TaskFlow AI",
    tagline: "Your AI-powered productivity companion",
    status: "progress",
    mood: "serious",
    speed: "long-term",
    complexity: 4,
    techStack: ["React", "Node.js", "PostgreSQL", "LangChain"],
    problem: "Task management apps are either too simple or too complex.",
    idea: "An AI that learns how you work and adapts to your flow.",
    solution: "Building an intelligent task manager that prioritizes based on your patterns.",
    learnings: "In progress—currently exploring context-aware prioritization algorithms.",
  },
  {
    id: "5",
    name: "PixelPet",
    tagline: "Your tamagotchi for coding habits",
    status: "live",
    mood: "fun",
    speed: "24h",
    complexity: 2,
    techStack: ["React", "LocalStorage", "CSS Animations"],
    problem: "Maintaining coding streaks is boring.",
    idea: "What if your commit history fed a cute virtual pet?",
    solution: "A browser extension with a pixel pet that grows based on GitHub activity.",
    learnings: "Fun projects get more engagement. Gamification works!",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "6",
    name: "SynthWave",
    tagline: "AI-generated ambient soundscapes",
    status: "experiment",
    mood: "experimental",
    speed: "weekend",
    complexity: 3,
    techStack: ["Web Audio API", "TensorFlow.js", "React"],
    problem: "Focus music is repetitive and distracting.",
    idea: "Generate infinite, unique ambient soundscapes using AI.",
    solution: "A web app that creates never-repeating background music based on your mood selection.",
    learnings: "Audio synthesis in the browser is more powerful than expected.",
    liveUrl: "#",
  },
];

const statusConfig: Record<ProjectStatus, { label: string; class: string }> = {
  live: { label: "Live", class: "badge-live" },
  prototype: { label: "Prototype", class: "badge-prototype" },
  experiment: { label: "Experiment", class: "badge-experiment" },
  progress: { label: "In Progress", class: "badge-progress" },
};

const moodFilters: { value: ProjectMood | "all"; label: string }[] = [
  { value: "all", label: "All Moods" },
  { value: "fun", label: "🎮 Fun" },
  { value: "serious", label: "💼 Serious" },
  { value: "wild", label: "🚀 Wild" },
  { value: "experimental", label: "🧪 Experimental" },
];

const speedFilters: { value: BuildSpeed | "all"; label: string }[] = [
  { value: "all", label: "Any Speed" },
  { value: "24h", label: "⚡ Built in 24h" },
  { value: "weekend", label: "🗓️ Weekend Hack" },
  { value: "long-term", label: "🏗️ Long-term" },
];

export function ProjectsSection() {
  const [selectedMood, setSelectedMood] = useState<ProjectMood | "all">("all");
  const [selectedSpeed, setSelectedSpeed] = useState<BuildSpeed | "all">("all");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (selectedMood !== "all" && project.mood !== selectedMood) return false;
    if (selectedSpeed !== "all" && project.speed !== selectedSpeed) return false;
    return true;
  });

  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-secondary/30 mb-6">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground">Project Universe</span>
          </div>
          <h2 className="section-title">
            The <span className="text-gradient">Experiment Lab</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Every project is a journey from problem to solution. Explore the experiments.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2">
            {moodFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedMood(filter.value)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                  selectedMood === filter.value
                    ? "bg-primary text-primary-foreground glow-primary"
                    : "glass-card hover:bg-muted/50"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="w-px h-8 bg-border hidden sm:block" />
          <div className="flex flex-wrap gap-2">
            {speedFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedSpeed(filter.value)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                  selectedSpeed === filter.value
                    ? "bg-secondary text-secondary-foreground glow-secondary"
                    : "glass-card hover:bg-muted/50"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div
                  className={cn(
                    "glass-card hover-lift cursor-pointer overflow-hidden",
                    expandedProject === project.id && "ring-2 ring-primary"
                  )}
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                >
                  {/* Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className={cn("px-3 py-1 rounded-full text-xs font-medium", statusConfig[project.status].class)}>
                            {statusConfig[project.status].label}
                          </span>
                          {/* Complexity Indicator */}
                          <div className="flex gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <div
                                key={i}
                                className={cn(
                                  "w-2 h-2 rounded-full",
                                  i < project.complexity ? "bg-primary" : "bg-muted"
                                )}
                              />
                            ))}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold">{project.name}</h3>
                        <p className="text-muted-foreground">{project.tagline}</p>
                      </div>
                      <ChevronRight
                        className={cn(
                          "w-5 h-5 text-muted-foreground transition-transform duration-300",
                          expandedProject === project.id && "rotate-90"
                        )}
                      />
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-md bg-muted/50 text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Timer className="w-4 h-4" />
                        {project.speed === "24h" ? "24 hours" : project.speed === "weekend" ? "Weekend" : "Long-term"}
                      </span>
                      <span className="flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        {project.mood}
                      </span>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-border/50 pt-6 space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-1">The Problem</h4>
                            <p className="text-sm text-muted-foreground">{project.problem}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-secondary mb-1">The Idea</h4>
                            <p className="text-sm text-muted-foreground">{project.idea}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-accent mb-1">The Solution</h4>
                            <p className="text-sm text-muted-foreground">{project.solution}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-1">📚 Learnings</h4>
                            <p className="text-sm text-muted-foreground">{project.learnings}</p>
                          </div>

                          {/* Actions */}
                          <div className="flex gap-3 pt-2">
                            {project.liveUrl && (
                              <Button variant="outline" size="sm" className="gap-2">
                                <ExternalLink className="w-4 h-4" />
                                Live Demo
                              </Button>
                            )}
                            {project.githubUrl && (
                              <Button variant="ghost" size="sm" className="gap-2">
                                <Github className="w-4 h-4" />
                                Source
                              </Button>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 glass-card"
          >
            <p className="text-muted-foreground">No projects match these filters. Try a different combination!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
