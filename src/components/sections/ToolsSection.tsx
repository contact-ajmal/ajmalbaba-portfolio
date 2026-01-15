import { motion } from "framer-motion";
import { Bot, Cpu, Zap, Database, Code2, Layers, Terminal, Sparkles } from "lucide-react";

const tools = [
  {
    name: "GPT-4 & Claude",
    category: "AI Models",
    icon: Bot,
    description: "Core reasoning engines for code generation and problem-solving",
    color: "primary",
  },
  {
    name: "Cursor & Copilot",
    category: "AI Coding",
    icon: Code2,
    description: "AI-powered IDE extensions for 10x development speed",
    color: "secondary",
  },
  {
    name: "React & TypeScript",
    category: "Frontend",
    icon: Layers,
    description: "Type-safe, component-based UI development",
    color: "accent",
  },
  {
    name: "Node.js & Python",
    category: "Backend",
    icon: Terminal,
    description: "Server-side logic and API development",
    color: "primary",
  },
  {
    name: "Supabase & PostgreSQL",
    category: "Database",
    icon: Database,
    description: "Real-time data with powerful querying",
    color: "secondary",
  },
  {
    name: "Vercel & Railway",
    category: "Deployment",
    icon: Cpu,
    description: "Instant deployments and edge computing",
    color: "accent",
  },
];

const colorMap = {
  primary: "bg-primary/20 text-primary border-primary/30",
  secondary: "bg-secondary/20 text-secondary border-secondary/30",
  accent: "bg-accent/20 text-accent border-accent/30",
};

const glowMap = {
  primary: "group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]",
  secondary: "group-hover:shadow-[0_0_30px_hsl(var(--secondary)/0.3)]",
  accent: "group-hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)]",
};

export function ToolsSection() {
  return (
    <section id="tools" className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/30 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Control Panel</span>
          </div>
          <h2 className="section-title">
            The <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="section-subtitle mx-auto">
            AI doesn't replace skill—it amplifies it. Here's how I accelerate development.
          </p>
        </motion.div>

        {/* Dashboard-style Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group glass-card p-6 hover-lift transition-shadow duration-300 ${glowMap[tool.color as keyof typeof glowMap]}`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl border ${colorMap[tool.color as keyof typeof colorMap]}`}>
                  <tool.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{tool.category}</span>
                  <h3 className="text-lg font-bold mt-1">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{tool.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 glass-card p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">How AI Changes Everything</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10x</div>
              <p className="text-muted-foreground">Faster prototyping with AI-assisted code generation</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">∞</div>
              <p className="text-muted-foreground">Unlimited ideas explored when execution cost is near zero</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <p className="text-muted-foreground">Always-on pair programmer that never gets tired</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
