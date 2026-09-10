import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log In — Prepify" },
      { name: "description", content: "Log in to Prepify to continue your placement preparation." },
      { property: "og:title", content: "Log In — Prepify" },
      {
        property: "og:description",
        content: "Log in to Prepify to continue your placement preparation.",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <PageShell>
      <section className="mx-auto flex max-w-md flex-col px-5 py-20">
        <p className="label-mono">// welcome back</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight">
          Log in<span className="caret">_</span>
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Pick up your streak right where you left it.
        </p>

        <form
          className="mt-8 flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            navigate({ to: "/practice" });
          }}
        >
          <label className="flex flex-col gap-2">
            <span className="label-mono">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@college.edu"
              className="h-11 rounded-md border border-border bg-card px-4 text-sm outline-none focus:border-gold"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="label-mono">Password</span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="h-11 rounded-md border border-border bg-card px-4 text-sm outline-none focus:border-gold"
            />
          </label>
          <button
            type="submit"
            className="mt-2 h-11 rounded-md bg-primary text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-sm text-muted-foreground">
          New here?{" "}
          <Link to="/signup" className="font-medium text-gold">
            Create an account
          </Link>
        </p>
      </section>
    </PageShell>
  );
}
