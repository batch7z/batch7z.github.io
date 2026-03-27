import { motion } from "framer-motion";

interface WriteupCard {
  tags: string[];
  title: string;
  description: string;
  category: "malware" | "reverse" | "crypto" | "c-lang";
}

const writeups: WriteupCard[] = [
  {
    tags: ["C", "ملخص"],
    title: "المؤشرات في لغة C — Pointers",
    description: "شرح كامل للمؤشرات وعلاقتها بالذاكرة، pointer arithmetic، و double pointers مع أمثلة عملية.",
    category: "c-lang",
  },
  {
    tags: ["C", "ملخص"],
    title: "إدارة الذاكرة — Memory Management",
    description: "malloc, calloc, realloc, free — كل اللي محتاج تعرفه عن إدارة الذاكرة الديناميكية في C.",
    category: "c-lang",
  },
  {
    tags: ["C", "ملخص"],
    title: "Structures & Unions",
    description: "الفرق بين struct و union وإزاي تستخدمهم في بناء data types مخصصة.",
    category: "c-lang",
  },
  {
    tags: ["MALWARE", "DEV"],
    title: "Process Injection — CreateRemoteThread",
    description: "شرح تقنية حقن الكود في عمليات أخرى باستخدام CreateRemoteThread و VirtualAllocEx.",
    category: "malware",
  },
  {
    tags: ["REVERSE", "PE"],
    title: "PE File Format — تحليل هيكل الملفات التنفيذية",
    description: "فهم بنية ملفات PE: DOS Header, PE Header, Sections, Import/Export Tables.",
    category: "reverse",
  },
  {
    tags: ["CRYPTO", "AES"],
    title: "خوارزمية AES — شرح مبسط",
    description: "شرح خطوات التشفير في AES: SubBytes, ShiftRows, MixColumns, AddRoundKey.",
    category: "crypto",
  },
];

const categoryColors: Record<string, string> = {
  malware: "border-accent/30 hover:border-accent/60",
  reverse: "border-primary/30 hover:border-primary/60",
  crypto: "border-glow-purple/30 hover:border-glow-purple/60",
  "c-lang": "border-primary/30 hover:border-primary/60",
};

const categoryBadge: Record<string, string> = {
  malware: "text-accent",
  reverse: "text-primary",
  crypto: "text-glow-purple",
  "c-lang": "text-primary",
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
            WRITEUPS & NOTES
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            ملخصاتي ومذكراتي في البرمجة والأمن السيبراني
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {writeups.map((writeup, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group bg-card border rounded-lg p-5 transition-all duration-300 cursor-pointer ${categoryColors[writeup.category]}`}
            >
              <div className="flex items-center gap-2 mb-3">
                {writeup.tags.map((tag, j) => (
                  <span key={j} className="text-[10px] tracking-[0.15em] px-2 py-0.5 rounded bg-muted text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className={`font-display text-sm font-semibold mb-2 transition-colors ${categoryBadge[writeup.category]}`}>
                {writeup.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4" dir="rtl">
                {writeup.description}
              </p>
              <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                READ →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WriteupsSection;
