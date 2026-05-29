type PageHeaderProps = {
  eyebrow: string;
  title: string;
  lede?: string;
};

export function PageHeader({ eyebrow, title, lede }: PageHeaderProps) {
  return (
    <section className="border-b border-line bg-surface-muted/45">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-8 max-w-full break-words text-4xl font-semibold leading-none tracking-tight sm:max-w-5xl sm:text-5xl md:text-7xl">
          {title}
        </h1>
        {lede ? (
          <p className="mt-8 max-w-full break-words text-lg leading-8 text-muted sm:max-w-3xl sm:text-xl md:text-2xl md:leading-9">
            {lede}
          </p>
        ) : null}
      </div>
    </section>
  );
}
