import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Calendar,
  Check,
  CircleDashed,
  CircuitBoard,
  Cog,
  Eye,
  Info,
  KeyRound,
  Minus,
  Plus,
  Shield,
  Waypoints,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { LocaleProvider, useCityName, useLocale, cities } from "@/components/locale";
import { RayDiagram } from "@/components/ray-diagram";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import "@/i18n";

const stageArt = [
  { image: "/media/stage-mech.jpg", icon: Cog },
  { image: "/media/stage-arduino.jpg", icon: CircuitBoard },
  { image: "/media/stage-pi.jpg", icon: Eye },
  { image: "/media/stage-ros.jpg", icon: Waypoints },
];

const collegeLogos: Record<string, string> = {
  salym: "/media/college-salym.png",
  tsi: "/media/college-tsi.png",
  compass: "/media/college-compass.png",
  portal: "/media/college-portal.png",
};

const principleIcons = [Check, CircleDashed, Shield, Minus];

const teamPhotos: Record<string, string> = {
  rayana: "/media/Urmatbekova_img.jpg",
  akylai: "/media/Ashirbekova_img.jpg",
  aizirek: "/media/Mairambekova_img.jpg",
  aisha: "/media/Timurova_img.jpg",
  elina: "/media/Erkinbekova_img.jpg",
  adilkhan: "/media/Satymkulov_img.jpg",
  anvar: "/media/Kumushbekov_img.jpg",
  abdykerim: "/media/Adenov2_img.png",
};

function registrationHref() {
  return site.registrationUrl || "#opening";
}

function FormLink({ children }: { children: string }) {
  const external = site.registrationUrl.startsWith("http");
  return (
    <a
      href={registrationHref()}
      className="text-soft underline decoration-white/20 underline-offset-4 transition-colors hover:text-ink"
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

function SectionKicker({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <p className="eyebrow shrink-0">
        {index}
        <span className="text-dim"> / {label}</span>
      </p>
      <div className="h-px flex-1 bg-hairline" />
    </div>
  );
}

function HomeContent() {
  const { t } = useTranslation();
  const cityGen = useCityName("genitive");
  const cityName = useCityName("name");
  const { city } = useLocale();
  const country = cities.find((item) => item.id === city)?.country ?? "";
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stages = t("stages.items", { returnObjects: true }) as Array<{ title: string; text: string }>;
  const colleges = t("network.colleges", { returnObjects: true }) as Array<{
    id: string;
    name: string;
    track: string;
  }>;
  const program = t("opening.items", { returnObjects: true }) as string[];
  const projects = t("projects.items", { returnObjects: true }) as Array<{
    tag: string;
    status: string;
    title: string;
    text: string;
  }>;
  const cards = t("principles.cards", { returnObjects: true }) as Array<{ title: string; text: string }>;
  const steps = t("path.steps", { returnObjects: true }) as Array<{ title: string; text: string }>;
  const events = t("events.items", { returnObjects: true }) as Array<{
    date: string;
    time: string;
    title: string;
    hot: boolean;
  }>;
  const people = t("team.people", { returnObjects: true }) as Array<{
    id: string;
    name: string;
    role: string;
    bio: string;
  }>;
  const faqs = t("faq.items", { returnObjects: true }) as Array<{ q: string; a: string }>;

  return (
    <div id="top" className="min-h-screen bg-bg text-ink">
      <SiteHeader />
      <main>
        <section className="wrap pt-12 pb-8 md:pt-16 md:pb-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
            <div>
              <p className="hero-in eyebrow" style={{ animationDelay: "40ms" }}>
                {t("hero.eyebrow")}
              </p>
              <h1 className="hero-in display mt-4 max-w-3xl" style={{ animationDelay: "90ms" }}>
                {t("hero.title", { city: cityGen })}
              </h1>
              <p
                className="hero-in mt-6 max-w-xl text-base leading-relaxed text-soft md:text-lg"
                style={{ animationDelay: "160ms" }}
              >
                {t("hero.lead")}
              </p>
              <div className="hero-in mt-8 flex flex-wrap gap-3" style={{ animationDelay: "220ms" }}>
                <a
                  href={registrationHref()}
                  className="inline-flex min-h-12 items-center gap-3 rounded-2xl bg-lilac px-5 text-sm font-semibold text-onlilac transition-transform duration-150 hover:brightness-105 active:scale-[0.96]"
                  {...(site.registrationUrl.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {t("hero.cta")}
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  href="#club"
                  className="inline-flex min-h-12 items-center gap-3 rounded-2xl border border-hairline px-5 text-sm font-medium text-ink transition-colors hover:bg-white/5 active:scale-[0.96]"
                >
                  {t("hero.secondary")}
                  <ArrowDown className="size-4" />
                </a>
              </div>
            </div>
            <div className="hero-in float-y mx-auto w-full max-w-md" style={{ animationDelay: "180ms" }}>
              <img
                src="/brand/hero-logo.png"
                alt="RoboComm"
                className="w-full max-w-full rounded-[2rem]"
              />
            </div>
          </div>

          <a
            href="#opening"
            className="hero-in mt-10 flex flex-col items-start gap-3 rounded-3xl bg-band px-5 py-4 transition-transform duration-150 hover:brightness-110 sm:flex-row sm:items-center sm:gap-4 md:px-7 md:py-5"
            style={{ animationDelay: "280ms" }}
          >
            <span className="shrink-0 text-2xl font-medium tracking-tight text-lilac md:text-3xl">
              {t("banner.date")}
            </span>
            <span className="hidden h-8 w-px bg-hairline sm:block" />
            <span className="min-w-0 flex-1 text-sm leading-relaxed text-ink md:text-base">
              {t("banner.text")}
            </span>
            <ArrowDown className="hidden size-4 shrink-0 text-lilac sm:block" />
          </a>
          <p className="mt-3 text-sm text-dim">
            {t("banner.reg")} <FormLink>{t("banner.form")}</FormLink>
          </p>
        </section>

        <section id="opening" className="scroll-mt-24 py-16 md:py-24">
          <div className="wrap">
            <Reveal>
              <SectionKicker index={t("opening.index")} label={t("opening.kicker")} />
              <h2 className="section-title">{t("opening.title")}</h2>
            </Reveal>
            <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
              <Reveal>
                <RayDiagram label={t("opening.diagram")} caption={t("opening.rays")} />
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[1, 2, 3, 4].map((key, index) => (
                    <div
                      key={key}
                      className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-hairline bg-panel/80 text-center"
                    >
                      <KeyRound
                        className="key-turn size-5 text-lilac"
                        style={{ animationDelay: `${index * 0.35}s` }}
                      />
                      <span className="eyebrow">
                        {t("opening.key")} {key}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs tracking-[0.16em] text-dim uppercase">{t("opening.keysCaption")}</p>
              </Reveal>
              <Reveal delay={80}>
                <div className="space-y-4 text-base leading-relaxed text-soft">
                  <p>{t("opening.p1")}</p>
                  <p>{t("opening.p2")}</p>
                </div>
                <h3 className="mt-8 text-xl font-semibold">{t("opening.program")}</h3>
                <ul className="mt-4 space-y-3">
                  {program.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-soft md:text-base">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lilac" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <Reveal className="mt-10 flex flex-col gap-4 border-t border-hairline pt-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow text-dim">{t("opening.when")}</p>
                <p className="mt-2 max-w-2xl text-ink">{t("opening.place")}</p>
                <p className="mt-1 text-sm text-dim">
                  {t("opening.door")} · <FormLink>{t("banner.form")}</FormLink>
                </p>
              </div>
              <a
                href={registrationHref()}
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-lilac px-5 text-sm font-semibold text-onlilac active:scale-[0.96]"
                {...(site.registrationUrl.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {t("opening.come")}
                <ArrowUpRight className="size-4" />
              </a>
            </Reveal>
          </div>
        </section>

        <section id="network" className="scroll-mt-24 py-16 md:py-24">
          <div className="wrap">
            <Reveal>
              <SectionKicker index={t("network.index")} label={t("network.kicker")} />
              <h2 className="section-title max-w-3xl">{t("network.title")}</h2>
            </Reveal>
            <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <Reveal>
                <div className="space-y-4 text-soft leading-relaxed">
                  <p>{t("network.p1")}</p>
                  <p>{t("network.p2")}</p>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div className="hidden grid-cols-[1fr_auto] px-2 pb-2 text-xs tracking-[0.14em] text-dim uppercase sm:grid">
                  <span>{t("network.colCollege")}</span>
                  <span>{t("network.colTrack")}</span>
                </div>
                <ul>
                  {colleges.map((college, index) => (
                    <li
                      key={college.id}
                      className="grid grid-cols-[auto_auto_1fr] items-center gap-3 border-t border-hairline py-4 sm:grid-cols-[auto_auto_1fr_auto] sm:gap-4"
                    >
                      <span
                        className={cn(
                          "size-2 rounded-full",
                          index === 0 ? "bg-lilac" : "border border-soft/70",
                        )}
                      />
                      <img
                        src={collegeLogos[college.id]}
                        alt=""
                        className="size-11 rounded-xl object-cover"
                      />
                      <div className="min-w-0">
                        <p className="font-medium text-ink">{college.name}</p>
                        {index === 0 ? (
                          <span className="mt-1 inline-flex rounded-full bg-band px-2.5 py-1 text-xs text-lilac sm:hidden">
                            {t("network.opens")}
                          </span>
                        ) : null}
                      </div>
                      <div className="col-span-3 text-sm text-soft sm:col-span-1 sm:text-right">
                        <p>{college.track}</p>
                        {index === 0 ? (
                          <span className="mt-1 hidden rounded-full bg-band px-2.5 py-1 text-xs text-lilac sm:inline-flex">
                            {t("network.opens")}
                          </span>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="learn" className="scroll-mt-24 py-16 md:py-24">
          <div className="wrap">
            <Reveal>
              <SectionKicker index={t("stages.index")} label={t("stages.kicker")} />
              <h2 className="section-title">{t("stages.title")}</h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stages.map((stage, index) => {
                const Icon = stageArt[index]?.icon ?? Cog;
                return (
                  <Reveal key={stage.title} delay={index * 80}>
                    <article className="relative h-72 overflow-hidden rounded-3xl">
                      <img
                        src={stageArt[index]?.image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />
                      <div className="relative flex h-full flex-col justify-between p-5">
                        <div className="flex items-start justify-between text-sm text-ink/80">
                          <span>0{index + 1}</span>
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <h3 className="text-xl leading-tight font-semibold">{stage.title}</h3>
                          <p className="mt-2 text-sm text-ink/80">{stage.text}</p>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
            <Reveal>
              <p className="mt-6 max-w-3xl text-soft leading-relaxed">{t("stages.note")}</p>
            </Reveal>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 py-16 md:py-24">
          <div className="wrap">
            <Reveal>
              <SectionKicker index={t("projects.index")} label={t("projects.kicker")} />
              <h2 className="section-title">{t("projects.title")}</h2>
            </Reveal>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Reveal key={project.title} delay={index * 90}>
                  <article className="flex h-full flex-col rounded-3xl border border-hairline bg-card p-3">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-panel">
                      {index === 0 ? (
                        <RayDiagram compact />
                      ) : (
                        <img
                          src={index === 1 ? "/media/proj-rover.jpg" : "/media/proj-expo.jpg"}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      )}
                      <p className="absolute bottom-3 left-3 text-xs tracking-widest text-ink/80 uppercase">
                        {project.tag}
                      </p>
                    </div>
                    <span className="mt-4 inline-flex w-fit rounded-full bg-band px-3 py-1 text-xs text-lilac">
                      {project.status}
                    </span>
                    <h3 className="mt-4 text-2xl leading-tight font-semibold">{project.title}</h3>
                    <p className="mt-2 pb-2 text-sm leading-relaxed text-soft">{project.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="club" className="scroll-mt-24 py-16 md:py-24">
          <div className="wrap">
            <Reveal>
              <SectionKicker index={t("principles.index")} label={t("principles.kicker")} />
              <h2 className="section-title">{t("principles.title")}</h2>
            </Reveal>
            <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <Reveal>
                <p className="text-3xl leading-tight font-semibold text-lilac md:text-4xl">
                  {t("principles.lead")}
                </p>
                <p className="mt-5 max-w-md leading-relaxed text-soft">{t("principles.text")}</p>
              </Reveal>
              <div className="grid gap-3 sm:grid-cols-2">
                {cards.map((card, index) => {
                  const Icon = principleIcons[index] ?? Minus;
                  return (
                    <Reveal key={card.title} delay={index * 70}>
                      <article className="h-full rounded-3xl bg-card p-5">
                        <Icon className="size-5 text-lilac" />
                        <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-soft">{card.text}</p>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="path" className="scroll-mt-24 py-16 md:py-20">
          <div className="wrap">
            <Reveal>
              <SectionKicker index={t("path.index")} label={t("path.kicker")} />
              <h2 className="section-title">{t("path.title")}</h2>
            </Reveal>
            <ol className="mt-10 grid gap-8 md:grid-cols-3">
              {steps.map((step, index) => (
                <Reveal key={step.title} delay={index * 90}>
                  <li>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-full border border-lilac/50 text-sm text-lilac">
                        0{index + 1}
                      </span>
                      {index < steps.length - 1 ? (
                        <span className="hidden h-px flex-1 bg-hairline md:block" />
                      ) : (
                        <span className="hidden h-px flex-1 bg-hairline md:block" />
                      )}
                      <ArrowUpRight className="hidden size-4 -rotate-45 text-dim md:block" />
                    </div>
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-soft">{step.text}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal>
              <p className="mt-10 flex gap-3 rounded-2xl border border-hairline px-4 py-4 text-sm leading-relaxed text-soft">
                <Info className="mt-0.5 size-4 shrink-0 text-lilac" />
                <span>{t("path.note")}</span>
              </p>
            </Reveal>
          </div>
        </section>

        <section id="events" className="scroll-mt-24 py-16 md:py-24">
          <div className="wrap">
            <Reveal>
              <SectionKicker index={t("events.index")} label={t("events.kicker")} />
              <h2 className="section-title">{t("events.title")}</h2>
            </Reveal>
            <Reveal>
              <ul className="mt-8 overflow-hidden rounded-3xl border border-hairline">
                {events.map((event) => {
                  const row = (
                    <>
                      <span className={cn("font-medium", event.hot ? "text-lilac" : "text-ink")}>
                        {event.date}
                      </span>
                      <span className="text-sm text-dim">{event.time}</span>
                      <span className="text-ink">{event.title}</span>
                      {event.hot ? (
                        <ArrowUpRight className="size-4 justify-self-end text-lilac" />
                      ) : (
                        <Calendar className="size-4 justify-self-end text-lilac" />
                      )}
                    </>
                  );
                  const className = cn(
                    "grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 px-4 py-4 sm:grid-cols-[9rem_4.5rem_1fr_auto] sm:px-5",
                    event.hot && "bg-band",
                  );
                  return (
                    <li key={event.title} className="border-t border-hairline first:border-t-0">
                      {event.hot ? (
                        <a href="#opening" className={className}>
                          {row}
                        </a>
                      ) : (
                        <div className={className}>{row}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
              <p className="mt-4 text-sm text-dim">
                {t("events.telegram")}{" "}
                {site.telegram ? (
                  <a href={site.telegram} className="text-lilac hover:underline" target="_blank" rel="noreferrer">
                    {t("events.telegramLink")}
                  </a>
                ) : (
                  <span className="text-soft">{t("events.telegramLink")}</span>
                )}
                .
              </p>
            </Reveal>
          </div>
        </section>

        <section id="team" className="scroll-mt-24 py-16 md:py-24">
          <div className="wrap">
            <Reveal>
              <SectionKicker index={t("team.index")} label={t("team.kicker")} />
              <h2 className="section-title">{t("team.title")}</h2>
            </Reveal>
            <ul className="mt-8 grid gap-x-10 md:grid-cols-2">
              {people.map((person, index) => (
                <Reveal key={person.id} delay={(index % 2) * 60}>
                  <li className="flex min-w-0 gap-4 border-t border-hairline py-5">
                    <img
                      src={teamPhotos[person.id] ?? `/media/avatar-${person.id}.jpg`}
                      alt=""
                      className="size-16 shrink-0 rounded-full object-cover sm:size-18"
                    />
                    <div className="min-w-0">
                      <p className="font-semibold">{person.name}</p>
                      <p className="text-sm text-lilac">{person.role}</p>
                      <p className="mt-1 text-sm text-soft">{person.bio}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 py-16 md:py-24">
          <div className="wrap">
            <Reveal>
              <SectionKicker index={t("faq.index")} label={t("faq.kicker")} />
              <h2 className="section-title">{t("faq.title")}</h2>
            </Reveal>
            <ul className="mt-8 border-t border-hairline">
              {faqs.map((item, index) => {
                const open = openFaq === index;
                return (
                  <li key={item.q} className="border-b border-hairline">
                    <button
                      type="button"
                      className="flex w-full flex-wrap items-start gap-x-6 gap-y-2 py-5 text-left"
                      aria-expanded={open}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => setOpenFaq((current) => (current === index ? null : index))}
                    >
                      <span className="order-1 min-w-0 flex-1 text-lg font-medium md:w-[38%] md:flex-none">
                        {item.q}
                      </span>
                      <span
                        id={`faq-answer-${index}`}
                        className={cn(
                          "order-3 basis-full text-sm leading-relaxed text-soft md:order-2 md:flex-1 md:basis-0",
                          !open && "hidden",
                        )}
                      >
                        {item.a}
                      </span>
                      {open ? (
                        <Minus className="order-2 size-4 shrink-0 text-dim md:order-3" />
                      ) : (
                        <Plus className="order-2 size-4 shrink-0 text-dim md:order-3" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <footer id="contact" className="scroll-mt-24 bg-band text-ink">
          <div className="wrap py-16 md:py-20">
            <Reveal>
              <SectionKicker index={t("contact.index")} label={t("contact.kicker")} />
              <div className="flex items-start justify-between gap-4">
                <h2 className="section-title">{t("contact.title")}</h2>
                <ArrowUpRight className="mt-2 size-7 text-lilac" />
              </div>
              <p className="mt-8 text-base text-lilac md:text-lg">
                <ContactBit href={site.email ? `mailto:${site.email}` : ""}>{t("contact.mail")}</ContactBit>
                <span className="text-soft"> · </span>
                <ContactBit href={site.instagram}>{t("contact.instagram")}</ContactBit>
                <span className="text-soft"> · </span>
                <ContactBit href={site.telegram}>{t("contact.telegram")}</ContactBit>
              </p>
            </Reveal>
            <p className="wordmark mt-12">RoboComm</p>
            <div className="mt-4 flex items-end justify-between gap-4 text-xs tracking-[0.16em] text-lilac/80 uppercase">
              <p className="max-w-xl text-sm tracking-normal text-soft normal-case">
                {t("footer.rights", { city: cityName })}
              </p>
              <p className="text-right">
                {cityName} / {country}
                <br />
                {t("footer.year")}
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function ContactBit({ href, children }: { href: string; children: string }) {
  if (!href) return <span>{children}</span>;
  const external = href.startsWith("http");
  return (
    <a href={href} className="hover:underline" {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
      {children}
    </a>
  );
}

export function HomePage() {
  return (
    <LocaleProvider>
      <HomeContent />
    </LocaleProvider>
  );
}
