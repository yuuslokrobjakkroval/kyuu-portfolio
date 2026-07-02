"use client";

import * as React from "react";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  disableTransitionOnChange?: boolean;
  enableColorScheme?: boolean;
  enableSystem?: boolean;
  storageKey?: string;
  attribute?: "class";
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  resolvedTheme: ResolvedTheme;
  systemTheme: ResolvedTheme;
  themes: Theme[];
};

const ThemeProviderContext = React.createContext<ThemeProviderState>({
  theme: "system",
  setTheme: () => undefined,
  resolvedTheme: "light",
  systemTheme: "light",
  themes: ["light", "dark", "system"],
});

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getStoredTheme(storageKey: string, defaultTheme: Theme): Theme {
  if (typeof window === "undefined") {
    return defaultTheme;
  }

  try {
    const storedTheme = window.localStorage.getItem(storageKey);

    if (
      storedTheme === "light" ||
      storedTheme === "dark" ||
      storedTheme === "system"
    ) {
      return storedTheme;
    }
  } catch (error) {}

  return defaultTheme;
}

function disableTransitions() {
  const style = document.createElement("style");
  style.appendChild(
    document.createTextNode("*,*::before,*::after{transition:none!important}")
  );
  document.head.appendChild(style);

  return () => {
    window.getComputedStyle(document.body);
    window.setTimeout(() => {
      document.head.removeChild(style);
    }, 1);
  };
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  disableTransitionOnChange = false,
  enableColorScheme = true,
  enableSystem = true,
  storageKey = "theme",
  attribute = "class",
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme);
  const [systemTheme, setSystemTheme] = React.useState<ResolvedTheme>("light");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setThemeState(getStoredTheme(storageKey, defaultTheme));
    setSystemTheme(getSystemTheme());
    setMounted(true);
  }, [defaultTheme, storageKey]);

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => setSystemTheme(getSystemTheme());

    media.addEventListener("change", handleChange);
    handleChange();

    return () => media.removeEventListener("change", handleChange);
  }, []);

  const resolvedTheme =
    theme === "system" && enableSystem ? systemTheme : (theme as ResolvedTheme);

  React.useEffect(() => {
    if (!mounted) {
      return;
    }

    if (attribute !== "class") {
      return;
    }

    const restoreTransitions = disableTransitionOnChange
      ? disableTransitions()
      : undefined;
    const root = document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(resolvedTheme);

    if (enableColorScheme) {
      root.style.colorScheme = resolvedTheme;
    }

    restoreTransitions?.();
  }, [
    attribute,
    disableTransitionOnChange,
    enableColorScheme,
    mounted,
    resolvedTheme,
  ]);

  React.useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key !== storageKey) {
        return;
      }

      setThemeState(getStoredTheme(storageKey, defaultTheme));
    };

    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
  }, [defaultTheme, storageKey]);

  const setTheme = React.useCallback<ThemeProviderState["setTheme"]>(
    (value) => {
      setThemeState((currentTheme) => {
        const nextTheme =
          typeof value === "function" ? value(currentTheme) : value;

        try {
          window.localStorage.setItem(storageKey, nextTheme);
        } catch (error) {}

        return nextTheme;
      });
    },
    [storageKey]
  );

  const value = React.useMemo(
    () => ({
      theme,
      setTheme,
      resolvedTheme,
      systemTheme,
      themes: enableSystem
        ? (["light", "dark", "system"] as Theme[])
        : (["light", "dark"] as Theme[]),
    }),
    [enableSystem, resolvedTheme, setTheme, systemTheme, theme]
  );

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme() {
  return React.useContext(ThemeProviderContext);
}
