import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { ThemeBackdrop } from "@/components/theme-backdrop";

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

type Errors = { name?: string; email?: string; password?: string };

function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Enter a valid email address.";
    if (form.password.length < 6) next.password = "Password must be at least 6 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Frontend-only for now; a Node/Express + MongoDB API can be wired in here later.
    window.setTimeout(() => navigate({ to: "/practice" }), 400);
  };

  const fieldClass = (invalid?: string) =>
    `h-11 w-full rounded-md border bg-card pl-10 pr-10 text-sm outline-none transition-colors ${
      invalid ? "border-destructive focus:border-destructive" : "border-border focus:border-gold"
    }`;

  return (
    <PageShell>
      <section className="relative isolate flex min-h-[calc(100vh-4.5rem)] items-center overflow-hidden">
        <ThemeBackdrop />
        <div className="mx-auto w-full max-w-md px-5 py-16">
          <div className="hero-fade rounded-lg border border-border bg-card/90 p-7 backdrop-blur-sm">
            <p className="label-mono">// start the grind</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight">
              Sign up<span className="caret">_</span>
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Free to start. Practice, improve, get placed.
            </p>

            <form className="mt-8 flex flex-col gap-4" onSubmit={onSubmit} noValidate>
              <label className="flex flex-col gap-2">
                <span className="label-mono">Full name</span>
                <span className="relative block">
                  <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    className={fieldClass(errors.name)}
                  />
                </span>
                {errors.name && <span className="text-xs text-destructive">{errors.name}</span>}
              </label>

              <label className="flex flex-col gap-2">
                <span className="label-mono">Email</span>
                <span className="relative block">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="you@college.edu"
                    aria-invalid={Boolean(errors.email)}
                    className={fieldClass(errors.email)}
                  />
                </span>
                {errors.email && <span className="text-xs text-destructive">{errors.email}</span>}
              </label>

              <label className="flex flex-col gap-2">
                <span className="label-mono">Password</span>
                <span className="relative block">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={set("password")}
                    placeholder="Create a password"
                    aria-invalid={Boolean(errors.password)}
                    className={fieldClass(errors.password)}
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-gold"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </span>
                {errors.password && (
                  <span className="text-xs text-destructive">{errors.password}</span>
                )}
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 h-11 rounded-md bg-primary text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85 disabled:opacity-60"
              >
                {submitting ? "Creating account…" : "Create Account"}
              </button>
            </form>

            <p className="mt-6 text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-gold">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
