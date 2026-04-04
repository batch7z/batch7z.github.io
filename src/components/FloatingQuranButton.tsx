import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import quranAudio1 from "@/assets/ينهار_ابيض_علي_جمال_النهاوند_ياشيخ_مصطفي___مقطع_لايستوعبه_عقل_----(256k).mp3";
import quranAudio2 from "@/assets/سورة الشعراء - الشيخ ياسر الدوسري - 1425 هـ(MP3_160K).mp3";

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
    src: quranAudio1,
  },
  {
    id: "shuaraa",
    name: "سورة الشعراء",
    reciter: "الشيخ ياسر الدوسري",
    src: quranAudio2,
  },
];

const FloatingQuranButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrent] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [selectedSurah, setSelectedSurah] = useState<Surah>(surahs[0]);
  const [showList, setShowList] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

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

  // Close panel on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setShowList(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

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
    if (a) { a.pause(); setIsPlaying(false); }
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
    <div className="fixed bottom-6 right-6 z-[9999]" ref={panelRef}>
      <audio ref={audioRef} src={selectedSurah.src} preload="metadata" key={selectedSurah.id} />

      {/* Floating player panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute bottom-16 right-0 w-[320px] sm:w-[360px] bg-card/95 border border-primary/20 rounded-2xl p-4 backdrop-blur-xl shadow-2xl shadow-primary/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3" dir="rtl">
              <div className="flex items-center gap-2">
                <span className="text-lg">🕌</span>
                <h3 className="text-sm font-bold text-foreground">القرآن الكريم</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Surah selector */}
            <button
              onClick={() => setShowList(!showList)}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-muted/20 border border-border/50 hover:border-primary/30 transition-all mb-3 group"
            >
              <div className="text-right flex-1" dir="rtl">
                <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                  {selectedSurah.name}
                </p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{selectedSurah.reciter}</p>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                className={`text-muted-foreground transition-transform ml-2 ${showList ? "rotate-180" : ""}`}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Surah list */}
            <AnimatePresence>
              {showList && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden mb-3">
                  <div className="space-y-1 max-h-40 overflow-y-auto rounded-xl border border-border/50 bg-muted/10 p-1.5">
                    {surahs.map((surah) => (
                      <button key={surah.id} onClick={() => selectSurah(surah)}
                        className={`w-full text-right p-2.5 rounded-lg transition-all ${selectedSurah.id === surah.id ? "bg-primary/15 border border-primary/30" : "hover:bg-muted/30 border border-transparent"}`}
                        dir="rtl">
                        <p className={`text-[11px] font-semibold ${selectedSurah.id === surah.id ? "text-primary" : "text-foreground"}`}>{surah.name}</p>
                        <p className="text-[10px] text-muted-foreground">{surah.reciter}</p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Progress bar */}
            <div className="w-full h-1.5 bg-muted/20 rounded-full cursor-pointer mb-2 group relative overflow-hidden" onClick={seek}>
              <div className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all" style={{ width: `${progress}%` }} />
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[9px] text-muted-foreground font-mono">{currentTime}</span>
              <span className="text-[9px] text-muted-foreground font-mono">{duration}</span>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-3">
              <button onClick={downloadSurah} className="w-9 h-9 rounded-full bg-muted/20 border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all" title="تحميل">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </button>
              <button onClick={toggle}
                className="w-12 h-12 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center hover:bg-primary/25 hover:border-primary/60 transition-all hover:scale-105 active:scale-95">
                {isPlaying ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                    <rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary ml-0.5">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                )}
              </button>
              <button onClick={() => setShowList(!showList)}
                className="w-9 h-9 rounded-full bg-muted/20 border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all" title="قائمة السور">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
                  <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${
          isOpen
            ? "bg-primary text-primary-foreground shadow-primary/30"
            : "bg-primary/90 text-primary-foreground shadow-primary/20 hover:shadow-primary/40"
        } ${isPlaying ? "animate-pulse" : ""}`}
      >
        <span className="text-2xl">🕌</span>
      </motion.button>
    </div>
  );
};

export default FloatingQuranButton;
