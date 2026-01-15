import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  { name: "GitHub", icon: Github, url: "#", handle: "@builder" },
  { name: "Twitter/X", icon: Twitter, url: "#", handle: "@builder" },
  { name: "LinkedIn", icon: Linkedin, url: "#", handle: "in/builder" },
  { name: "Email", icon: Mail, url: "mailto:hello@example.com", handle: "hello@example.com" },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto">
            If you're building the future, let's talk.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 hover-lift group flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <social.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="font-semibold">{social.name}</div>
                <div className="text-sm text-muted-foreground">{social.handle}</div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-card p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to collaborate?
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Whether it's a project idea, a collaboration, or just a chat about AI and building—I'm always excited to connect with fellow builders.
          </p>
          <Button variant="hero" size="xl" className="group">
            <Mail className="w-5 h-5" />
            Get in Touch
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
