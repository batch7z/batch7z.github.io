import { motion } from "framer-motion";
import avatarImg from "@/assets/batch-avatar.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center grid-bg scanlines overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30 animate-float"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative mb-8"
      >
        <div className="absolute inset-0 rounded-2xl bg-primary/20 pulse-ring" />
        <div className="w-36 h-36 rounded-2xl overflow-hidden gradient-border glow-cyan">
          <img src={avatarImg} alt="Batch_7z" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="font-display text-4xl md:text-6xl font-bold text-center tracking-tight mb-4"
      >
        <span className="glow-text-cyan text-primary">Batch_7z</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="text-muted-foreground text-sm md:text-base text-center max-w-lg mb-2"
      >
        طالب في مجال الأمن السيبراني — أتعلم وأشارك ملخصاتي
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="flex flex-wrap items-center justify-center gap-3 mb-8"
      >
        {["Malware Dev", "Malware Analysis", "Reverse Engineering", "Cryptography"].map((skill) => (
          <span
            key={skill}
            className="text-[10px] tracking-[0.15em] px-3 py-1 rounded border border-border bg-muted/50 text-muted-foreground"
          >
            {skill}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="bg-muted/50 border border-border rounded-lg px-6 py-3 backdrop-blur-sm"
      >
        <span className="text-primary text-sm">root@batch7z:~$</span>
        <span className="text-foreground text-sm ml-2">strings malware.exe | grep -i flag</span>
        <span className="text-primary cursor-blink ml-1">█</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.3em] text-muted-foreground">SCROLL_DOWN</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
