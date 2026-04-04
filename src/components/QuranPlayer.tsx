import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import quranAudio from "@/assets/ينهار_ابيض_علي_جمال_النهاوند_ياشيخ_مصطفي___مقطع_لايستوعبه_عقل_----(256k).mp3";

interface Surah {
  id: string;
  name: string;
  reciter: string;
  src: string;
}

const surahs: Surah[] = [
  {
    id: "nahawand",
    name: "ينهار أبيض على جمال النهاوند",
    reciter: "الشيخ مصطفى إسماعيل",
    src: quranAudio,
  },
];

const QuranPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrent] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [selectedSurah, setSelectedSurah] = useState<Surah>(surahs[0]);
  const [showList, setShowList] = useState(false);

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
  }, [selectedSurah]);

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

  const selectSurah = (surah: Surah) => {
    const a = audioRef.current;
    if (a) {
      a.pause();
      setIsPlaying(false);
    }
    setSelectedSurah(surah);
    setProgress(0);
    setCurrent("0:00");
    setDuration("0:00");
    setShowList(false);
  };

  const downloadSurah = () => {
    const link = document.createElement("a");
    link.href = selectedSurah.src;
    link.download = `${selectedSurah.name}.mp3`;
    link.click();
  };

  return (
    <section id="quran" className="relative py-20 sm:py-28 px-4 sm:px-6">
      {/* Decorative bg */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-4">
            <span className="text-lg">🕌</span>
            <span className="text-[10px] tracking-[0.3em] text-primary/80 font-mono uppercase">
              Holy Quran
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            القرآن <span className="text-primary">الكريم</span>
          </h2>
          <p className="text-xs text-muted-foreground mt-2">
            استمع وحمّل تلاوات قرآنية مختارة
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card/80 border border-border/50 rounded-2xl p-5 sm:p-8 backdrop-blur-xl shadow-2xl shadow-primary/5"
        >
          <audio ref={audioRef} src={selectedSurah.src} preload="metadata" key={selectedSurah.id} />

          {/* Surah selector button */}
          <button
            onClick={() => setShowList(!showList)}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-muted/20 border border-border/50 hover:border-primary/30 transition-all mb-5 group"
          >
            <div className="text-right flex-1" dir="rtl">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {selectedSurah.name}
              </p>
              <p className="text-[10px] text-muted-foreground mt-0.5">
                {selectedSurah.reciter}
              </p>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`text-muted-foreground transition-transform ml-3 ${showList ? "rotate-180" : ""}`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {/* Surah list dropdown */}
          <AnimatePresence>
            {showList && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mb-5"
              >
                <div className="space-y-1 max-h-48 overflow-y-auto rounded-xl border border-border/50 bg-muted/10 p-2">
                  {surahs.map((surah) => (
                    <button
                      key={surah.id}
                      onClick={() => selectSurah(surah)}
                      className={`w-full text-right p-3 rounded-lg transition-all ${
                        selectedSurah.id === surah.id
                          ? "bg-primary/15 border border-primary/30"
                          : "hover:bg-muted/30 border border-transparent"
                      }`}
                      dir="rtl"
                    >
                      <p className={`text-xs font-semibold ${selectedSurah.id === surah.id ? "text-primary" : "text-foreground"}`}>
                        {surah.name}
                      </p>
                      <p className="text-[10px] text-muted-foreground">{surah.reciter}</p>
                    </button>
                  ))}
                  {surahs.length <= 1 && (
                    <div className="text-center py-4 text-[10px] text-muted-foreground">
                      🔜 سور جديدة قريبًا...
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Waveform / Progress bar */}
          <div
            className="w-full h-2 bg-muted/20 rounded-full cursor-pointer mb-3 group relative overflow-hidden"
            onClick={seek}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full" />
            <div
              className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all relative z-10"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-primary/50 border-2 border-background" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <span className="text-[10px] text-muted-foreground font-mono">{currentTime}</span>
            <span className="text-[10px] text-muted-foreground font-mono">{duration}</span>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            {/* Download button */}
            <button
              onClick={downloadSurah}
              className="w-10 h-10 rounded-full bg-muted/20 border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all"
              title="تحميل"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground hover:text-primary">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </button>

            {/* Play/Pause */}
            <button
              onClick={toggle}
              className="w-14 h-14 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center hover:bg-primary/25 hover:border-primary/60 transition-all hover:shadow-xl hover:shadow-primary/20 hover:scale-105 active:scale-95"
            >
              {isPlaying ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-primary ml-0.5">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              )}
            </button>

            {/* Surah list toggle */}
            <button
              onClick={() => setShowList(!showList)}
              className="w-10 h-10 rounded-full bg-muted/20 border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all"
              title="قائمة السور"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuranPlayer;
