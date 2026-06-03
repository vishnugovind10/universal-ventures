import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems, siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/95 shadow-sm shadow-line/20 backdrop-blur-sm">
      <div className="border-b border-line/70 bg-surface-muted/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 md:px-10 lg:px-16">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-subtle">
            Economic architecture for digital asset systems
          </p>
          <Link
            href="/contact"
            className="hidden font-mono text-xs text-accent no-underline hover:text-accent-strong sm:inline"
          >
            Discuss a system problem
          </Link>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
        <Link href="/" className="flex w-fit items-center gap-3 no-underline">
          <span className="flex h-10 w-10 items-center justify-center border border-accent bg-accent text-sm font-semibold text-surface">
            UV
          </span>
          <span>
            <span className="block text-xl font-semibold leading-none tracking-tight">
              {siteConfig.name}
            </span>
            <span className="mt-2 block font-mono text-xs text-subtle">
              Economic systems practice
            </span>
          </span>
        </Link>
        <div className="flex w-full min-w-0 flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
          <nav
            aria-label="Primary navigation"
            className="flex w-full min-w-0 flex-wrap gap-x-5 gap-y-3"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted no-underline hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
