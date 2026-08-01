"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems, siteConfig } from "@/lib/site";

export function Navigation({ assetBasePath = "" }: { assetBasePath?: string }) {
  const brandMark = `${assetBasePath}/brand/universal-ventures-mark.png`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-line bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-7xl items-center gap-5 px-5 md:px-8 lg:px-12">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-3 no-underline"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="flex h-8 w-8 overflow-hidden border border-accent/70 bg-surface">
            <Image
              src={brandMark}
              alt=""
              aria-hidden="true"
              width={512}
              height={512}
              className="h-full w-full object-cover"
            />
          </span>
          <span className="hidden grid-cols-1 leading-none sm:grid">
            <span className="text-sm font-semibold tracking-normal text-foreground">
              {siteConfig.name}
            </span>
            <span className="mt-1 font-mono text-[0.56rem] uppercase tracking-[0.14em] text-subtle">
              Economic architecture
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="ml-auto hidden items-center gap-5 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[0.66rem] font-medium uppercase tracking-[0.12em] text-muted no-underline transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex min-w-0 items-center gap-2 lg:ml-2 lg:gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden h-9 items-center border border-accent px-4 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-accent no-underline transition-colors hover:bg-accent hover:text-background sm:inline-flex"
          >
            Consult <span aria-hidden="true" className="ml-2">-&gt;</span>
          </Link>

          <details className="group relative shrink-0 lg:hidden">
            <summary className="cursor-pointer list-none border border-line px-3 py-2 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted transition-colors hover:border-accent hover:text-accent">
              Menu
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-[calc(100%+0.65rem)] grid w-64 border border-line bg-surface p-2 shadow-2xl shadow-black/30"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-line px-3 py-3 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted no-underline last:border-b-0 hover:bg-surface-muted hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
