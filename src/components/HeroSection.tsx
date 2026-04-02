import { motion } from "framer-motion";
import avatarImg from "@/assets/batch-avatar.jpg";
import heroBanner from "@/assets/hero-banner.jpg";
import { Github, Linkedin, Instagram, Send, Twitter } from "lucide-react";

const socials = [
  { icon: Github, url: "https://github.com/batch7z", label: "GitHub" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/batch-7z/", label: "LinkedIn" },
  { icon: Twitter, url: "https://x.com/batch_7z", label: "X" },
  { icon: Send, url: "https://t.me/batch_7z", label: "Telegram" },
  { icon: Instagram, url: "https://www.instagram.com/batch_7z/", label: "Instagram" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col">
      {/* Banner Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Scan line */}
      <div className="absolute inset-0 scan-line pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pt-20 pb-12">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden gradient-border-purple glow-purple">
            <img src={avatarImg} alt="Batch_7z" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-center mb-3"
        >
          <span className="text-foreground">Batch</span>
          <span className="text-primary glow-text-purple">_7z</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-muted-foreground text-sm sm:text-base text-center max-w-md mb-6 leading-relaxed"
        >
          Cybersecurity Student — Malware Analysis, Reverse Engineering & Low-Level Development
        </motion.p>

        {/* Terminal prompt */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-card/80 border border-border rounded-lg px-4 py-2.5 backdrop-blur-sm corner-decor mb-8"
        >
          <span className="text-primary text-xs">batch7z</span>
          <span className="text-muted-foreground text-xs">@</span>
          <span className="text-secondary text-xs">kali</span>
          <span className="text-muted-foreground text-xs">:~$ </span>
          <span className="text-foreground text-xs">strings malware.exe | grep flag</span>
          <span className="text-primary cursor-blink ml-1 text-xs">▊</span>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex items-center gap-2 sm:gap-3"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-border bg-card/60 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px gradient-line" />
    </section>
  );
};

export default HeroSection;
