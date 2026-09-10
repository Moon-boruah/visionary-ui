import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Sign Up — Prepify" },
      {
        name: "description",
        content: "Create your free Prepify account and start practising for placements.",
      },
      { property: "og:title", content: "Sign Up — Prepify" },
      {
        property: "og:description",
        content: "Create your free Prepify account and start practising for placements.",
      },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <PageShell>
      <section className="mx-auto flex max-w-md flex-col px-5 py-20">
        <p className="label-mono">// start the grind</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight">
          Sign up<span className="caret">_</span>
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Free to start. Practice, improve, get placed.
        </p>

        <form
          className="mt-8 flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            navigate({ to: "/practice" });
          }}
        >
          <label className="flex flex-col gap-2">
            <span className="label-mono">Full name</span>
            <input
              required
              value={form.name}
              onChange={set("name")}
              placeholder="Your name"
              className="h-11 rounded-md border border-border bg-card px-4 text-sm outline-none focus:border-gold"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="label-mono">Email</span>
            <input
              type="email"
              required
              value={form.email}
              onChange={set("email")}
              placeholder="you@college.edu"
              className="h-11 rounded-md border border-border bg-card px-4 text-sm outline-none focus:border-gold"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="label-mono">Password</span>
            <input
              type="password"
              required
              value={form.password}
              onChange={set("password")}
              placeholder="Create a password"
              className="h-11 rounded-md border border-border bg-card px-4 text-sm outline-none focus:border-gold"
            />
          </label>
          <button
            type="submit"
            className="mt-2 h-11 rounded-md bg-primary text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-gold">
            Log in
          </Link>
        </p>
      </section>
    </PageShell>
  );
}
