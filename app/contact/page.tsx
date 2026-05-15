import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { socialLinks } from "@/lib/site";

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
            <p>Inquiry</p>
          </aside>
          <div className="grid gap-12">
            <div className="max-w-3xl">
              <p className="text-xl leading-8 text-foreground">
                Research inquiries, protocol architecture discussions, strategic
                coordination work, and collaboration conversations.
              </p>
              <p className="mt-4 text-base leading-7 text-muted">
                Use the form below to get in touch.
              </p>
            </div>

            <ContactForm />

            <div>
              <p className="font-mono text-sm text-subtle">Reference channels</p>
              <div className="mt-6 grid border-t border-line">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="grid gap-2 border-b border-line py-6 no-underline md:grid-cols-[0.26fr_0.74fr]"
                  >
                    <span className="font-mono text-xs text-subtle">{link.label}</span>
                    <span className="break-words text-lg text-foreground">{link.href}</span>
                  </a>
                ))}
              </div>
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
