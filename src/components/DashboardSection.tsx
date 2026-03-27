import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const terminalLines = [
  { type: "cmd", text: "$ batch7z-scan --target sample.exe --mode deep" },
  { type: "info", text: "[*] Loading PE headers..." },
  { type: "info", text: "[*] Analyzing import table..." },
  { type: "warn", text: "[!] Suspicious API calls: VirtualAlloc, WriteProcessMemory" },
  { type: "info", text: "[*] Extracting strings..." },
  { type: "success", text: "[+] Unpacked UPX layer 1/3" },
  { type: "success", text: "[+] Unpacked UPX layer 2/3" },
  { type: "success", text: "[+] Unpacked UPX layer 3/3" },
  { type: "warn", text: "[!] C2 callback detected: 185.xx.xx.xx:4444" },
  { type: "success", text: "[+] Analysis complete." },
];

const learningTopics = [
  { name: "Malware Development", icon: "🦠" },
  { name: "Malware Analysis", icon: "🔬" },
  { name: "Reverse Engineering", icon: "⚙️" },
  { name: "Cryptography", icon: "🔐" },
  { name: "C Programming", icon: "💻" },
];

const DashboardSection = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => (prev >= terminalLines.length ? 0 : prev + 1));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const getLineColor = (type: string) => {
    switch (type) {
      case "cmd": return "text-primary";
      case "warn": return "text-accent";
      case "success": return "text-glow-purple";
      default: return "text-muted-foreground";
    }
  };

  return (
    <section id="dashboard" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs text-muted-foreground tracking-[0.3em]">02</span>
          <h2 className="font-display text-3xl font-bold mt-2 text-foreground">LIVE_DASHBOARD</h2>
          <p className="text-muted-foreground text-sm mt-2">محاكاة تحليل البرمجيات الخبيثة</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-card border border-border rounded-lg overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
              <div className="w-2.5 h-2.5 rounded-full bg-accent" />
              <div className="w-2.5 h-2.5 rounded-full bg-glow-purple" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="text-xs text-muted-foreground ml-2">batch7z@lab:~</span>
            </div>
            <div className="p-4 h-64 overflow-hidden">
              {terminalLines.slice(0, visibleLines).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`text-xs leading-6 ${getLineColor(line.type)}`}
                >
                  {line.text}
                </motion.div>
              ))}
              <span className="text-primary cursor-blink text-xs">█</span>
            </div>
          </motion.div>

          {/* Learning path */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-lg p-4"
          >
            <h3 className="text-xs font-bold tracking-[0.2em] text-primary mb-4">LEARNING_PATH</h3>
            <div className="space-y-3">
              {learningTopics.map((topic, i) => (
                <div key={i} className="flex items-center gap-3 text-xs">
                  <span>{topic.icon}</span>
                  <span className="text-muted-foreground">{topic.name}</span>
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary status-pulse" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-card border border-border rounded-lg p-4"
          >
            <h3 className="text-xs font-bold tracking-[0.2em] text-glow-purple mb-4">PROGRESS_TRACKER</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { name: "C Language", level: 60 },
                { name: "Malware Dev", level: 40 },
                { name: "Malware Analysis", level: 45 },
                { name: "Reverse Eng.", level: 35 },
                { name: "Cryptography", level: 50 },
              ].map((skill, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-[10px] text-muted-foreground">{skill.name}</span>
                  <div className="h-1 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.15 }}
                      className="h-full bg-gradient-to-r from-primary to-glow-purple rounded-full"
                    />
                  </div>
                  <span className="text-[10px] text-muted-foreground">{skill.level}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
