import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl font-bold text-gradient"
          >
            ./builder
          </motion.a>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm text-muted-foreground text-center"
          >
            Building at the speed of imagination. Powered by AI.
          </motion.p>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-muted-foreground"
          >
            © {currentYear} All rights reserved.
          </motion.p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-1/4 w-64 h-32 bg-primary/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 right-1/4 w-48 h-24 bg-secondary/10 rounded-full blur-[60px]" />
    </footer>
  );
}
