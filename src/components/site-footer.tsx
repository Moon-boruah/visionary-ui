import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 px-5 py-10 lg:px-12">
      <div className="mx-auto grid max-w-[1400px] gap-6 sm:flex sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-2">
          <span className="font-mono text-gold">&gt;_</span>
          <span className="font-display font-bold">Prepify</span>
          <span className="label-mono ml-3 hidden sm:inline">practice. improve. get placed.</span>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {[
            { label: "Practice", to: "/practice" },
            { label: "AI Interview", to: "/ai-interview" },
            { label: "Contests", to: "/contests" },
            { label: "Leaderboard", to: "/leaderboard" },
            { label: "About", to: "/about" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="label-mono">keep going...</p>
      </div>
    </footer>
  );
}
