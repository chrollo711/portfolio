import { motion } from "framer-motion";
import { Layers, Server, Bot, Bug } from "lucide-react";
import { Section } from "./Section";

const services = [
  {
    icon: Layers,
    title: "Full-Stack Web Apps",
    description: "End-to-end web applications built with React + FastAPI. From idea to deployment.",
  },
  {
    icon: Server,
    title: "API Development",
    description:
      "Robust, well-documented FastAPI backends with auth, validation, and clean architecture.",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description:
      "Chatbots, automation flows, RAG pipelines, and AI-powered analytics for your product.",
  },
  {
    icon: Bug,
    title: "Bug Fixing & Backend",
    description:
      "Debugging, performance tuning, and rescuing legacy backends with surgical precision.",
  },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={
        <>
          How I can <span className="text-gradient">help you.</span>
        </>
      }
      description="Whether you're a founder validating an idea or a team needing extra firepower — I've got you.
      Wheater its your half vibe coded app with vulnerabilities or you just need a solid backend for your next big idea, I'm here to help you ship fast and ship right."
    >
      <div className="grid md:grid-cols-2 gap-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group p-6 rounded-xl bg-surface border border-border hover:border-primary/40 transition-all relative overflow-hidden"
          >
            <div className="absolute -right-8 -top-8 size-32 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors" />
            <div className="relative flex gap-4">
              <div className="size-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent-violet/20 border border-border flex items-center justify-center text-primary shrink-0">
                <s.icon className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
