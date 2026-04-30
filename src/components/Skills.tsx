
import { motion } from "framer-motion";
import { Section } from "./Section";

const stacks = [
  { label: "Frontend", items: ["React", "HTML", "CSS", "JavaScript"] },
  { label: "Backend", items: ["FastAPI", "Python", "REST APIs"] },
  { label: "Database", items: ["PostgreSQL", "MongoDB"] },
  { label: "Tools", items: ["Git", "Docker", "Vercel"] },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Tech Stack"
      title={<>Tools I use to <span className="text-gradient">ship fast.</span></>}
      description="A focused stack for building modern, AI-native web applications end-to-end."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stacks.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="p-6 rounded-xl bg-surface border border-border hover:border-primary/40 transition-colors"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              ./{s.label.toLowerCase()}
            </div>
            <div className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-md text-sm bg-background border border-border font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
