import { motion } from "framer-motion";

const tools = [
  { name: "x64dbg", desc: "Dynamic Analysis" },
  { name: "Ghidra", desc: "Static Analysis" },
  { name: "IDA Free", desc: "Disassembler" },
  { name: "PE-bear", desc: "PE Analysis" },
  { name: "CyberChef", desc: "Data Decoding" },
  { name: "GCC", desc: "C Compiler" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6 section-glow">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-[10px] tracking-[0.5em] text-primary/60 font-mono block mb-3">
            03 — ABOUT
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-foreground">
            About <span className="text-secondary glow-text-magenta">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card/60 border border-border rounded-xl p-5 sm:p-7 corner-decor backdrop-blur-sm"
          >
            <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-4">
              Who Am I?
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-primary font-semibold">Batch_7z</span> — a cybersecurity student passionate about the offensive side of security.
                My journey started with C programming and quickly led me into the world of low-level systems and malware.
              </p>
              <p>
                Currently focused on malware analysis, reverse engineering,
                cryptography, and malware development — building skills one exploit at a time.
              </p>
              <p>
                This site is my personal space to document everything I learn — summaries, analyses, and notes from the trenches.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card/60 border border-border rounded-xl p-5 sm:p-7 backdrop-blur-sm"
          >
            <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-4">
              My Toolkit
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-muted/30 border border-border rounded-lg px-3 py-2.5 card-hover"
                >
                  <span className="text-xs font-semibold text-foreground block">{tool.name}</span>
                  <span className="text-[10px] text-muted-foreground">{tool.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
