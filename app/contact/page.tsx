import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { contactLinks } from "@/lib/site";

const collaborationModes = [
  "Strategic collaborations",
  "Infrastructure discussions",
  "Protocol research conversations",
  "Coordination system design partnerships",
];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Universal Ventures for protocol research, infrastructure discussions, and coordination systems design.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Conversations around resilient economic infrastructure"
        lede="For protocol teams, research groups, institutions, and builders working on coordination systems that need to survive real market pressure."
      />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.3fr_0.7fr] md:px-10 lg:px-16">
          <aside className="font-mono text-sm text-subtle">
            <p>Channels</p>
          </aside>
          <div className="grid gap-12">
            <div className="grid border-t border-line">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="grid gap-2 border-b border-line py-6 no-underline md:grid-cols-[0.26fr_0.74fr]"
                >
                  <span className="font-mono text-xs text-subtle">{link.label}</span>
                  <span className="text-lg text-foreground">{link.href.replace("mailto:", "")}</span>
                </a>
              ))}
            </div>

            <div>
              <p className="font-mono text-sm text-subtle">Relevant conversations</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {collaborationModes.map((mode) => (
                  <div key={mode} className="border-t border-line pt-4">
                    <p className="text-sm text-muted">{mode}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
