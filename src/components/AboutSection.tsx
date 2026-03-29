import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-16 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] tracking-[0.4em] text-muted-foreground font-mono">03</span>
            <div className="h-px w-12 bg-border" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            About <span className="text-accent">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-5 sm:p-8 corner-decor"
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
                Currently focused on learning malware analysis, reverse engineering, 
                cryptography, and malware development — building skills one exploit at a time.
              </p>
              <p>
                This site is my personal space to document everything I learn — summaries, analyses, and notes from the trenches.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-5 sm:p-8"
          >
            <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-4">
              My Toolkit
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {[
                { name: "x64dbg", desc: "Dynamic Analysis" },
                { name: "Ghidra", desc: "Static Analysis" },
                { name: "IDA Free", desc: "Disassembler" },
                { name: "PE-bear", desc: "PE Analysis" },
                { name: "CyberChef", desc: "Data Decoding" },
                { name: "GCC", desc: "C Compiler" },
              ].map((tool) => (
                <div key={tool.name} className="bg-muted/30 border border-border rounded-lg px-3 py-2 sm:py-2.5">
                  <span className="text-[10px] sm:text-xs font-semibold text-foreground block">{tool.name}</span>
                  <span className="text-[9px] sm:text-[10px] text-muted-foreground">{tool.desc}</span>
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
