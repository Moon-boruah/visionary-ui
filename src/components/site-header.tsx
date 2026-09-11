import { Link } from "@tanstack/react-router";
import { Menu, Moon, Search, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "./theme-provider";
import { SearchDialog } from "./search-dialog";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Practice", to: "/practice" },
  { label: "AI Interview", to: "/ai-interview" },
  { label: "Contests", to: "/contests" },
  { label: "Leaderboard", to: "/leaderboard" },
  { label: "About", to: "/about" },
] as const;

export function SiteHeader() {
  const { theme, toggle } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto grid max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-6 lg:px-8 xl:px-12">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <span className="font-mono text-lg text-gold">&gt;_</span>
            <span className="truncate font-display text-xl font-bold tracking-tight">Prepify</span>
          </Link>

          <nav className="hidden items-center gap-6 justify-self-center lg:flex xl:gap-8">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group relative py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-gold transition-all duration-300 group-hover:w-full group-data-[status=active]:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 justify-self-end sm:gap-3">
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>
            <button
              type="button"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggle}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-gold"
            >
              {theme === "dark" ? (
                <Sun className="h-[18px] w-[18px]" />
              ) : (
                <Moon className="h-[18px] w-[18px]" />
              )}
            </button>
            <Link
              to="/login"
              className="hidden h-9 shrink-0 items-center rounded-md border border-border px-5 text-sm font-medium transition-colors hover:border-gold hover:text-gold sm:inline-flex"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="hidden h-9 shrink-0 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85 sm:inline-flex"
            >
              Sign Up
            </Link>

            <button
              type="button"
              aria-label="Menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted-foreground lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-border bg-background px-5 py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                  activeProps={{ className: "text-gold" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex gap-3">
              <button className="h-9 flex-1 rounded-md border border-border text-sm font-medium">
                Log In
              </button>
              <button className="h-9 flex-1 rounded-md bg-primary text-sm font-medium text-primary-foreground">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </header>
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
