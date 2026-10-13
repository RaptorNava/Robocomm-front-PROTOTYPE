import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { cn } from "@/lib/cn";

const links = [
  { href: "#opening", key: "opening" },
  { href: "#network", key: "network" },
  { href: "#projects", key: "projects" },
  { href: "#club", key: "about" },
  { href: "#team", key: "team" },
] as const;

export function SiteHeader() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-hairline/80 bg-bg/80 backdrop-blur-md">
      <div className="wrap flex h-16 items-center gap-3 md:h-[4.5rem]">
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <img src="/brand/mark.png" alt="" className="size-9 rounded-full object-cover" />
          <span className="text-lg font-semibold tracking-tight">RoboComm</span>
        </a>
        <nav className="ml-auto hidden items-center gap-7 lg:flex" aria-label={t("nav.menu")}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-soft transition-colors hover:text-ink"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 lg:ml-6">
          <LocaleSwitcher />
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-hairline text-ink lg:hidden"
            aria-expanded={open}
            aria-label={open ? t("nav.close") : t("nav.menu")}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      <div className={cn("border-t border-hairline lg:hidden", !open && "hidden")}>
        <nav className="wrap flex flex-col py-2" aria-label={t("nav.menu")}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex min-h-12 items-center text-base text-ink"
              onClick={() => setOpen(false)}
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
