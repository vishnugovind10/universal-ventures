"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const listeners = new Set<() => void>();

function resolveTheme(): Theme {
  try {
    const active = document.documentElement.dataset.theme;
    if (active === "light" || active === "dark") {
      return active;
    }

    const stored = window.localStorage.getItem("uv-theme");
    if (stored === "light" || stored === "dark") {
      return stored;
    }

    return "dark";
  } catch {
    return "dark";
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem("uv-theme", theme);
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, resolveTheme, () => "dark");

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  }

  return (
    <button
      type="button"
      aria-label="Toggle color mode"
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
      className="h-9 w-fit border border-line bg-transparent px-3 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {theme === "dark" ? "Dark" : "Light"}
    </button>
  );
}
