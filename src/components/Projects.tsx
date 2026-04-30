import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    title: "Real Estate Estimator",
    tag: "ML",
    description: "Real-time web app for estimating real estate values.",
    stack: ["React", "FastAPI", "OpenAI"],
    accent: "from-cyan-500/20 to-blue-500/10",
    github: "https://github.com/chrollo711/fadeup-vision",
  },
  {
    title: "EDA Analysis of Amazon Prime",
    tag: "Fintech",
    description:
      "Exploratory data analysis of Amazon Prime's user behavior and engagement metrics.",
    stack: ["python", "pandas", "matplotlib", "seaborn"],
    accent: "https://github.com/chrollo711/labmentix",
  },
  {
    title: "Aetheris",
    tag: "Open Source",
    description:
      "Production-ready application with flutter and fastAPI which sends the traffic level on the road to backend",
    stack: ["FastAPI", "MongoDb", "Flutter", "JWT"],
    accent: "from-emerald-500/20 to-cyan-500/10",
    github: "https://github.com/chrollo711/AetherisCode",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Work"
      title={
        <>
          Selected <span className="text-gradient">projects.</span>
        </>
      }
      description="A glimpse of things I've built — from AI-powered apps to developer tools."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-surface border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
          >
            <div className={`h-44 bg-gradient-to-br ${p.accent} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-background/60 backdrop-blur text-[10px] font-mono uppercase tracking-widest border border-border">
                {p.tag}
              </div>
              <a
                href={p.github} // 👈 add github link in your data
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 size-10 rounded-full bg-background/70 backdrop-blur border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all"
              >
                <ArrowUpRight className="size-4" />
              </a>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 rounded text-[11px] font-mono text-muted-foreground bg-background border border-border"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="https://github.com/chrollo711"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowUpRight className="size-3" />
        </a>
      </div>
    </Section>
  );
}
