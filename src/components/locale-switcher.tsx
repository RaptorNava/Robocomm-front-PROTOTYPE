import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cities, languages, useLocale } from "@/components/locale";
import { cn } from "@/lib/cn";

export function LocaleSwitcher({ className }: { className?: string }) {
  const { t } = useTranslation();
  const { city, language, setCity, setLanguage } = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const cityName = t(`city.${city}.name`);
  const short = languages.find((item) => item.code === language)?.short ?? "RU";

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        className="flex h-11 items-center gap-2 rounded-full border border-hairline bg-white/5 px-3.5 text-xs font-semibold tracking-[0.12em] text-lilac uppercase transition-colors hover:bg-white/10"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="size-1.5 rounded-full bg-lilac" aria-hidden />
        <span className="max-w-28 truncate">{cityName}</span>
        <span className="text-soft">/</span>
        <span>{short}</span>
        <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} />
      </button>
      {open ? (
        <div
          id={panelId}
          role="dialog"
          aria-label={t("switcher.label")}
          className="absolute top-[calc(100%+0.5rem)] right-0 z-50 w-72 rounded-2xl border border-hairline bg-card p-2 shadow-2xl"
        >
          <p className="px-3 pt-2 pb-1 text-[0.68rem] font-semibold tracking-[0.14em] text-dim uppercase">
            {t("switcher.city")}
          </p>
          <ul>
            {cities.map((item) => {
              const selected = item.id === city;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    className={cn(
                      "flex min-h-11 w-full items-center gap-3 rounded-xl px-3 text-left text-sm transition-colors",
                      selected ? "bg-lilac/15 text-ink" : "text-soft hover:bg-white/5 hover:text-ink",
                    )}
                    onClick={() => setCity(item.id)}
                  >
                    <Check className={cn("size-4 text-lilac", !selected && "opacity-0")} />
                    <span className="flex-1 font-medium">{t(`city.${item.id}.name`)}</span>
                    <span className="text-xs tracking-wider text-dim">{item.country}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="mt-2 px-3 pt-2 pb-1 text-[0.68rem] font-semibold tracking-[0.14em] text-dim uppercase">
            {t("switcher.language")}
          </p>
          <ul>
            {languages.map((item) => {
              const selected = item.code === language;
              return (
                <li key={item.code}>
                  <button
                    type="button"
                    className={cn(
                      "flex min-h-11 w-full items-center gap-3 rounded-xl px-3 text-left text-sm transition-colors",
                      selected ? "bg-lilac/15 text-ink" : "text-soft hover:bg-white/5 hover:text-ink",
                    )}
                    onClick={() => {
                      setLanguage(item.code);
                      setOpen(false);
                    }}
                  >
                    <Check className={cn("size-4 text-lilac", !selected && "opacity-0")} />
                    <span className="flex-1 font-medium">{item.label}</span>
                    <span className="text-xs tracking-wider text-dim">{item.short}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
