import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const terminalLines = [
  { type: "cmd", text: "$ batch7z-scan --target sample.exe --mode deep" },
  { type: "info", text: "[*] Loading PE headers..." },
  { type: "info", text: "[*] Analyzing import table..." },
  { type: "warn", text: "[!] Suspicious API calls detected: VirtualAlloc, WriteProcessMemory" },
  { type: "info", text: "[*] Extracting strings..." },
  { type: "success", text: "[+] Unpacked UPX layer 1/3" },
  { type: "success", text: "[+] Unpacked UPX layer 2/3" },
  { type: "success", text: "[+] Unpacked UPX layer 3/3" },
  { type: "warn", text: "[!] C2 callback detected: 185.xx.xx.xx:4444" },
  { type: "success", text: "[+] Analysis complete. Report saved." },
];

const portScanData = [
  { port: "4444", service: "c2-handler", status: "OPEN" },
  { port: "8080", service: "http-proxy", status: "OPEN" },
  { port: "443", service: "https", status: "OPEN" },
  { port: "3389", service: "rdp", status: "FILTERED" },
  { port: "22", service: "ssh", status: "CLOSED" },
];

const malwareSamples = [
  "▸ trojan_banker.dll",
  "▸ ransomware_v3.exe",
  "▸ rootkit_driver.sys",
  "▸ keylogger_x64.bin",
  "▸ rat_client.exe",
  "▸ cryptominer.elf",
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
      case "info":
      default: return "text-muted-foreground";
    }
  };

  return (
    <section id="dashboard" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs text-muted-foreground tracking-[0.3em]">02</span>
          <h2 className="font-display text-3xl font-bold mt-2 text-foreground">
            LIVE_DASHBOARD
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            Real-time malware analysis simulation
          </p>
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

          {/* Port scan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-lg p-4"
          >
            <h3 className="text-xs font-bold tracking-[0.2em] text-primary mb-4">PORT_SCAN</h3>
            <div className="space-y-2">
              {portScanData.map((item, i) => (
                <div key={i} className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{item.port}/tcp</span>
                  <span className="text-foreground">{item.service}</span>
                  <span className={
                    item.status === "OPEN" ? "text-primary" :
                    item.status === "FILTERED" ? "text-accent" :
                    "text-muted-foreground"
                  }>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Malware samples */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-lg p-4"
          >
            <h3 className="text-xs font-bold tracking-[0.2em] text-accent mb-4">SAMPLE_LAB</h3>
            <div className="space-y-2">
              {malwareSamples.map((sample, i) => (
                <div key={i} className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  {sample}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 bg-card border border-border rounded-lg p-4"
          >
            <h3 className="text-xs font-bold tracking-[0.2em] text-glow-purple mb-4">SKILL_MATRIX</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: "Malware Analysis", level: 70 },
                { name: "Reverse Engineering", level: 60 },
                { name: "Cryptography", level: 65 },
                { name: "PE Analysis", level: 55 },
              ].map((skill, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-xs text-muted-foreground">{skill.name}</span>
                  <div className="h-1 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className="h-full bg-gradient-to-r from-primary to-glow-purple rounded-full"
                    />
                  </div>
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
