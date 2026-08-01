import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/asset-path";
import { navItems, siteConfig, socialLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface text-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-[1fr_1fr] md:px-10 lg:px-16">
        <div className="grid gap-5 sm:grid-cols-[auto_1fr]">
          <Image
            src={assetPath("/brand/universal-ventures-logo.jpg")}
            alt="Universal Ventures logo"
            width={960}
            height={960}
            className="h-24 w-24 border border-line object-cover"
          />
          <div>
            <p className="font-serif text-3xl font-medium">{siteConfig.name}</p>
            <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-accent">
              Economic architecture practice
            </p>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted">
              Economic and settlement architecture for institutional digital
              asset systems: token economics, stablecoin mechanisms, and
              MiCA/DORA readiness.
            </p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <nav aria-label="Footer navigation" className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted no-underline hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Social links" className="grid gap-2">
            {socialLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted no-underline hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
