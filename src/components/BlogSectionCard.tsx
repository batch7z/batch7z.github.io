import { useState } from "react";
import { motion } from "framer-motion";
import { BlogSection as BlogSectionType } from "@/data/blogPosts";

const CodeBlock = ({ code, output }: { code: string; output?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg overflow-hidden border border-border bg-card/80 my-3">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/30">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-destructive/60" />
          <div className="w-2 h-2 rounded-full bg-accent/60" />
          <div className="w-2 h-2 rounded-full bg-primary/60" />
          <span className="text-[10px] text-muted-foreground ml-2 tracking-wider">C</span>
        </div>
        <button
          onClick={handleCopy}
          className="text-[10px] tracking-wider text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded border border-transparent hover:border-border"
        >
          {copied ? "COPIED ✓" : "COPY"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-xs leading-relaxed">
        <code className="text-foreground">{code}</code>
      </pre>
      {output && (
        <div className="border-t border-border px-4 py-2 bg-muted/20">
          <span className="text-[10px] text-muted-foreground tracking-wider mr-2">OUTPUT:</span>
          <span className="text-xs text-primary font-semibold">{output}</span>
        </div>
      )}
    </div>
  );
};

const NoteBox = ({ type, text }: { type: "info" | "warning"; text: string }) => (
  <div
    className={`rounded-lg px-4 py-3 my-3 border text-xs leading-relaxed ${
      type === "warning"
        ? "bg-accent/5 border-accent/20 text-accent"
        : "bg-secondary/5 border-secondary/20 text-secondary"
    }`}
  >
    <span className="font-bold mr-2">
      {type === "warning" ? "⚠️ تحذير" : "📘 ملاحظة"}
    </span>
    {text}
  </div>
);

const BlogSectionCard = ({ section, index }: { section: BlogSectionType; index: number }) => (
  <motion.div
    id={section.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="bg-card/50 border border-border rounded-xl p-6 scroll-mt-24"
  >
    <h3 className="font-mono text-sm font-semibold text-primary mb-4 flex items-center gap-2">
      <span className="text-muted-foreground text-xs">{">"}_</span>
      {section.title}
    </h3>

    {section.code && <CodeBlock code={section.code} output={section.output} />}

    {section.explanation && (
      <div className="space-y-1.5 my-3" dir="rtl">
        {section.explanation.map((line, i) => (
          <p key={i} className="text-xs text-muted-foreground leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    )}

    {section.note && <NoteBox type={section.note.type} text={section.note.text} />}

    {section.table && (
      <div className="my-3 rounded-lg overflow-hidden border border-border">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-muted/30">
              {section.table.headers.map((h, i) => (
                <th key={i} className="px-4 py-2 text-left text-muted-foreground font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.table.rows.map((row, i) => (
              <tr key={i} className="border-t border-border">
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-2 text-foreground">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </motion.div>
);

export default BlogSectionCard;
