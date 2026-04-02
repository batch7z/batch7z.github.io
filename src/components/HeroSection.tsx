import { motion } from "framer-motion";
import avatarImg from "@/assets/batch-avatar.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center hex-grid noise overflow-hidden">
      <div className="absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden md:block" />
      <div className="absolute top-40 right-16 w-px h-48 bg-gradient-to-b from-transparent via-secondary/15 to-transparent hidden md:block" />
      <div className="absolute bottom-32 left-1/4 w-24 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent hidden md:block" />
      <div className="absolute inset-0 scan-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="h-px w-8 bg-primary/50" />
                <span className="text-[10px] sm:text-[11px] tracking-[0.4em] text-primary font-mono">
                  CYBERSECURITY STUDENT
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] mb-4 sm:mb-6">
                <span className="text-foreground">I Break</span>
                <br />
                <span className="text-primary glow-text-purple">Malware</span>
                <br />
                <span className="text-foreground">Apart</span>
                <span className="text-secondary">.</span>
              </h1>

              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-md mb-6 sm:mb-8">
                طالب بتعلم تحليل البرمجيات الخبيثة، الهندسة العكسية، تطوير الـ Malware، 
                والتشفير. بوثق رحلتي وبشارك ملخصاتي هنا.
              </p>

              <div className="bg-card/80 border border-border rounded-lg px-3 sm:px-5 py-2.5 sm:py-3 inline-block backdrop-blur-sm corner-decor">
                <span className="text-primary text-[10px] sm:text-xs">batch7z</span>
                <span className="text-muted-foreground text-[10px] sm:text-xs">@</span>
                <span className="text-secondary text-[10px] sm:text-xs">kali</span>
                <span className="text-muted-foreground text-[10px] sm:text-xs">:~$ </span>
                <span className="text-foreground text-[10px] sm:text-xs">file suspicious.exe</span>
                <span className="text-primary cursor-blink ml-1 text-[10px] sm:text-xs">▊</span>
              </div>
            </motion.div>
          </div>

          {/* Avatar + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end gap-4 sm:gap-6"
          >
            <div className="relative animate-float-slow">
              <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden gradient-border-purple glow-purple relative z-10">
                <img src={avatarImg} alt="Batch_7z" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -inset-3 rounded-3xl border border-primary/10" />
              <div className="absolute -inset-6 rounded-3xl border border-primary/5 hidden sm:block" />
            </div>

            <div className="flex gap-3">
              {[
                { label: "STATUS", value: "LEARNING", color: "text-primary" },
                { label: "FOCUS", value: "MALWARE", color: "text-accent" },
              ].map((item) => (
                <div key={item.label} className="bg-card/60 border border-border rounded-lg px-3 sm:px-4 py-2 backdrop-blur-sm">
                  <span className="text-[8px] sm:text-[9px] tracking-[0.3em] text-muted-foreground block">{item.label}</span>
                  <span className={`text-[10px] sm:text-xs font-bold ${item.color}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px gradient-line" />
    </section>
  );
};

export default HeroSection;
