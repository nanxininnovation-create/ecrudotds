import * as React from "react";
import { Button } from "@ecru/core";
import { cn } from "@ecru/utils";

export interface HeroCenteredProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}

export function HeroCentered({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
  ...props
}: HeroCenteredProps) {
  return (
    <section
      className={cn(
        "mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-24 text-center",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span className="text-sm font-medium text-accent">{eyebrow}</span>
      )}
      <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="max-w-2xl text-pretty text-lg text-fg-muted">
          {description}
        </p>
      )}
      {(primaryAction || secondaryAction) && (
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          {primaryAction && (
            <Button asChild size="lg">
              <a href={primaryAction.href}>{primaryAction.label}</a>
            </Button>
          )}
          {secondaryAction && (
            <Button asChild size="lg" variant="outline">
              <a href={secondaryAction.href}>{secondaryAction.label}</a>
            </Button>
          )}
        </div>
      )}
    </section>
  );
}
