import { useTheme } from "./theme-provider";
import heroLight from "@/assets/hero-light.jpg.asset.json";
import heroDark from "@/assets/hero-dark.jpg.asset.json";

/** Full-bleed theme-aware background photo with a readability scrim. */
export function ThemeBackdrop() {
  const { theme } = useTheme();

  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${theme === "dark" ? heroDark.url : heroLight.url})` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background/70 via-background/25 to-transparent dark:from-background/70 dark:via-background/25 dark:to-transparent"
      />
    </>
  );
}
