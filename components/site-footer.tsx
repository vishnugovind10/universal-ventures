import Link from "next/link";
import { navItems, siteConfig, socialLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-inverse text-inverse-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1fr_1fr] md:px-10 lg:px-16">
        <div>
          <p className="text-2xl font-semibold">{siteConfig.name}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-inverse-foreground/70">
            Evidence-backed economic systems advisory and infrastructure for
            emerging digital economies.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <nav aria-label="Footer navigation" className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-inverse-foreground/70 hover:text-inverse-foreground"
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
                className="text-sm text-inverse-foreground/70 hover:text-inverse-foreground"
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
