import type { ReactNode } from "react";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="pt-12 sm:pt-20 pb-10 sm:pb-14">
      <div className="container-x max-w-4xl">
        {eyebrow && (
          <p className="text-xs uppercase tracking-widest text-primary-600 mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-primary-900 leading-[1.05]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg text-foreground/70 max-w-2xl">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
