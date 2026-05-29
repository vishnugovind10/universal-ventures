"use client";

import { useId, useState, type ReactNode } from "react";

type ProgressivePanelProps = {
  title: string;
  summary: string;
  consequence?: string;
  actionLabel: string;
  expandedLabel?: string;
  children: ReactNode;
  index?: string;
  className?: string;
};

export function ProgressivePanel({
  title,
  summary,
  consequence,
  actionLabel,
  expandedLabel = "Close Analysis",
  children,
  index,
  className = "",
}: ProgressivePanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <article
      className={`border border-line bg-surface p-5 shadow-sm shadow-line/20 transition-colors hover:border-line-strong ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        {index ? <p className="font-mono text-xs text-subtle">{index}</p> : null}
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((current) => !current)}
          className="ml-auto border border-line bg-surface-muted px-3 py-2 font-mono text-[0.68rem] uppercase tracking-normal text-accent transition-colors hover:border-accent hover:text-accent-strong focus:outline-none focus:ring-1 focus:ring-accent"
        >
          {isOpen ? expandedLabel : actionLabel}
        </button>
      </div>

      <h3 className="mt-8 max-w-xl text-2xl font-semibold leading-tight md:text-3xl">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-foreground md:text-base md:leading-7">
        {summary}
      </p>
      {consequence ? (
        <p className="mt-5 border-t border-line pt-4 font-mono text-xs leading-5 text-muted">
          {consequence}
        </p>
      ) : null}

      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-6 border-t border-line pt-5 text-sm leading-6 text-muted">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}
