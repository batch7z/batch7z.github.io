import { motion } from "framer-motion";
import { BookOpen, Clock } from "lucide-react";

const skills = [
  {
    title: "C Programming",
    description: "Low-level programming — pointers, memory management, and system-level development.",
    icon: "💻",
    level: "Active",
    hasSummaries: true,
    summaryCount: 8,
    blogAnchor: "#blog",
  },
  {
    title: "Malware Analysis",
    description: "Analyzing malware samples to understand behavior, persistence, and C2 communication.",
    icon: "🔬",
    level: "Learning",
    hasSummaries: false,
    summaryCount: 0,
  },
  {
    title: "Reverse Engineering",
    description: "Disassembling and debugging binaries using x64dbg, Ghidra, and IDA.",
    icon: "⚙️",
    level: "Learning",
    hasSummaries: false,
    summaryCount: 0,
  },
  {
    title: "Malware Development",
    description: "Building shellcode, loaders, and evasion techniques from the inside.",
    icon: "🦠",
    level: "Learning",
    hasSummaries: false,
    summaryCount: 0,
  },
  {
    title: "Cryptography",
    description: "Studying AES, RSA, XOR — and how to break or implement them.",
    icon: "🔐",
    level: "Learning",
    hasSummaries: false,
    summaryCount: 0,
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-20 sm:py-28 px-4 sm:px-6 section-glow">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-[10px] tracking-[0.5em] text-primary/60 font-mono block mb-3">
            01 — SKILLS
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-foreground">
            What I'm <span className="text-primary glow-text-purple">Learning</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative bg-card/60 border border-border rounded-xl p-5 sm:p-6 card-hover backdrop-blur-sm ${
                skill.hasSummaries ? "cursor-pointer" : ""
              }`}
              onClick={() => {
                if (skill.hasSummaries && skill.blogAnchor) {
                  document.querySelector(skill.blogAnchor)?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl">{skill.icon}</span>
                <span className={`text-[8px] tracking-[0.3em] font-mono px-2 py-1 rounded-full border ${
                  skill.level === "Active"
                    ? "text-primary border-primary/30 bg-primary/5"
                    : "text-muted-foreground border-border"
                }`}>
                  {skill.level.toUpperCase()}
                </span>
              </div>

              <h3 className="font-display text-sm sm:text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {skill.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed mb-4">
                {skill.description}
              </p>

              <div className={`flex items-center gap-1.5 text-[10px] tracking-wider font-mono transition-all duration-300 ${
                skill.hasSummaries
                  ? "text-primary"
                  : "text-muted-foreground/50 opacity-0 group-hover:opacity-100"
              }`}>
                {skill.hasSummaries ? (
                  <>
                    <BookOpen className="w-3 h-3" />
                    <span>{skill.summaryCount} SUMMARIES</span>
                  </>
                ) : (
                  <>
                    <Clock className="w-3 h-3" />
                    <span>COMING SOON</span>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
