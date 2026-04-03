import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import quranAudio from "@/assets/ينهار_ابيض_علي_جمال_النهاوند_ياشيخ_مصطفي___مقطع_لايستوعبه_عقل_----(256k).mp3";

const QuranPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrent] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => {
      setProgress((a.currentTime / (a.duration || 1)) * 100);
      setCurrent(fmt(a.currentTime));
    };
    const onMeta = () => setDuration(fmt(a.duration));
    const onEnd = () => setIsPlaying(false);
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("ended", onEnd);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onMeta);
      a.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (isPlaying) a.pause();
    else a.play();
    setIsPlaying(!isPlaying);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const a = audioRef.current;
    if (!a) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    a.currentTime = pct * a.duration;
  };

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-[10px] tracking-[0.5em] text-primary/60 font-mono block mb-3">
            🕌 QURAN
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">
            مقطع <span className="text-secondary glow-text-magenta">قرآني</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card/60 border border-border rounded-xl p-5 sm:p-6 backdrop-blur-sm"
        >
          <audio ref={audioRef} src={quranAudio} preload="metadata" />

          <div className="text-center mb-4" dir="rtl">
            <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1">
              ينهار أبيض على جمال النهاوند
            </h3>
            <p className="text-[10px] sm:text-xs text-muted-foreground">
              الشيخ مصطفى إسماعيل — مقطع لا يستوعبه عقل
            </p>
          </div>

          {/* Progress bar */}
          <div
            className="w-full h-1.5 bg-muted/30 rounded-full cursor-pointer mb-3 group"
            onClick={seek}
          >
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-primary/50" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] text-muted-foreground font-mono">{currentTime}</span>
            <span className="text-[10px] text-muted-foreground font-mono">{duration}</span>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center">
            <button
              onClick={toggle}
              className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              {isPlaying ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary ml-0.5">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuranPlayer;
