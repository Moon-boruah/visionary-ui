import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Crown } from "lucide-react";
import { PageShell, PageHeader } from "@/components/page-shell";

export const Route = createFileRoute("/leaderboard")({
  head: () => ({
    meta: [
      { title: "Leaderboard — Prepify" },
      {
        name: "description",
        content:
          "See global, college and weekly rankings on Prepify and track how you move against your peers.",
      },
      { property: "og:title", content: "Leaderboard — Prepify" },
      {
        property: "og:description",
        content: "Global, college and weekly rankings across the Prepify community.",
      },
    ],
  }),
  component: LeaderboardPage,
});

const SCOPES = ["Global", "My College", "This Week"] as const;

const ROWS = [
  { rank: 1, name: "Aarav Mehta", college: "IIT Bombay", solved: 842, rating: 2410 },
  { rank: 2, name: "Sneha Iyer", college: "NIT Trichy", solved: 811, rating: 2358 },
  { rank: 3, name: "Rohit Das", college: "IIIT Hyderabad", solved: 795, rating: 2301 },
  { rank: 4, name: "Priya Nair", college: "BITS Pilani", solved: 762, rating: 2244 },
  { rank: 5, name: "Kabir Shah", college: "VIT Vellore", solved: 731, rating: 2190 },
  { rank: 6, name: "Ananya Roy", college: "Jadavpur University", solved: 704, rating: 2148 },
  { rank: 7, name: "Devansh Rao", college: "DTU Delhi", solved: 688, rating: 2103 },
  { rank: 8, name: "Meera Pillai", college: "Anna University", solved: 655, rating: 2061 },
];

function LeaderboardPage() {
  const [scope, setScope] = useState<string>("Global");

  return (
    <PageShell>
      <PageHeader
        eyebrow="leaderboard"
        title="Same grind."
        accent="Different results."
        description="Rankings update after every solved problem and every rated contest."
      />

      <section className="px-5 py-12 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-wrap gap-2">
            {SCOPES.map((s) => (
              <button
                key={s}
                onClick={() => setScope(s)}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                  scope === s
                    ? "border-gold bg-secondary text-gold"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {ROWS.slice(0, 3).map((r) => (
              <div
                key={r.rank}
                className={`card-lift rounded-lg border bg-card p-6 text-center ${
                  r.rank === 1 ? "gold-ring" : "border-border"
                }`}
              >
                <Crown
                  className={`mx-auto h-6 w-6 ${r.rank === 1 ? "text-gold" : "text-muted-foreground"}`}
                />
                <p className="mt-3 font-display text-lg font-bold">{r.name}</p>
                <p className="label-mono mt-1">{r.college}</p>
                <p className="mt-4 font-display text-3xl font-extrabold">{r.rating}</p>
                <p className="label-mono">rating</p>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-lg border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface">
                <tr className="label-mono">
                  <th className="px-5 py-3 font-normal">#</th>
                  <th className="px-5 py-3 font-normal">Student</th>
                  <th className="hidden px-5 py-3 font-normal sm:table-cell">College</th>
                  <th className="px-5 py-3 font-normal">Solved</th>
                  <th className="px-5 py-3 font-normal">Rating</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.rank} className="border-t border-border hover:bg-accent/50">
                    <td className="px-5 py-4 font-mono text-muted-foreground">{r.rank}</td>
                    <td className="px-5 py-4 font-medium">{r.name}</td>
                    <td className="hidden px-5 py-4 text-muted-foreground sm:table-cell">
                      {r.college}
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">{r.solved}</td>
                    <td className="px-5 py-4 font-medium text-gold">{r.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
