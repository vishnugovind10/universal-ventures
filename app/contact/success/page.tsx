import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Message Received",
  description: "Confirmation page for Universal Ventures contact inquiries.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ContactSuccessPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Message received." />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.3fr_0.7fr] md:px-10 lg:px-16">
          <aside className="font-mono text-sm text-subtle">
            <p>Confirmation</p>
          </aside>
          <div>
            <p className="max-w-2xl text-xl leading-8 text-muted">
              If the inquiry aligns with current research or collaboration priorities,
              a response will follow directly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
