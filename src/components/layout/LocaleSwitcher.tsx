"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  return (
    <div className="flex items-center gap-1 text-xs font-medium text-primary-700/70">
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="mx-1 opacity-40">·</span>}
          <button
            type="button"
            onClick={() =>
              router.replace(
                // @ts-expect-error - pathname preserves dynamic params
                { pathname, params },
                { locale: l }
              )
            }
            className={cn(
              "uppercase tracking-wider transition-colors",
              l === locale
                ? "text-primary-800 font-semibold"
                : "hover:text-primary-700"
            )}
            aria-label={`Switch to ${l}`}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}
