import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Bot, Mic, Sparkles, Timer } from "lucide-react";
import { PageShell, PageHeader } from "@/components/page-shell";

export const Route = createFileRoute("/ai-interview")({
  head: () => ({
    meta: [
      { title: "AI Mock Interviews — Prepify" },
      {
        name: "description",
        content:
          "Practice real interview rounds with an AI interviewer and get instant feedback on clarity, depth and approach.",
      },
      { property: "og:title", content: "AI Mock Interviews — Prepify" },
      {
        property: "og:description",
        content: "Voice-based AI interview rounds with instant, structured feedback.",
      },
    ],
  }),
  component: AiInterviewPage,
});

const ROUNDS = [
  { name: "Technical — DSA", mins: 45, desc: "Two problems, live reasoning, follow-up questions." },
  { name: "System Design", mins: 60, desc: "Scope a real product and defend your trade-offs." },
  { name: "HR & Behavioural", mins: 30, desc: "STAR-style answers with tone and clarity scoring." },
  { name: "Resume Deep Dive", mins: 30, desc: "Line-by-line grilling on your listed projects." },
];

function AiInterviewPage() {
  const [selected, setSelected] = useState(0);

  return (
    <PageShell>
      <PageHeader
        eyebrow="ai interview"
        title="Rehearse the room"
        accent="before you enter it."
        description="Pick a round, speak your answers out loud and get a scored breakdown the moment you finish."
      />

      <section className="px-5 py-12 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-3">
            {ROUNDS.map((r, i) => (
              <button
                key={r.name}
                onClick={() => setSelected(i)}
                className={`w-full rounded-lg border bg-card p-5 text-left transition-all ${
                  selected === i ? "gold-ring" : "border-border hover:border-gold/50"
                }`}
              >
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                  <h3 className="truncate font-display text-base font-bold">{r.name}</h3>
                  <span className="label-mono flex shrink-0 items-center gap-1">
                    <Timer className="h-3 w-3" /> {r.mins}m
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
              </button>
            ))}
          </div>

          <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary">
                <Bot className="h-5 w-5 text-gold" />
              </div>
              <div className="min-w-0">
                <p className="truncate font-display font-bold">Prepify Interviewer</p>
                <p className="label-mono">{ROUNDS[selected].name}</p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm">
              <div className="rounded-lg bg-surface p-4 leading-relaxed">
                Walk me through how you would approach {ROUNDS[selected].name.toLowerCase()} today.
                Take your time — think out loud.
              </div>
              <div className="ml-auto max-w-[85%] rounded-lg border border-border p-4 leading-relaxed text-muted-foreground">
                Your answer appears here as you speak…
              </div>
            </div>

            <button className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
              <Mic className="h-4 w-4" /> Start {ROUNDS[selected].mins}-minute round
              <ArrowRight className="h-4 w-4" />
            </button>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Clarity", "Depth", "Structure"].map((m) => (
                <div key={m} className="rounded-md bg-surface p-3">
                  <p className="label-mono">{m}</p>
                  <div className="mt-2 h-1.5 rounded-full bg-border">
                    <div className="h-full w-2/3 rounded-full bg-gold" />
                  </div>
                </div>
              ))}
            </div>
            <p className="label-mono mt-4 flex items-center gap-2">
              <Sparkles className="h-3 w-3" /> feedback generated instantly after each round
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
