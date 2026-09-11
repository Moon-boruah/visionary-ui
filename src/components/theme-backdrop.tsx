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
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/20 dark:from-background dark:via-background/80 dark:to-background/10"
      />
    </>
  );
}
