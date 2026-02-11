import { useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

type WorkItem = {
  id: string;
  title: string;
  summary: string;
  details: string;
  image: string;
  link: string;
  linkLabel: string;
};

type View = "home" | "work" | "education";

const RESUME_URL = "/resume.pdf";

const selectedWork: WorkItem[] = [
  {
    id: "fingen-agents",
    title: "FinGen Agents",
    summary: "An AI-driven platform for market analysis, strategy simulation, and financial insights.",
    details:
      "Built with agent-based workflows to evaluate portfolio scenarios and surface practical recommendations through a clean interface.",
    image:
      "https://images.unsplash.com/photo-1551281044-8b5bd0f5f0f1?auto=format&fit=crop&w=1600&q=80",
    link: "https://github.com/justinhoang710/FinGen_Agents",
    linkLabel: "View project",
  },
  {
    id: "volleyball-app",
    title: "Volleyball App",
    summary: "A team and match management app for scheduling, stats tracking, and communication.",
    details:
      "Designed to simplify roster updates, match planning, and player performance review with responsive, easy-to-scan views.",
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1600&q=80",
    link: "https://github.com/justinhoang710",
    linkLabel: "View project",
  },
  {
    id: "workplace-scheduler",
    title: "Workplace Schedule Application",
    summary: "A scheduling tool for workplaces to manage shifts, availability, and team coverage.",
    details:
      "Focused on clarity and reliability so managers can publish schedules quickly while employees can check updates in real time.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1600&q=80",
    link: "https://github.com/justinhoang710",
    linkLabel: "View project",
  },
];

const allWork = selectedWork;

const skills = [
  "Prompt Engineering",
  "Software Engineering",
  "SQL",
  "Python",
  "Flask",
  "Java",
  "JavaScript",
  "HTML",
  "Node.js",
  "Tailwind CSS",
  "React",
  "Git",
];

const coursework = [
  "Data Structures and Algorithms",
  "Database Management Systems",
  "Software Engineering",
  "Computer Organization",
  "Operating Systems",
  "Web Application Development",
  "Discrete Mathematics",
  "Computer Networks",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  const [view, setView] = useState<View>("home");
  const navTabClass = (isActive: boolean) =>
    [
      "shrink-0 rounded-sm px-1.5 py-1 text-[10px] transition sm:px-2.5 sm:py-1.5 sm:text-xs",
      isActive ? "bg-accent-soft text-accent" : "hover:bg-accent-soft/70 hover:text-accent",
    ].join(" ");

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-20 border-b border-line/70 bg-[linear-gradient(90deg,rgba(230,238,244,0.9),rgba(245,243,238,0.92),rgba(231,239,233,0.88))] backdrop-blur supports-[backdrop-filter]:bg-[linear-gradient(90deg,rgba(230,238,244,0.78),rgba(245,243,238,0.8),rgba(231,239,233,0.74))]">
        <div className="mx-auto flex min-h-16 max-w-6xl flex-col items-start gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-x-4 sm:gap-y-2 sm:px-8">
          <button
            onClick={() => setView("home")}
            className="text-xs font-medium tracking-[0.14em] text-accent/90 transition hover:text-accent sm:text-sm"
          >
            JUSTIN HOANG
          </button>

          <nav className="w-full sm:w-auto">
            <div className="flex w-full items-center gap-1 overflow-x-auto whitespace-nowrap text-[10px] uppercase tracking-[0.16em] text-ink/75 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:w-auto sm:gap-4 sm:overflow-visible sm:text-xs">
            <button
              onClick={() => setView("home")}
              className={navTabClass(view === "home")}
            >
              Home
            </button>
            <button
              onClick={() => setView("work")}
              className={navTabClass(view === "work")}
            >
              Work
            </button>
            <button
              onClick={() => setView("education")}
              className={navTabClass(view === "education")}
            >
              Education
            </button>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-1 rounded-sm px-1.5 py-1 text-[10px] transition hover:bg-accent-soft/70 hover:text-accent sm:px-2.5 sm:py-1.5 sm:text-xs"
            >
              Resume <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            </div>
          </nav>
        </div>
      </header>

      {view === "home" && <HomeView />}
      {view === "work" && <WorkView items={allWork} />}
      {view === "education" && <EducationView />}

      <footer className="mx-auto max-w-6xl px-5 py-8 text-xs uppercase tracking-[0.14em] text-ink/55 sm:px-8">
        © {new Date().getFullYear()} Justin Hoang
      </footer>
    </div>
  );
}

function HomeView() {
  return (
    <main>
      <section id="about" className="scroll-mt-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-24 sm:px-8 sm:pb-24 sm:pt-28 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="border border-line bg-paper-soft"
          >
            <div className="flex h-[320px] w-full items-center justify-center text-xs uppercase tracking-[0.2em] text-ink/55 sm:h-[400px]">
              Image Placeholder
            </div>
          </motion.div>

          <div className="md:pl-8">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.2em] text-accent/85"
            >
              About Me
            </motion.p>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 max-w-4xl font-display text-4xl leading-tight text-ink sm:text-5xl"
            >
              I&apos;m Justin Hoang, a Computer Science student at Stockton University and an engineer focused on building
              practical software.
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-7 max-w-2xl text-base leading-relaxed text-ink/80"
            >
              At Stockton University, I&apos;ve been sharpening both theory and hands-on development through coursework,
              team projects, and real implementations. I enjoy turning ideas into reliable products that are simple to
              use and built to scale.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-accent/20 bg-accent-soft/70 px-3 py-1.5 text-xs tracking-[0.08em] text-accent/90"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="selected-work" className="scroll-mt-28 border-t border-line/70 bg-accent-soft/30">
        <SectionShell>
          <SectionHeading
            label="Selected Work"
            title="Highlighted Projects"
            description="A quick look at some featured builds."
          />

          <div className="mt-14 space-y-20 sm:space-y-28">
            {selectedWork.map((item, index) => (
              <WorkRow key={item.id} item={item} reverse={index % 2 === 1} />
            ))}
          </div>
        </SectionShell>
      </section>

      <section id="contact" className="scroll-mt-28 border-y border-line/70 bg-sage-soft/35">
        <SectionShell>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            transition={{ duration: 0.55 }}
            className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent/85">Contact</p>
              <h2 className="mt-5 font-display text-3xl leading-tight text-ink sm:text-4xl">Let&apos;s connect.</h2>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:justinhoang710@gmail.com"
                className="group inline-flex w-full items-center justify-between border-b border-ink/55 pb-2 text-sm tracking-[0.12em] text-ink transition hover:text-accent"
              >
                justinhoang710@gmail.com
                <span className="inline-flex items-center gap-2 text-ink/70 transition group-hover:text-accent">
                  <Mail className="h-4 w-4" />
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>

              <a
                href="tel:6093282199"
                className="group inline-flex w-full items-center justify-between border-b border-ink/55 pb-2 text-sm tracking-[0.12em] text-ink transition hover:text-accent"
              >
                609-328-2199
                <span className="inline-flex items-center gap-2 text-ink/70 transition group-hover:text-accent">
                  <Phone className="h-4 w-4" />
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </motion.div>
        </SectionShell>
      </section>
    </main>
  );
}

function WorkView({ items }: { items: WorkItem[] }) {
  return (
    <main>
      <section className="border-b border-line/70">
        <SectionShell>
          <SectionHeading
            label="All Work"
            title="Project Showcase"
            description="A complete view of current portfolio projects."
          />

          <div className="mt-14 space-y-20 sm:space-y-28">
            {items.map((item, index) => (
              <WorkRow key={item.id} item={item} reverse={index % 2 === 1} />
            ))}
          </div>
        </SectionShell>
      </section>
    </main>
  );
}

function EducationView() {
  return (
    <main>
      <section className="border-b border-line/70">
        <SectionShell>
          <SectionHeading
            label="Education"
            title="Current and Previous Education"
            description="Academic background and coursework relevant to software engineering."
          />

          <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
              transition={{ duration: 0.55 }}
              className="border border-line bg-sage-soft/40 p-6"
            >
              <h3 className="font-display text-2xl text-ink">Stockton University</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-ink/65">B.S. Computer Science · Current</p>
              <p className="mt-4 text-sm leading-relaxed text-ink/78">
                Building core computer science fundamentals while applying them in full-stack and software engineering
                projects.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="border border-line bg-accent-soft/45 p-6"
            >
              <h3 className="font-display text-2xl text-ink">Previous Education</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-ink/65">
                Atlantic City High School
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink/78">
                Rank: 9/340. Built a strong academic foundation while developing early interest in software, problem
                solving, and technical projects.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            transition={{ duration: 0.55 }}
            className="mt-12"
          >
            <h3 className="font-display text-2xl text-ink">Relevant Coursework</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {coursework.map((course) => (
                <li key={course} className="border border-line bg-paper-soft/90 px-4 py-3 text-sm text-ink/80">
                  {course}
                </li>
              ))}
            </ul>
          </motion.div>
        </SectionShell>
      </section>
    </main>
  );
}

function SectionShell({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">{children}</div>;
}

function SectionHeading({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-90px" }}
      variants={fadeInUp}
      transition={{ duration: 0.55 }}
      className="max-w-3xl"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-accent/85">{label}</p>
      <h2 className="mt-5 font-display text-3xl leading-tight text-ink sm:text-4xl">{title}</h2>
      <p className="mt-6 text-base leading-relaxed text-ink/78">{description}</p>
    </motion.div>
  );
}

function WorkRow({ item, reverse }: { item: WorkItem; reverse?: boolean }) {
  return (
    <motion.article
      id={item.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeInUp}
      transition={{ duration: 0.6 }}
      className={`grid gap-8 md:grid-cols-2 md:items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
    >
      <div>
        <h3 className="font-display text-2xl text-ink sm:text-3xl">{item.title}</h3>
        <p className="mt-4 text-base leading-relaxed text-ink/82">{item.summary}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink/70">{item.details}</p>
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 border-b border-accent/50 pb-1 text-xs uppercase tracking-[0.16em] text-accent/85 transition hover:text-accent"
        >
          {item.linkLabel} <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <ProjectVisual item={item} />
    </motion.article>
  );
}

function ProjectVisual({ item }: { item: WorkItem }) {
  if (item.id === "volleyball-app") {
    return <VolleyballVisual />;
  }

  if (item.id === "fingen-agents") {
    return <StockTrendVisual />;
  }

  if (item.id === "workplace-scheduler") {
    return <CalendarFlipVisual />;
  }

  return <ParallaxImage src={item.image} alt={item.title} />;
}

function VolleyballVisual() {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="relative h-[300px] overflow-hidden border border-line bg-[linear-gradient(145deg,#f6f6f4,#ebebe8)] sm:h-[360px]"
    >
      <div className="absolute inset-x-0 bottom-8 h-px bg-ink/20" />
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink/10" />

      <motion.div
        animate={{ y: [0, -44, 0], rotate: [0, 10, 0], scaleX: [1.03, 1, 1.03], scaleY: [0.98, 1, 0.98] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full border-2 border-[#151515] shadow-[0_16px_26px_-14px_rgba(0,0,0,0.5)]"
        style={{
          background:
            "radial-gradient(circle at 30% 25%, #ffffff 0%, #f7f7f7 45%, #e6e6e6 75%, #d8d8d8 100%)",
        }}
      >
        <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-black/90" />
        <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-black/90" />
        <span className="absolute inset-0 rounded-full border-2 border-transparent border-t-black/90 border-b-black/90" />
        <span className="absolute inset-0 rounded-full border-2 border-transparent border-l-black/60 border-r-black/60" />
        <span className="absolute left-[26%] top-[18%] h-4 w-4 rounded-full bg-white/75 blur-[1px]" />
      </motion.div>

      <motion.div
        animate={{ scaleX: [0.85, 1.05, 0.85], opacity: [0.18, 0.1, 0.18] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-7 left-1/2 h-3 w-16 -translate-x-1/2 rounded-full bg-black/30 blur-[1px]"
      />
    </motion.div>
  );
}

function StockTrendVisual() {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="relative h-[300px] overflow-hidden border border-line bg-[linear-gradient(160deg,#eff4ee,#e7eee7)] sm:h-[360px]"
    >
      <svg viewBox="0 0 360 240" className="h-full w-full">
        <g stroke="rgba(34,32,28,0.12)" strokeWidth="1">
          <line x1="0" y1="40" x2="360" y2="40" />
          <line x1="0" y1="90" x2="360" y2="90" />
          <line x1="0" y1="140" x2="360" y2="140" />
          <line x1="0" y1="190" x2="360" y2="190" />
        </g>

        <motion.path
          d="M20 190 L80 168 L130 152 L180 126 L225 136 L275 96 L330 58"
          fill="none"
          stroke="#2f6d49"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.35, ease: "easeInOut" }}
        />

        <motion.circle
          r="7"
          fill="#2f6d49"
          animate={{
            cx: [20, 80, 130, 180, 225, 275, 330],
            cy: [190, 168, 152, 126, 136, 96, 58],
          }}
          transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.35, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
}

function CalendarFlipVisual() {
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="relative flex h-[300px] items-center justify-center overflow-hidden border border-line bg-[linear-gradient(160deg,#f4f0ea,#ece7df)] sm:h-[360px]"
    >
      <div className="absolute inset-x-10 top-7 h-px bg-ink/10" />
      <div className="absolute inset-x-14 bottom-9 h-px bg-ink/10" />

      <div className="relative w-[220px] rounded-sm border border-ink/20 bg-[#fcfbf8] p-5 shadow-[0_20px_35px_-20px_rgba(0,0,0,0.45)]">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.18em] text-ink/50">Schedule</span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-ink/50">2026</span>
        </div>

        <div className="relative h-14 overflow-hidden border-y border-ink/20">
          {months.map((month, index) => (
            <motion.div
              key={month}
              className="absolute inset-0 flex items-center justify-center font-display text-2xl tracking-[0.16em] text-ink"
              initial={{ rotateX: -90, opacity: 0, y: -8 }}
              animate={{ rotateX: [0, 0, 88], opacity: [1, 1, 0], y: [0, 0, 8] }}
              transition={{
                duration: 0.85,
                delay: index * 0.45,
                repeat: Infinity,
                repeatDelay: months.length * 0.45 - 0.85,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "center top" }}
            >
              {month}
            </motion.div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-7 gap-1 text-[9px] text-ink/45">
          {Array.from({ length: 28 }, (_, i) => (
            <span
              key={i}
              className={`h-4 rounded-[2px] ${
                i === 8 || i === 14 || i === 20 ? "bg-ink/18" : "bg-ink/6"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [14, -14]);

  return (
    <div ref={ref} className="relative overflow-hidden border border-line bg-paper-soft">
      <motion.img
        style={{ y }}
        src={src}
        alt={alt}
        whileHover={{ scale: 1.03, y: -4 }}
        transition={{ duration: 0.25 }}
        className="h-[300px] w-full object-cover sm:h-[360px]"
      />
    </div>
  );
}
