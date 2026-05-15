import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems, siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
        <Link href="/" className="w-fit no-underline">
          <span className="block font-serif text-2xl font-medium leading-none">
            {siteConfig.name}
          </span>
          <span className="mt-2 block font-mono text-xs text-subtle">
            Economic systems architecture
          </span>
        </Link>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <nav aria-label="Primary navigation" className="flex flex-wrap gap-x-5 gap-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-xs text-muted no-underline hover:text-foreground"
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
