import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Clock, Users } from "lucide-react";
import { PageShell, PageHeader } from "@/components/page-shell";

export const Route = createFileRoute("/contests")({
  head: () => ({
    meta: [
      { title: "Coding Contests — Prepify" },
      {
        name: "description",
        content:
          "Join weekly rated coding contests, compete against peers and see where you stand in real time.",
      },
      { property: "og:title", content: "Coding Contests — Prepify" },
      {
        property: "og:description",
        content: "Weekly rated rounds, live standings and archived contest editions.",
      },
    ],
  }),
  component: ContestsPage,
});

const UPCOMING = [
  { name: "Weekly Round 48", when: "Sun, 14 Sep · 8:00 PM IST", mins: 90, reg: "3,204", tag: "Rated" },
  { name: "Aptitude Sprint 12", when: "Wed, 17 Sep · 9:00 PM IST", mins: 45, reg: "1,876", tag: "Unrated" },
  { name: "Placement Mock Marathon", when: "Sat, 20 Sep · 6:00 PM IST", mins: 180, reg: "942", tag: "Rated" },
];

const PAST = [
  { name: "Weekly Round 47", rank: "#128", solved: "3 / 4", delta: "+42" },
  { name: "Graph Special", rank: "#311", solved: "2 / 4", delta: "-18" },
  { name: "Weekly Round 46", rank: "#96", solved: "4 / 4", delta: "+65" },
];

function ContestsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="contests"
        title="Compete weekly."
        accent="Climb steadily."
        description="Rated rounds every week, live standings while you code, and a full archive to revisit afterwards."
      />

      <section className="px-5 py-12 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="font-display text-xl font-bold">Upcoming</h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {UPCOMING.map((c, i) => (
              <div
                key={c.name}
                className={`card-lift rounded-lg border bg-card p-6 ${i === 0 ? "gold-ring" : "border-border"}`}
              >
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <h3 className="font-display text-lg font-bold leading-snug">{c.name}</h3>
                  <span className="label-mono shrink-0 rounded border border-border px-2 py-0.5">
                    {c.tag}
                  </span>
                </div>
                <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4 shrink-0" /> {c.when}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 shrink-0" /> {c.mins} minutes
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4 shrink-0" /> {c.reg} registered
                </p>
                <button className="mt-6 h-10 w-full rounded-md bg-primary text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85">
                  Register
                </button>
              </div>
            ))}
          </div>

          <h2 className="mt-14 font-display text-xl font-bold">Your past rounds</h2>
          <div className="mt-5 overflow-hidden rounded-lg border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface">
                <tr className="label-mono">
                  <th className="px-5 py-3 font-normal">Contest</th>
                  <th className="px-5 py-3 font-normal">Rank</th>
                  <th className="px-5 py-3 font-normal">Solved</th>
                  <th className="px-5 py-3 font-normal">Rating</th>
                </tr>
              </thead>
              <tbody>
                {PAST.map((p) => (
                  <tr key={p.name} className="border-t border-border hover:bg-accent/50">
                    <td className="px-5 py-4 font-medium">{p.name}</td>
                    <td className="px-5 py-4">{p.rank}</td>
                    <td className="px-5 py-4 text-muted-foreground">{p.solved}</td>
                    <td
                      className={`px-5 py-4 font-medium ${p.delta.startsWith("+") ? "text-gold" : "text-destructive"}`}
                    >
                      {p.delta}
                    </td>
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
