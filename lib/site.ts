export const siteConfig = {
  name: "Universal Ventures",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://universal-ventures.vercel.app",
  description:
    "Institutional economic architecture for digital asset systems operating under real constraints.",
};

export const navItems = [
  { label: "Work", href: "/work" },
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
