import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHeader } from "@/components/page-shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Prepify — A home for future developers" },
      {
        name: "description",
        content:
          "Prepify brings DSA practice, aptitude prep and AI mock interviews together so students can walk into placements prepared.",
      },
      { property: "og:title", content: "About Prepify" },
      {
        property: "og:description",
        content: "Why we built one place for practice, preparation and interview reps.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="about"
        title="A developer builds"
        accent="a better tomorrow."
        description="Prepify started as a shared doc of interview questions between friends. It is now the place students open every night before the grind."
      />

      <section className="px-5 py-14 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Placement prep is scattered — problems on one site, aptitude on another, mock
              interviews nowhere. Students lose more time switching tabs than actually improving.
            </p>
            <p>
              We put practice, preparation and real interview reps under one roof, and wrapped it in
              progress you can actually feel: streaks, accuracy, rank movement, feedback after every
              round.
            </p>
            <p className="text-foreground">
              Same grind. Different results.
            </p>
            <Link
              to="/practice"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-7 text-sm font-semibold text-primary-foreground"
            >
              Start Your Journey <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { v: "10K+", l: "Active Students" },
              { v: "50K+", l: "Problems Solved" },
              { v: "95%", l: "Placement Impact" },
              { v: "500+", l: "Colleges Using Prepify" },
            ].map((s) => (
              <div key={s.l} className="rounded-lg border border-border bg-card p-6">
                <p className="font-display text-3xl font-extrabold">{s.v}</p>
                <p className="label-mono mt-1 normal-case tracking-normal">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
