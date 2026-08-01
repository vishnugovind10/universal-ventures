import Image from "next/image";

export function HeroBrandPlate({
  coverSrc,
  markSrc,
}: {
  coverSrc: string;
  markSrc: string;
}) {
  return (
    <div className="overflow-hidden border border-line bg-surface shadow-sm shadow-black/20">
      <div className="relative">
        <Image
          src={coverSrc}
          alt="Universal Ventures systems architecture cover image"
          width={2400}
          height={397}
          priority
          className="h-36 w-full object-cover sm:h-44 md:h-48"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-transparent to-background/20" />
      </div>
      <div className="grid gap-5 border-t border-accent/70 bg-background/92 p-4 sm:grid-cols-[auto_1fr] sm:items-center">
        <Image
          src={markSrc}
          alt=""
          aria-hidden="true"
          width={512}
          height={512}
          className="h-16 w-16 border border-line object-cover"
        />
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
            Universal Ventures
          </p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Institutional systems analysis for token economics, settlement
            architecture, governance, liquidity, and market pressure.
          </p>
        </div>
      </div>
    </div>
  );
}
