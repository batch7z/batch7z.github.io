import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BookOpen, Clock } from "lucide-react";

const skills = [
  {
    title: "Malware Development",
    description: "Building and understanding how malware works from the inside — shellcode, loaders, and evasion techniques.",
    icon: "🦠",
    color: "text-accent",
    bgColor: "bg-accent/5 border-accent/15 hover:border-accent/40",
    level: "Learning",
    hasSummaries: false,
    summaryCount: 0,
  },
  {
    title: "Malware Analysis",
    description: "Analyzing malware samples to understand their behavior, persistence mechanisms, and C2 communication.",
    icon: "🔬",
    color: "text-primary",
    bgColor: "bg-primary/5 border-primary/15 hover:border-primary/40",
    level: "Learning",
    hasSummaries: false,
    summaryCount: 0,
  },
  {
    title: "Reverse Engineering",
    description: "Disassembling and debugging binaries using tools like x64dbg, Ghidra, and IDA to uncover hidden logic.",
    icon: "⚙️",
    color: "text-secondary",
    bgColor: "bg-secondary/5 border-secondary/15 hover:border-secondary/40",
    level: "Learning",
    hasSummaries: false,
    summaryCount: 0,
  },
  {
    title: "Cryptography",
    description: "Studying encryption algorithms — AES, RSA, XOR — and how to break or implement them securely.",
    icon: "🔐",
    color: "text-primary",
    bgColor: "bg-primary/5 border-primary/15 hover:border-primary/40",
    level: "Learning",
    hasSummaries: false,
    summaryCount: 0,
  },
  {
    title: "C Programming",
    description: "Low-level programming — pointers, memory management, and system-level development for security tools.",
    icon: "💻",
    color: "text-accent",
    bgColor: "bg-accent/5 border-accent/15 hover:border-accent/40",
    level: "Active",
    hasSummaries: true,
    summaryCount: 1,
    blogAnchor: "#blog",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] tracking-[0.4em] text-muted-foreground font-mono">01</span>
            <div className="h-px w-12 bg-border" />
          </div>
          <h2 className="font-display text-4xl font-bold text-foreground">
            What I'm <span className="text-primary">Learning</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative border rounded-xl p-6 transition-all duration-500 ${skill.hasSummaries ? "cursor-pointer" : "cursor-default"} ${skill.bgColor}`}
              onClick={() => {
                if (skill.hasSummaries && skill.blogAnchor) {
                  document.querySelector(skill.blogAnchor)?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{skill.icon}</span>
                <span className={`text-[9px] tracking-[0.3em] font-mono px-2 py-1 rounded-full border border-current/20 ${skill.color}`}>
                  {skill.level.toUpperCase()}
                </span>
              </div>
              <h3 className={`font-display text-lg font-semibold mb-2 ${skill.color}`}>
                {skill.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {skill.description}
              </p>

              {/* Hover badge */}
              <div className={`flex items-center gap-1.5 transition-all duration-300 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 ${skill.hasSummaries ? "text-primary" : "text-muted-foreground"}`}>
                {skill.hasSummaries ? (
                  <>
                    <BookOpen className="w-3.5 h-3.5" />
                    <span className="text-[10px] tracking-wider font-mono">
                      {skill.summaryCount} {skill.summaryCount === 1 ? "SUMMARY" : "SUMMARIES"} AVAILABLE
                    </span>
                  </>
                ) : (
                  <>
                    <Clock className="w-3.5 h-3.5" />
                    <span className="text-[10px] tracking-wider font-mono">COMING SOON</span>
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
