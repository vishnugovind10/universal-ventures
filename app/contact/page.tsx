import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { socialLinks } from "@/lib/site";

const collaborationModes = [
  "Protocol design",
  "Treasury architecture",
  "Incentive restructuring",
  "Coordination systems",
  "Infrastructure strategy",
];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discuss protocol design, treasury architecture, incentive restructuring, coordination systems, and infrastructure strategy with Universal Ventures.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's discuss your system."
        lede="For protocols, DAOs, digital asset networks, and institutions working through coordination, treasury, incentive, or market-structure pressure."
      />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[0.34fr_0.66fr] lg:px-16">
          <aside>
            <p className="font-mono text-sm text-subtle">Inquiry</p>
            <div className="mt-8 grid gap-3">
              {collaborationModes.map((mode) => (
                <p key={mode} className="border-t border-line pt-3 text-sm text-muted">
                  {mode}
                </p>
              ))}
            </div>
          </aside>

          <div className="grid gap-12">
            <div className="max-w-3xl">
              <p className="text-2xl leading-snug text-foreground">
                Use the form for research-led conversations around survivable
                economic systems, protocol architecture, and coordination
                infrastructure.
              </p>
              <p className="mt-5 text-base leading-7 text-muted">
                A direct intake surface for serious systems discussions, without
                sales pressure or performative urgency.
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
          </div>
        </div>
      </section>
    </>
  );
}
