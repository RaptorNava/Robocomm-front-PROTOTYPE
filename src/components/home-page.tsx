import { useRef, useState, type KeyboardEvent, type PointerEvent, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Calendar,
  Check,
  CircleDashed,
  CircuitBoard,
  Cog,
  Eye,
  GraduationCap,
  Info,
  Instagram,
  KeyRound,
  Mail,
  Minus,
  Plus,
  Send,
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
  {
    image: "/media/stage-mech.jpg",
    video: "/media/video/MechanicsElect_edit.mp4",
    icon: Cog,
  },
  {
    image: "/media/stage-arduino.jpg",
    video: "/media/video/Arduino_edit.mp4",
    icon: CircuitBoard,
  },
  { image: "/media/stage-pi.jpg", video: "/media/video/CV_edit.mp4", icon: Eye },
  { image: "/media/stage-ros.jpg", video: "/media/video/ROS2_edit.mp4", icon: Waypoints },
];

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

function VideoPreview({
  image,
  video,
  title,
  className,
  children,
}: {
  image: string;
  video: string;
  title: string;
  className: string;
  children: ReactNode | ((playing: boolean) => ReactNode);
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    const element = videoRef.current;
    if (!element) return;
    setPlaying(true);
    void element.play().catch(() => setPlaying(false));
  };

  const stop = () => {
    const element = videoRef.current;
    if (element) {
      element.pause();
      element.currentTime = 0;
    }
    setPlaying(false);
  };

  const toggle = () => (playing ? stop() : start());
  const onPointerEnter = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse") start();
  };
  const onPointerLeave = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse") stop();
  };
  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") {
      event.preventDefault();
      toggle();
    }
  };
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  };

  return (
    <div
      className={cn("overflow-hidden", className)}
      role="button"
      tabIndex={0}
      aria-label={title}
      aria-pressed={playing}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onPointerUp={onPointerUp}
      onKeyDown={onKeyDown}
      onBlur={stop}
    >
      <img
        src={image}
        alt=""
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
          playing ? "opacity-0" : "opacity-100",
        )}
      />
      <video
        ref={videoRef}
        src={video}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
          playing ? "opacity-100" : "opacity-0",
        )}
      />
      {typeof children === "function" ? children(playing) : children}
    </div>
  );
}

function registrationHref() {
  return site.registrationUrl;
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

  const stages = t("stages.items", { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;
  const program = t("opening.items", { returnObjects: true }) as string[];
  const projects = t("projects.items", { returnObjects: true }) as Array<{
    tag: string;
    status: string;
    title: string;
    text: string;
  }>;
  const cards = t("principles.cards", { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;
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
              <div
                className="hero-in mt-8 flex flex-wrap gap-3"
                style={{ animationDelay: "220ms" }}
              >
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
            <div
              className="hero-in float-y mx-auto w-full max-w-md"
              style={{ animationDelay: "180ms" }}
            >
              <img
                src="/media/Robocomm_logo.jpg"
                alt="RoboComm"
                className="w-full max-w-full rounded-[2rem]"
              />
            </div>
          </div>

          <a
            href={registrationHref()}
            target="_blank"
            rel="noreferrer"
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
        </section>

        <section id="opening" className="scroll-mt-24 py-16 md:py-24">
          <div className="wrap">
            <Reveal>
              <SectionKicker index={t("opening.index")} label={t("opening.kicker")} />
              <h2 className="section-title">{t("opening.title")}</h2>
            </Reveal>
            <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
              <Reveal>
                <VideoPreview
                  image="/media/Flag_of_Kyrgyzstan.webp"
                  video="/media/video/40rays.mp4"
                  title={t("opening.title")}
                  className="relative aspect-square rounded-3xl bg-panel"
                >
                  {(playing) =>
                    playing ? (
                      <>
                        <div className="pointer-events-none absolute inset-0 bg-bg/35" />
                        <p className="eyebrow absolute top-4 left-4">
                          {t("opening.diagram")}
                        </p>
                      </>
                    ) : (
                      <RayDiagram label={t("opening.diagram")} caption={t("opening.rays")} />
                    )
                  }
                </VideoPreview>
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
                <p className="mt-3 text-xs tracking-[0.16em] text-dim uppercase">
                  {t("opening.keysCaption")}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <div className="space-y-4 text-base leading-relaxed text-soft">
                  <p>{t("opening.p1")}</p>
                  <p>{t("opening.p2")}</p>
                </div>
                <h3 className="mt-8 text-xl font-semibold">{t("opening.program")}</h3>
                <ul className="mt-4 space-y-3">
                  {program.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-soft md:text-base"
                    >
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
                <p className="mt-1 text-sm text-dim">{t("opening.door")}</p>
              </div>
              <a
                href={registrationHref()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-lilac px-5 text-sm font-semibold text-onlilac active:scale-[0.96]"
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
                <div className="flex items-start gap-4 border-t border-hairline py-5">
                  <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-band text-lilac">
                    <GraduationCap className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-ink">{t("network.openTitle")}</p>
                    <p className="mt-1 text-sm leading-relaxed text-soft">
                      {t("network.openText")}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="partners-title"
          className="overflow-hidden border-y border-hairline py-7 md:py-9"
        >
          <div className="wrap">
            <p className="eyebrow">{t("partners.kicker")}</p>
            <h2 id="partners-title" className="mt-2 text-xl font-semibold md:text-2xl">
              {t("partners.title")}
            </h2>
          </div>
          <div
            className="wrap mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:justify-start"
            aria-label={t("partners.title")}
          >
            <div className="flex min-w-0 items-center gap-4">
              <img
                src="/media/AIAcademy.png"
                alt=""
                className="size-20 shrink-0 rounded-lg object-contain md:size-24"
              />
              <span className="text-sm font-semibold text-ink md:text-base">AI Academy</span>
            </div>
            <div className="flex min-w-0 items-center gap-4">
              <img
                src="/media/NEN_logo.jpg"
                alt=""
                className="h-20 w-36 shrink-0 rounded-lg border border-white/10 object-cover md:h-24 md:w-44"
              />
              <span className="max-w-40 text-sm font-semibold text-ink md:text-base">
                National Education Network
              </span>
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
                    <VideoPreview
                      image={stageArt[index]?.image ?? stageArt[0].image}
                      video={stageArt[index]?.video ?? stageArt[0].video}
                      title={stage.title}
                      className="relative h-72 rounded-3xl"
                    >
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />
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
                    </VideoPreview>
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
                        <VideoPreview
                          image="/media/Flag_of_Kyrgyzstan.webp"
                          video="/media/video/40rays.mp4"
                          title={project.title}
                          className="absolute inset-0"
                        >
                          {(playing) => (
                            <>
                              {!playing ? <RayDiagram compact /> : null}
                              {playing ? (
                                <div className="pointer-events-none absolute inset-0 bg-bg/35" />
                              ) : null}
                              <p className="pointer-events-none absolute bottom-3 left-3 text-xs tracking-widest text-ink/80 uppercase">
                                {project.tag}
                              </p>
                            </>
                          )}
                        </VideoPreview>
                      ) : index === 1 ? (
                        <VideoPreview
                          image="/media/proj-rover.jpg"
                          video="/media/video/ArdMachine.mp4"
                          title={project.title}
                          className="absolute inset-0"
                        >
                          <p className="pointer-events-none absolute bottom-3 left-3 text-xs tracking-widest text-ink/80 uppercase">
                            {project.tag}
                          </p>
                        </VideoPreview>
                      ) : (
                        <img
                          src="/media/proj-expo.jpg"
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      )}
                      {index > 1 ? (
                        <p className="absolute bottom-3 left-3 text-xs tracking-widest text-ink/80 uppercase">
                          {project.tag}
                        </p>
                      ) : null}
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
                  <a
                    href={site.telegram}
                    className="text-lilac hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <Send className="size-3.5" aria-hidden="true" />
                      {t("events.telegramLink")}
                    </span>
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
                    {teamPhotos[person.id] ? (
                      <img
                        src={teamPhotos[person.id]}
                        alt=""
                        className="size-16 shrink-0 rounded-full object-cover sm:size-18"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="grid size-16 shrink-0 place-items-center rounded-full border border-hairline bg-band text-sm font-semibold text-lilac sm:size-18"
                      >
                        {person.name
                          .split(" ")
                          .map((part) => part[0])
                          .slice(0, 2)
                          .join("")}
                      </span>
                    )}
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
                      className="flex min-h-16 w-full items-center justify-between gap-5 py-5 text-left"
                      aria-expanded={open}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => setOpenFaq((current) => (current === index ? null : index))}
                    >
                      <span className="min-w-0 flex-1 text-lg font-medium">
                        {item.q}
                      </span>
                      {open ? (
                        <Minus className="size-4 shrink-0 text-dim" />
                      ) : (
                        <Plus className="size-4 shrink-0 text-dim" />
                      )}
                    </button>
                    <div
                      id={`faq-answer-${index}`}
                      className={cn(
                        "max-w-3xl pb-5 pr-8 text-sm leading-relaxed text-soft",
                        !open && "hidden",
                      )}
                    >
                      {item.a}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <footer
          id="contact"
          className="relative isolate scroll-mt-24 overflow-hidden bg-band text-ink"
        >
          <video
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            src="/media/wallrobo.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0 bg-bg/75" aria-hidden="true" />
          <div className="wrap relative py-16 md:py-20">
            <Reveal>
              <SectionKicker index={t("contact.index")} label={t("contact.kicker")} />
              <div className="flex items-start justify-between gap-4">
                <h2 className="section-title">{t("contact.title")}</h2>
                <ArrowUpRight className="mt-2 size-7 text-lilac" />
              </div>
              <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-base text-lilac md:text-lg">
                {site.email ? (
                  <ContactBit href={`mailto:${site.email}`} icon={<Mail className="size-4" />}>
                    {t("contact.mail")}
                  </ContactBit>
                ) : null}
                <ContactBit href={site.instagram} icon={<Instagram className="size-4" />}>
                  {t("contact.instagram")}
                </ContactBit>
                <ContactBit href={site.telegram} icon={<Send className="size-4" />}>
                  {t("contact.telegram")}
                </ContactBit>
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

function ContactBit({ href, icon, children }: { href: string; icon: ReactNode; children: string }) {
  const content = (
    <span className="inline-flex items-center gap-2">
      {icon}
      {children}
    </span>
  );
  if (!href) return content;
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className="hover:underline"
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {content}
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
