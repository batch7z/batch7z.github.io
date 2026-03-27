import { motion } from "framer-motion";
import avatarImg from "@/assets/batch-avatar.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center hex-grid noise overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-40 right-16 w-px h-48 bg-gradient-to-b from-transparent via-secondary/15 to-transparent" />
      <div className="absolute bottom-32 left-1/4 w-24 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

      {/* Scan line */}
      <div className="absolute inset-0 scan-line" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-primary/50" />
                <span className="text-[11px] tracking-[0.4em] text-primary font-mono">
                  CYBERSECURITY STUDENT
                </span>
              </div>

              <h1 className="font-display text-5xl md:text-7xl font-black leading-[0.95] mb-6">
                <span className="text-foreground">I Break</span>
                <br />
                <span className="text-primary glow-text-green">Malware</span>
                <br />
                <span className="text-foreground">Apart</span>
                <span className="text-secondary">.</span>
              </h1>

              <p className="text-muted-foreground text-sm leading-relaxed max-w-md mb-8">
                طالب بتعلم تحليل البرمجيات الخبيثة، الهندسة العكسية، تطوير الـ Malware، 
                والتشفير. بوثق رحلتي وبشارك ملخصاتي هنا.
              </p>

              {/* Terminal prompt */}
              <div className="bg-card/80 border border-border rounded-lg px-5 py-3 inline-block backdrop-blur-sm corner-decor">
                <span className="text-primary text-xs">batch7z</span>
                <span className="text-muted-foreground text-xs">@</span>
                <span className="text-secondary text-xs">kali</span>
                <span className="text-muted-foreground text-xs">:~$ </span>
                <span className="text-foreground text-xs">file suspicious.exe</span>
                <span className="text-primary cursor-blink ml-1 text-xs">▊</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Avatar + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end gap-6"
          >
            {/* Avatar */}
            <div className="relative animate-float-slow">
              <div className="w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden gradient-border-green glow-green relative z-10">
                <img src={avatarImg} alt="Batch_7z" className="w-full h-full object-cover" />
              </div>
              {/* Decorative frame */}
              <div className="absolute -inset-3 rounded-3xl border border-primary/10" />
              <div className="absolute -inset-6 rounded-3xl border border-primary/5" />
            </div>

            {/* Status cards */}
            <div className="flex gap-3">
              {[
                { label: "STATUS", value: "LEARNING", color: "text-primary" },
                { label: "FOCUS", value: "MALWARE", color: "text-accent" },
              ].map((item) => (
                <div key={item.label} className="bg-card/60 border border-border rounded-lg px-4 py-2 backdrop-blur-sm">
                  <span className="text-[9px] tracking-[0.3em] text-muted-foreground block">{item.label}</span>
                  <span className={`text-xs font-bold ${item.color}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px gradient-line" />
    </section>
  );
};

export default HeroSection;
