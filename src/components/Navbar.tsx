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
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary status-pulse" />
          <span className="font-display font-bold text-base tracking-wider text-foreground">
            BATCH<span className="text-primary">_7Z</span>
          </span>
        </div>
        <div className="flex items-center gap-1">
          {[
            { label: "HOME", href: "#" },
            { label: "SKILLS", href: "#skills" },
            { label: "BLOG", href: "#blog" },
            { label: "ABOUT", href: "#about" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] tracking-[0.2em] text-muted-foreground hover:text-primary px-3 py-2 rounded-md hover:bg-muted/50 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
