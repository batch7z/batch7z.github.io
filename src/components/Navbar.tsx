import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary status-pulse" />
          <span className="font-display font-bold text-sm tracking-[0.3em] text-foreground">
            BATCH_7Z
          </span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#dashboard" className="text-xs tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">
            DASHBOARD
          </a>
          <a href="#writeups" className="text-xs tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">
            WRITEUPS
          </a>
          <a href="#about" className="text-xs tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">
            ABOUT
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
