import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const categoryTagClass: Record<string, string> = {
  "C Programming": "tag-green",
  "Malware": "tag-amber",
  "Reverse Engineering": "tag-purple",
  "Cryptography": "tag-purple",
  "Assembly": "tag-amber",
};

const BlogSection = () => {
  return (
    <section id="blog" className="relative py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] tracking-[0.4em] text-muted-foreground font-mono">02</span>
            <div className="h-px w-12 bg-border" />
          </div>
          <h2 className="font-display text-4xl font-bold text-foreground">
            Blog & <span className="text-secondary">Notes</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-lg">
            ملخصاتي ومذكراتي اليومية — لغة C، تحليل Malware، وأكتر
          </p>
        </motion.div>

        {/* Blog posts grid */}
        {blogPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block bg-card/60 border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-500 h-full"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[9px] tracking-wider px-2.5 py-0.5 rounded-full ${categoryTagClass[post.category] || "tag-green"}`}>
                      {post.category}
                    </span>
                    <span className="text-[10px] text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-3 leading-relaxed">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground">
                      {post.sections.length} أقسام
                    </span>
                    <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                      READ →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : null}

        {/* Coming soon categories */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-dashed border-border rounded-xl p-8 flex flex-col items-center text-center"
        >
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground mb-4">COMING SOON</span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: "المزيد من ملخصات C", tagClass: "tag-green" },
              { label: "Assembly Notes", tagClass: "tag-amber" },
              { label: "Malware Analysis", tagClass: "tag-amber" },
              { label: "Reverse Engineering", tagClass: "tag-purple" },
              { label: "Cryptography", tagClass: "tag-purple" },
            ].map((item) => (
              <span key={item.label} className={`text-[10px] tracking-wider px-3 py-1.5 rounded-full ${item.tagClass}`}>
                {item.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
