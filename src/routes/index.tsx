import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Code2,
  GraduationCap,
  MessageSquare,
  Mouse,
  Trophy,
  Users,
  TrendingUp,
  Braces,
} from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { useTheme } from "@/components/theme-provider";
import heroLight from "@/assets/hero-light.jpg";
import heroDark from "@/assets/hero-dark.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prepify — Code A Better You" },
      {
        name: "description",
        content:
          "DSA practice, aptitude preparation and AI-powered mock interviews in one place. Practice, improve and stay ahead in your placement journey.",
      },
      { property: "og:title", content: "Prepify — Code A Better You" },
      {
        property: "og:description",
        content: "All-in-one DSA practice, aptitude prep and AI mock interviews for placements.",
      },
    ],
  }),
  component: Index,
});

const FEATURES = [
  {
    icon: Code2,
    title: "DSA Practice",
    body: "Solve curated problems and level up your coding skills.",
    to: "/practice",
  },
  {
    icon: MessageSquare,
    title: "AI Interviews",
    body: "Get real interview experience with our AI interviewer.",
    to: "/ai-interview",
  },
  {
    icon: BarChart3,
    title: "Aptitude Prep",
    body: "Sharpen your logical and analytical skills.",
    to: "/practice",
  },
  {
    icon: Trophy,
    title: "Leaderboards",
    body: "Compete with peers and climb the ranks.",
    to: "/leaderboard",
  },
] as const;

const STATS = [
  { icon: Users, value: "10K+", label: "Active Students" },
  { icon: Braces, value: "50K+", label: "Problems Solved" },
  { icon: TrendingUp, value: "95%", label: "Placement Impact" },
  { icon: GraduationCap, value: "500+", label: "Colleges Using Prepify" },
] as const;

const CODE_LINES = [
  "while (notPlaced) {",
  "  practice();",
  "  learn();",
  "  solve();",
  "  improve();",
  "}",
  "// You got this!",
];

function Index() {
  const { theme } = useTheme();

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* left rail */}
        <div className="pointer-events-none absolute left-4 top-0 hidden h-full flex-col items-center 2xl:flex">
          <span className="h-40 w-px bg-border" />
          <Mouse className="my-4 h-5 w-5 text-muted-foreground" />
          <span className="label-mono [writing-mode:vertical-rl]">Scroll to explore</span>
          <span className="mt-4 flex flex-col gap-2">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="scroll-dot h-1 w-1 rounded-full bg-muted-foreground"
                style={{ animationDelay: `${i * 0.25}s` }}
              />
            ))}
          </span>
          <span className="mt-4 w-px flex-1 bg-border" />
        </div>

        {/* right rail */}
        <div className="pointer-events-none absolute right-4 top-8 hidden text-right 2xl:block">
          <p className="label-mono leading-6">
            Same
            <br />
            Grind
            <br />
            Different
            <br />
            Results
            <br />—
          </p>
        </div>

        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 pb-8 pt-12 lg:grid-cols-[1.05fr_1fr] lg:px-12 lg:pt-16 2xl:px-24">
          <div className="hero-fade min-w-0">
            <p className="label-mono">// practice. improve. get placed.</p>
            <h1 className="mt-6 font-display text-[3.25rem] font-extrabold leading-[0.92] tracking-tight sm:text-7xl lg:text-[5.5rem]">
              Code
              <br />
              A Better
              <br />
              You<span className="caret">_</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
              Prepify is your all-in-one platform for DSA practice, aptitude preparation, and
              AI-powered mock interviews. Practice, improve, and stay ahead in your placement
              journey.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/practice"
                className="gold-ring inline-flex h-12 items-center gap-2 rounded-md bg-primary px-7 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Start Your Journey <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#why"
                className="inline-flex h-12 items-center rounded-md border border-border px-7 text-sm font-semibold transition-colors hover:border-gold hover:text-gold"
              >
                Explore Features
              </a>
            </div>
          </div>

          <div className="relative min-w-0">
            <img
              src={theme === "dark" ? heroDark : heroLight}
              alt="A focused developer workspace with a laptop, desk lamp, headphones and a study timer"
              width={1600}
              height={1104}
              className="w-full rounded-xl object-cover"
            />
            <div className="absolute left-4 top-6 w-[62%] max-w-sm overflow-hidden rounded-lg border border-border/60 bg-popover/90 shadow-lift backdrop-blur-md sm:left-8 sm:top-10">
              <div className="flex items-center gap-2 border-b border-border/60 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                <span className="label-mono ml-2">main.py</span>
              </div>
              <pre className="overflow-x-auto px-3 py-3 font-mono text-[11px] leading-5 sm:text-xs">
                {CODE_LINES.map((line, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="w-3 shrink-0 text-muted-foreground/60">{i + 1}</span>
                    <span className={i === 6 ? "text-gold" : ""}>{line}</span>
                  </div>
                ))}
                <div className="flex gap-3">
                  <span className="w-3 shrink-0 text-muted-foreground/60">8</span>
                  <span className="caret">|</span>
                </div>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="px-5 pt-6 lg:px-12 2xl:px-24">
        <div className="mx-auto grid max-w-[1400px] gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Link
              key={f.title}
              to={f.to}
              className={`card-lift group rounded-lg border bg-card p-6 ${
                i === 0 ? "gold-ring" : "border-border"
              }`}
            >
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-md bg-secondary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              <ArrowRight className="mt-4 h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-gold" />
            </Link>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="px-5 pt-4 lg:px-12 2xl:px-24">
        <div className="mx-auto max-w-[1400px] rounded-lg bg-surface px-6 py-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
            {STATS.map((s) => (
              <div key={s.label} className="flex min-w-0 items-center gap-4 lg:justify-center">
                <s.icon className="h-7 w-7 shrink-0 text-foreground" />
                <div className="min-w-0">
                  <p className="font-display text-xl font-bold">{s.value}</p>
                  <p className="label-mono normal-case tracking-normal">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PREPIFY */}
      <section id="why" className="relative px-5 py-20 lg:px-12 2xl:px-24">
        <p className="label-mono absolute left-4 top-24 hidden max-w-[9rem] leading-6 2xl:block">
          "A
          <br />
          Developer
          <br />
          Builds
          <br />A Better
          <br />
          Tomorrow"
          <br />—
        </p>

        <div className="mx-auto max-w-[1400px] text-center">
          <p className="label-mono">— // why prepify? // —</p>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            More than just practice.
            <br />A home for <span className="text-gold">future developers</span>.
          </h2>

          <div className="mx-auto mt-14 grid max-w-5xl gap-4 text-left sm:grid-cols-3">
            {[
              {
                k: "01",
                t: "Structured paths",
                d: "Topic-wise roadmaps that take you from arrays to system design without guesswork.",
              },
              {
                k: "02",
                t: "Real interview reps",
                d: "Voice-based AI rounds with instant feedback on clarity, depth and approach.",
              },
              {
                k: "03",
                t: "Progress you can see",
                d: "Streaks, accuracy trends and rank movement tracked across every session.",
              },
            ].map((c) => (
              <div key={c.k} className="card-lift rounded-lg border border-border bg-card p-6">
                <p className="label-mono text-gold">{c.k}</p>
                <h3 className="mt-3 font-display text-lg font-bold">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
