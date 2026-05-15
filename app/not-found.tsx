import Link from "next/link";

export default function NotFound() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
        <p className="font-mono text-sm text-subtle">404</p>
        <h1 className="mt-8 max-w-3xl font-serif text-5xl font-medium leading-none">
          This page is outside the current research surface.
        </h1>
        <Link href="/" className="mt-10 inline-block font-mono text-sm text-muted hover:text-foreground">
          Return home
        </Link>
      </div>
    </section>
  );
}
