"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-8 h-8 rounded-full border border-[var(--border)] bg-[var(--bg-subtle)] flex items-center justify-center text-[var(--fg-muted)] opacity-50" />
        );
    }

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="relative p-1.5 md:p-2 rounded-full border border-[var(--border)] bg-[var(--bg-subtle)] hover:bg-[var(--bg-card)] text-[var(--fg-muted)] hover:text-[var(--fg)] transition-all duration-300 flex items-center justify-center group flex-shrink-0 cursor-pointer shadow-sm"
        >
            <motion.div
                key={theme}
                initial={{ scale: 0.6, rotate: -30, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0.6, rotate: 30, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex items-center justify-center"
            >
                {theme === "dark" ? (
                    <Sun size={15} className="text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
                ) : (
                    <Moon size={15} className="text-indigo-600 group-hover:-rotate-12 transition-transform duration-300" />
                )}
            </motion.div>
        </button>
    );
}
