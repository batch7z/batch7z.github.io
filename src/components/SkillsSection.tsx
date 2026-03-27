import { motion } from "framer-motion";

const skills = [
  {
    title: "Malware Development",
    description: "تطوير وفهم كيفية عمل البرمجيات الخبيثة من الداخل",
    icon: "🦠",
    color: "text-accent",
    bgColor: "bg-accent/5 border-accent/15 hover:border-accent/40",
    level: "Learning",
  },
  {
    title: "Malware Analysis",
    description: "تحليل عينات Malware وفهم سلوكها وآليات عملها",
    icon: "🔬",
    color: "text-primary",
    bgColor: "bg-primary/5 border-primary/15 hover:border-primary/40",
    level: "Learning",
  },
  {
    title: "Reverse Engineering",
    description: "الهندسة العكسية للبرامج باستخدام أدوات مثل x64dbg و Ghidra",
    icon: "⚙️",
    color: "text-secondary",
    bgColor: "bg-secondary/5 border-secondary/15 hover:border-secondary/40",
    level: "Learning",
  },
  {
    title: "Cryptography",
    description: "دراسة خوارزميات التشفير وكسرها — AES, RSA, وغيرها",
    icon: "🔐",
    color: "text-primary",
    bgColor: "bg-primary/5 border-primary/15 hover:border-primary/40",
    level: "Learning",
  },
  {
    title: "C Programming",
    description: "البرمجة بلغة C — المؤشرات، الذاكرة، والـ system programming",
    icon: "💻",
    color: "text-accent",
    bgColor: "bg-accent/5 border-accent/15 hover:border-accent/40",
    level: "Active",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] tracking-[0.4em] text-muted-foreground font-mono">01</span>
            <div className="h-px w-12 bg-border" />
          </div>
          <h2 className="font-display text-4xl font-bold text-foreground">
            What I'm <span className="text-primary">Learning</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group border rounded-xl p-6 transition-all duration-500 cursor-default ${skill.bgColor}`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{skill.icon}</span>
                <span className={`text-[9px] tracking-[0.3em] font-mono px-2 py-1 rounded-full border border-current/20 ${skill.color}`}>
                  {skill.level.toUpperCase()}
                </span>
              </div>
              <h3 className={`font-display text-lg font-semibold mb-2 ${skill.color}`}>
                {skill.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed" dir="rtl">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
