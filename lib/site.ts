export const siteConfig = {
  name: "Universal Ventures",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://universal-ventures.vercel.app",
  description:
    "Independent practice designing and stress-testing token economics, stablecoin mechanisms and settlement architecture for institutions, protocols and funds. MiCA/DORA readiness diagnostics. Eleven open-source verification tools.",
};

export const navItems = [
  { label: "Work", href: "/work" },
  { label: "Diagnostic", href: "/diagnostic" },
  { label: "Systems", href: "/systems" },
  { label: "Research Objects", href: "/research" },
  { label: "Thesis", href: "/thesis" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vishnu-govind/" },
  { label: "Medium", href: "https://vishnugovind10.medium.com/" },
  { label: "GitHub", href: "https://github.com/vishnugovind10" },
];
