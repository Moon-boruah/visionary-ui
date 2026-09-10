import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const INDEX = [
  { label: "DSA Practice", to: "/practice", hint: "Curated problem sets" },
  { label: "AI Interview", to: "/ai-interview", hint: "Mock interview rooms" },
  { label: "Aptitude Prep", to: "/practice", hint: "Logical & quantitative" },
  { label: "Contests", to: "/contests", hint: "Weekly rated rounds" },
  { label: "Leaderboard", to: "/leaderboard", hint: "Global rankings" },
  { label: "About Prepify", to: "/about", hint: "Our story" },
] as const;

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const results = INDEX.filter((i) => i.label.toLowerCase().includes(query.toLowerCase().trim()));

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-background/70 p-4 pt-24 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-xl border border-border bg-popover shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-border px-4">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search problems, contests, topics…"
            className="h-14 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <kbd className="label-mono shrink-0 rounded border border-border px-1.5 py-0.5">esc</kbd>
        </div>
        <ul className="max-h-80 overflow-y-auto p-2">
          {results.length === 0 && (
            <li className="px-3 py-6 text-center text-sm text-muted-foreground">No matches yet.</li>
          )}
          {results.map((r) => (
            <li key={r.label + r.to}>
              <Link
                to={r.to}
                onClick={onClose}
                className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm hover:bg-accent"
              >
                <span>{r.label}</span>
                <span className="label-mono">{r.hint}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
