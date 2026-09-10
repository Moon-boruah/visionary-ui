import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CheckCircle2, Circle, Search } from "lucide-react";
import { PageShell, PageHeader } from "@/components/page-shell";

export const Route = createFileRoute("/practice")({
  head: () => ({
    meta: [
      { title: "Practice DSA & Aptitude — Prepify" },
      {
        name: "description",
        content:
          "Solve curated DSA problems and aptitude sets by topic and difficulty, and track your progress as you go.",
      },
      { property: "og:title", content: "Practice DSA & Aptitude — Prepify" },
      {
        property: "og:description",
        content: "Curated problem sets by topic and difficulty with progress tracking.",
      },
    ],
  }),
  component: PracticePage,
});

const TOPICS = [
  "All",
  "Arrays",
  "Strings",
  "Trees",
  "Graphs",
  "DP",
  "Aptitude",
  "Logical Reasoning",
] as const;
const LEVELS = ["All", "Easy", "Medium", "Hard"] as const;

const PROBLEMS = [
  { title: "Two Sum", topic: "Arrays", level: "Easy", acc: "72%", solved: true },
  { title: "Longest Substring Without Repeat", topic: "Strings", level: "Medium", acc: "41%", solved: true },
  { title: "Validate Binary Search Tree", topic: "Trees", level: "Medium", acc: "38%", solved: false },
  { title: "Course Schedule", topic: "Graphs", level: "Medium", acc: "45%", solved: false },
  { title: "Edit Distance", topic: "DP", level: "Hard", acc: "29%", solved: false },
  { title: "Trapping Rain Water", topic: "Arrays", level: "Hard", acc: "31%", solved: false },
  { title: "Trains & Relative Speed", topic: "Aptitude", level: "Easy", acc: "66%", solved: true },
  { title: "Blood Relations Puzzle", topic: "Logical Reasoning", level: "Medium", acc: "52%", solved: false },
  { title: "Word Ladder", topic: "Graphs", level: "Hard", acc: "27%", solved: false },
  { title: "Coin Change", topic: "DP", level: "Medium", acc: "44%", solved: false },
];

const levelTone: Record<string, string> = {
  Easy: "text-gold",
  Medium: "text-foreground",
  Hard: "text-destructive",
};

function PracticePage() {
  const [topic, setTopic] = useState<string>("All");
  const [level, setLevel] = useState<string>("All");
  const [q, setQ] = useState("");

  const rows = useMemo(
    () =>
      PROBLEMS.filter(
        (p) =>
          (topic === "All" || p.topic === topic) &&
          (level === "All" || p.level === level) &&
          p.title.toLowerCase().includes(q.toLowerCase().trim()),
      ),
    [topic, level, q],
  );

  const solved = PROBLEMS.filter((p) => p.solved).length;

  return (
    <PageShell>
      <PageHeader
        eyebrow="practice"
        title="Solve. Repeat."
        accent="Level up."
        description="Curated DSA problems and aptitude sets, organised by topic and difficulty so every session moves you forward."
      />

      <section className="px-5 py-10 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            {[
              { k: "Solved", v: `${solved} / ${PROBLEMS.length}` },
              { k: "Current streak", v: "12 days" },
              { k: "Accuracy", v: "78%" },
            ].map((s) => (
              <div key={s.k} className="rounded-lg border border-border bg-card p-5">
                <p className="label-mono">{s.k}</p>
                <p className="mt-2 font-display text-2xl font-bold">{s.v}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {TOPICS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTopic(t)}
                  className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                    topic === t
                      ? "border-gold bg-secondary text-gold"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="flex min-w-0 items-center gap-2 rounded-md border border-border px-3">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search problems"
                className="h-10 w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-muted-foreground lg:w-56"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {LEVELS.map((l) => (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className={`label-mono rounded border px-3 py-1 transition-colors ${
                  level === l ? "border-gold text-gold" : "border-border"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-lg border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface">
                <tr className="label-mono">
                  <th className="px-5 py-3 font-normal">Status</th>
                  <th className="px-5 py-3 font-normal">Problem</th>
                  <th className="hidden px-5 py-3 font-normal sm:table-cell">Topic</th>
                  <th className="px-5 py-3 font-normal">Level</th>
                  <th className="hidden px-5 py-3 font-normal sm:table-cell">Acceptance</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((p) => (
                  <tr
                    key={p.title}
                    className="border-t border-border transition-colors hover:bg-accent/50"
                  >
                    <td className="px-5 py-4">
                      {p.solved ? (
                        <CheckCircle2 className="h-4 w-4 text-gold" />
                      ) : (
                        <Circle className="h-4 w-4 text-muted-foreground" />
                      )}
                    </td>
                    <td className="px-5 py-4 font-medium">{p.title}</td>
                    <td className="hidden px-5 py-4 text-muted-foreground sm:table-cell">
                      {p.topic}
                    </td>
                    <td className={`px-5 py-4 font-medium ${levelTone[p.level]}`}>{p.level}</td>
                    <td className="hidden px-5 py-4 text-muted-foreground sm:table-cell">{p.acc}</td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-5 py-10 text-center text-muted-foreground">
                      No problems match these filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
