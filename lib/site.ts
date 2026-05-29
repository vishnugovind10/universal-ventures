export const siteConfig = {
  name: "Universal Ventures",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://universal-ventures.vercel.app",
  description:
    "Professional economic systems architecture for emerging digital economies.",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Thesis", href: "/thesis" },
  { label: "Research", href: "/research" },
  { label: "Systems", href: "/systems" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/universalventures/" },
  { label: "Medium", href: "https://vishnugovind10.medium.com/" },
  { label: "GitHub", href: "https://github.com/vishnugovind10" },
];
