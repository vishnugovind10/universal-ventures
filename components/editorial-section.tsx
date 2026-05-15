import type { ReactNode } from "react";

type EditorialSectionProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function EditorialSection({ eyebrow, title, children }: EditorialSectionProps) {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.3fr_0.7fr] md:px-10 lg:px-16">
        <div>
          <p className="font-mono text-sm text-subtle">{eyebrow}</p>
        </div>
        <div>
          <h2 className="max-w-3xl font-serif text-4xl font-medium leading-none md:text-5xl">
            {title}
          </h2>
          <div className="mt-10">{children}</div>
        </div>
      </div>
    </section>
  );
}
