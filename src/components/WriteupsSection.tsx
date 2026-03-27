import { motion } from "framer-motion";

interface WriteupCard {
  tags: string[];
  title: string;
  description: string;
  difficulty: "LOW" | "MEDIUM" | "HIGH" | "EXTREME";
}

const writeups: WriteupCard[] = [
  {
    tags: ["MALWARE", "PE"],
    title: "UPX Multi-Layer Unpacking — Manual Approach",
    description: "Manually unpacking a multi-layered UPX packed binary using x64dbg and reconstructing the IAT for static analysis.",
    difficulty: "HIGH",
  },
  {
    tags: ["REVERSE", "CRACKME"],
    title: "Anti-Debug Bypass — TLS Callbacks & Timing Checks",
    description: "Bypassing anti-debugging techniques including TLS callbacks, NtQueryInformationProcess, and RDTSC timing checks.",
    difficulty: "MEDIUM",
  },
  {
    tags: ["CRYPTO", "AES"],
    title: "Custom AES Implementation — Side Channel Attack",
    description: "Exploiting a vulnerable custom AES implementation through cache-timing side channel analysis to recover the encryption key.",
    difficulty: "EXTREME",
  },
  {
    tags: ["MALWARE", "C2"],
    title: "RAT Analysis — C2 Protocol Reverse Engineering",
    description: "Reverse engineering a custom RAT's C2 communication protocol to understand command structure and extract IOCs.",
    difficulty: "HIGH",
  },
  {
    tags: ["REVERSE", "DOTNET"],
    title: ".NET Obfuscation — ConfuserEx Deobfuscation",
    description: "Deobfuscating ConfuserEx protected .NET assemblies using de4dot and manual control flow deobfuscation techniques.",
    difficulty: "MEDIUM",
  },
  {
    tags: ["CRYPTO", "RSA"],
    title: "RSA Padding Oracle — Bleichenbacher Attack",
    description: "Implementing Bleichenbacher's adaptive chosen-ciphertext attack against PKCS#1 v1.5 to decrypt RSA ciphertext.",
    difficulty: "EXTREME",
  },
];

const difficultyColor: Record<string, string> = {
  LOW: "text-primary",
  MEDIUM: "text-glow-purple",
  HIGH: "text-accent",
  EXTREME: "text-destructive",
};

const WriteupsSection = () => {
  return (
    <section id="writeups" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs text-muted-foreground tracking-[0.3em]">03</span>
          <h2 className="font-display text-3xl font-bold mt-2 text-foreground">
            WRITEUPS
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            Field reports from malware labs & CTF challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {writeups.map((writeup, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-3">
                {writeup.tags.map((tag, j) => (
                  <span key={j} className="text-[10px] tracking-[0.15em] px-2 py-0.5 rounded bg-muted text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {writeup.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {writeup.description}
              </p>
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-bold tracking-[0.2em] ${difficultyColor[writeup.difficulty]}`}>
                  {writeup.difficulty}
                </span>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  READ →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WriteupsSection;
