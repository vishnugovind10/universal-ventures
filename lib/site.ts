export const siteConfig = {
  name: "Universal Ventures",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://universal-ventures.vercel.app",
  description:
    "Evidence-backed economic systems advisory and infrastructure for emerging digital economies.",
};

export const navItems = [
  { label: "Thesis", href: "/thesis" },
  { label: "Systems", href: "/systems" },
  { label: "Research + Systems", href: "/research" },
  { label: "Firm", href: "/about" },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/universalventures/" },
  { label: "Medium", href: "https://vishnugovind10.medium.com/" },
  { label: "GitHub", href: "https://github.com/vishnugovind10" },
];
