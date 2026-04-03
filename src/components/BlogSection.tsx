import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const BlogSection = () => {
  return (
    <section id="blog" className="relative py-20 sm:py-28 px-4 sm:px-6 section-glow">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-[10px] tracking-[0.5em] text-primary/60 font-mono block mb-3">
            02 — BLOG
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-foreground">
            Notes & <span className="text-secondary glow-text-magenta">Summaries</span>
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm mt-3 max-w-lg mx-auto">
            ملخصاتي ومذكراتي اليومية — لغة C، تحليل Malware، وأكتر
          </p>
        </motion.div>

        {blogPosts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block bg-card/60 border border-border rounded-xl overflow-hidden card-hover backdrop-blur-sm h-full"
                >
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="tag-purple text-[9px] tracking-wider px-2 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-[10px] text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="font-display text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-3 leading-relaxed line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center flex-wrap gap-1.5 mb-3">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded bg-muted/50 text-muted-foreground">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-border/50">
                      <span className="text-[10px] text-muted-foreground">
                        {post.sections.length} sections
                      </span>
                      <span className="text-[10px] text-primary font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                        READ →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-dashed border-border rounded-xl p-6 sm:p-8 flex flex-col items-center text-center"
        >
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground mb-4 font-mono">COMING SOON</span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {["Assembly Notes", "Malware Analysis", "Reverse Engineering", "Cryptography"].map((label) => (
              <span key={label} className="tag-purple text-[9px] sm:text-[10px] tracking-wider px-3 py-1.5 rounded-full">
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
