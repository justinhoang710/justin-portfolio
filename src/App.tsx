import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Leaf, Linkedin, Mail } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "gallery", label: "My Photos" },
  { id: "contact", label: "Contact" },
];

const projects = [
  {
    title: "BugTracker+",
    blurb: "Spring Boot and React platform for teams to triage issues, automate reporting, and ship faster.",
    tags: ["Spring Boot", "React", "SQL", "Docker"],
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1200&q=80",
    href: "https://github.com/1juho1?tab=repositories",
  },
  {
    title: "FinGen Agents",
    blurb: "Multi-agent LLM assistant that evaluates financial portfolios, runs backtests, and drafts insights.",
    tags: ["Python", "LLM", "RAG", "RL"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    href: "https://github.com/1juho1?tab=repositories",
  },
  {
    title: "Icy Boba Digital",
    blurb: "Immersive storefront experience with menu management, gallery, and automated catering requests.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
    href: "https://github.com/1juho1?tab=repositories",
  },
];

const moodboardImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1520420097861-7a29d3d06fa4?auto=format&fit=crop&w=800&q=80",
];

export default function JustinPortfolio() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1));
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0.2, 0.4, 0.6, 1] }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const underlineStyle = useMemo(() => {
    const idx = navItems.findIndex((n) => n.id === active);
    const pct = (idx / navItems.length) * 100;
    const width = 100 / navItems.length;
    return { left: `${pct}%`, width: `${width}%` } as React.CSSProperties;
  }, [active]);

  return (
    <div className="min-h-screen bg-mist text-bark font-body">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-fall-paper [background-size:24px_24px] opacity-50" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-[rgba(255,255,255,0.55)] via-transparent to-transparent" />

      <header className="sticky top-0 z-40 border-b border-amber/30 bg-mist/85 backdrop-blur supports-[backdrop-filter]:bg-mist/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-amber/20 text-amber"
            >
              <Leaf className="h-5 w-5" />
            </motion.div>
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold">Justin Hoang</div>
              <div className="text-xs uppercase tracking-[0.3em] text-moss/70">Software Engineer</div>
            </div>
          </div>

          <nav className="relative hidden h-full items-center md:flex">
            <div className="flex gap-6 text-sm font-medium">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`pb-3 pt-2 transition-colors hover:text-moss ${
                    active === item.id ? "text-moss" : "text-bark/70"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <span
              className="pointer-events-none absolute bottom-0 block h-[2px] bg-amber shadow-[0_6px_18px_rgba(247,177,94,0.45)] transition-all duration-300 ease-out"
              style={underlineStyle}
            />
          </nav>

          <motion.a
            href="#projects"
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-full bg-amber px-4 py-2 text-sm font-semibold text-bark shadow-leaf-soft transition hover:bg-ember hover:text-white"
          >
            View Projects <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </header>

      <main className="pb-20">
        <section id="home" className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80"
              alt="Sunlit forest with golden foliage"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[rgba(47,38,33,0.25)] via-[rgba(47,38,33,0.12)] to-[rgba(47,38,33,0.4)]" />
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-28 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-amber/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-amber">
                Featured Work
              </span>
              <h1 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
                Crafting thoughtful software experiences with a calm, polished touch.
              </h1>
              <p className="mx-auto max-w-2xl text-base sm:text-lg text-white/85">
                I'm a computer science student focused on full-stack engineering. I build resilient web platforms,
                intelligent automations, and product moments that feel welcoming and well-considered.
              </p>
            </motion.div>

            <div className="grid w-full gap-4 sm:grid-cols-3">
              <StatBubble label="Focus" value="Human-centered full-stack" />
              <StatBubble label="Toolbox" value="Java • Python • React • SQL" />
              <StatBubble label="Mindset" value="Learn, iterate, refine" />
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-full bg-mist px-6 py-3 text-sm font-semibold text-bark shadow-md transition hover:bg-white/90"
              >
                Let's collaborate <ArrowRight className="h-4 w-4" />
              </motion.a>
              <a
                href="https://github.com/1juho1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition hover:text-white"
              >
                View GitHub <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <SectionWrapper id="about">
          <SectionHeading kicker="About" title="A grounded engineer with a creative streak" />
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 text-base leading-relaxed text-bark/85">
              <p>
                I'm currently studying Computer Science at Stockton University and channeling my curiosity into building
                useful software. Whether it's a process automation, an analytics workflow, or a digital storefront, I aim
                for balanced solutions that blend clarity and craft.
              </p>
              <p>
                Outside the keyboard, you'll find me exploring specialty coffee shops, photographing everyday details, or
                diving into new research rabbit holes. That curiosity keeps my work patient, deliberate, and always
                evolving.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                <li className="rounded-2xl border border-amber/30 bg-white/70 px-4 py-3 shadow-leaf-soft">
                  GPA 3.15 · Junior · Class of 2027
                </li>
                <li className="rounded-2xl border border-amber/30 bg-white/70 px-4 py-3 shadow-leaf-soft">
                  Comfortable with Java, Python, TypeScript, C++, SQL
                </li>
                <li className="rounded-2xl border border-amber/30 bg-white/70 px-4 py-3 shadow-leaf-soft">
                  React, Spring Boot, Tailwind, Git, Framer Motion
                </li>
                <li className="rounded-2xl border border-amber/30 bg-white/70 px-4 py-3 shadow-leaf-soft">
                  Interests in quant finance, data science, and security
                </li>
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-5 -z-10 rounded-3xl bg-gradient-to-br from-amber/40 via-transparent to-transparent blur-2xl" />
              <img
                src="/Headshot.jpg"
                alt="Portrait of Justin Hoang"
                className="h-full w-full rounded-3xl object-cover shadow-leaf"
              />
            </motion.div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="projects">
          <SectionHeading kicker="Recent Work" title="Building purposeful digital products" />
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="experience">
          <SectionHeading kicker="Experience" title="Hands-on roles with real impact" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <ExperienceCard
              role="Web Developer & IT Specialist"
              org="Icy Boba"
              time="2024 – Present"
              bullets={[
                "Designed and launched a performant multi-page site with menu, gallery, and contact flows.",
                "Automated daily tasks around inventory and reporting, improving turnaround time for the team.",
                "Maintain POS hardware, troubleshoot devices, and keep the environment reliable during rush hours.",
              ]}
            />
            <ExperienceCard
              role="Academic Projects"
              org="Stockton University"
              time="2023 – Present"
              bullets={[
                "Developed data structure visualizers and algorithmic problem sets to strengthen fundamentals.",
                "Led group programming assignments, coordinating Git workflows and peer reviews.",
                "Explored cybersecurity labs covering network hardening, threat modeling, and incident response drills.",
              ]}
            />
          </div>
        </SectionWrapper>

        <SectionWrapper id="gallery">
          <SectionHeading kicker="My Photos" title="Scenes I've captured that influence my craft" />
          <p className="mt-6 max-w-2xl text-sm text-bark/70">
            A few warm-toned visuals from behind my lens that inspire the color choices, typography, and sense of calm in
            this portfolio. Each shot is a reminder to slow down, design intentionally, and highlight the craft behind
            every build.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {moodboardImages.map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative overflow-hidden rounded-3xl bg-bark/20 shadow-lg"
              >
                <img src={src} alt="Captured inspiration" className="h-48 w-full object-cover transition duration-700 hover:scale-105" />
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="contact">
          <SectionHeading kicker="Let's Connect" title="Open to internships, collaborations, and coffee chats" />
          <div className="mt-10 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <motion.a
              href="mailto:justinhoang710@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col gap-4 rounded-3xl border border-amber/30 bg-white px-6 py-8 shadow-leaf"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-xl">Reach out via email</div>
                  <p className="mt-1 text-sm text-bark/70">
                    Share a project brief, internship opportunity, or just say hello. I respond within two business days.
                  </p>
                </div>
                <Mail className="h-6 w-6 text-amber" />
              </div>
              <span className="text-base font-semibold">justinhoang710@gmail.com</span>
            </motion.a>

            <div className="flex flex-col gap-4 rounded-3xl border border-amber/30 bg-white px-6 py-8 shadow-leaf-soft">
              <div className="flex items-center justify-between">
                <div className="font-display text-xl">Elsewhere</div>
                <ExternalLink className="h-5 w-5 text-amber" />
              </div>
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                <a
                  href="https://github.com/1juho1"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-mist px-3 py-2 text-bark transition hover:bg-amber/30"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-mist px-3 py-2 text-bark transition hover:bg-amber/30"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
              <p className="text-sm text-bark/70">
                Let me know if you'd like a tailored resume or a walkthrough of any project.
              </p>
            </div>
          </div>
        </SectionWrapper>
      </main>

      <footer className="border-t border-amber/30 bg-white/70 py-8 text-center text-xs text-bark/60">
        © {new Date().getFullYear()} Justin Hoang · Crafted with care.
      </footer>
    </div>
  );
}

function SectionWrapper({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-20">{children}</div>
    </section>
  );
}

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="space-y-3 text-center">
      <div className="text-xs uppercase tracking-[0.35em] text-moss/70">{kicker}</div>
      <h2 className="font-display text-3xl font-semibold text-bark sm:text-4xl">{title}</h2>
    </div>
  );
}

function ProjectCard({ title, blurb, tags, image, href }: (typeof projects)[number]) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-3xl border border-amber/30 bg-white/80 shadow-leaf-soft transition"
    >
      <div className="relative h-40 overflow-hidden">
        <img src={image} alt="Project preview" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute inset-0 bg-gradient-to-t from-bark/70 via-bark/10 to-transparent" />
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div>
          <h3 className="font-display text-xl text-bark">{title}</h3>
          <p className="mt-2 text-sm text-bark/70">{blurb}</p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-medium text-bark/70">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-amber/20 px-3 py-1 text-bark">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

function ExperienceCard({ role, org, time, bullets }: { role: string; org: string; time: string; bullets: string[] }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="flex h-full flex-col gap-4 rounded-3xl border border-amber/30 bg-white px-6 py-8 shadow-leaf-soft"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <div className="font-display text-xl text-bark">{role}</div>
          <div className="text-sm font-semibold text-bark/70">{org}</div>
        </div>
        <div className="text-xs uppercase tracking-widest text-bark/50">{time}</div>
      </div>
      <ul className="space-y-2 text-sm leading-relaxed text-bark/75">
        {bullets.map((bullet) => (
          <li key={bullet} className="relative pl-5">
            <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-amber" />
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function StatBubble({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-white/20 bg-white/10 px-6 py-5 text-left shadow-2xl backdrop-blur">
      <div className="text-xs uppercase tracking-[0.3em] text-white/70">{label}</div>
      <div className="mt-2 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}
