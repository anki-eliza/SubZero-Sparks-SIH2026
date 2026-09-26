import { ArrowRight, Mail } from "lucide-react";
import { siteConfig } from "./config/site";

export default function App() {
  const { subtopics } = siteConfig;

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Team photograph background */}
      <div className="fixed inset-0 -z-10">
        <img
          src={siteConfig.TEAM_PHOTO}
          alt={siteConfig.TEAM_PHOTO_ALT}
          className="h-full w-full object-cover object-[50%_28%] sm:object-[50%_32%]"
        />
        <div className="absolute inset-0 bg-background/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/25 to-background/85" />
      </div>

      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/40 backdrop-blur-md">
        <nav
          aria-label="Main"
          className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between"
        >
          <a
            href="#top"
            className="flex items-center gap-2.5 font-display text-sm font-bold tracking-[0.22em] text-foreground uppercase"
          >
            <img src={siteConfig.LOGO} alt="SubZero Sparks logo" className="h-10 w-10 rounded-full" />
            {siteConfig.TEAM_NAME}
          </a>
          <ul className="flex shrink-0 items-center gap-5 text-sm text-muted-foreground">
            <li>
              <a href="#top" className="transition-colors hover:text-foreground">
                About Us
              </a>
            </li>
            <li>
              <a href="#subtopics" className="transition-colors hover:text-foreground">
                Solutions
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-colors hover:text-foreground">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-5">
        {/* Hero */}
        <section className="py-20 text-center sm:py-28">
          <p className="font-display text-xs tracking-[0.35em] text-primary uppercase">
            {siteConfig.INSTITUTION_NAME}
          </p>
          <h1 className="mt-5 font-display text-4xl leading-tight font-bold sm:text-6xl lg:text-7xl">
            {siteConfig.PROJECT_NAME}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-foreground/90 sm:text-xl">
            {siteConfig.PROJECT_TAGLINE}
          </p>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {siteConfig.INTRO}
          </p>
        </section>

        {/* Solution cards */}
        <section id="subtopics" aria-label="Project subtopics" className="scroll-mt-24 pb-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subtopics.map((topic, i) => (
              <article
                key={topic.title}
                className="glass-card group flex flex-col rounded-2xl p-7 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_26px_60px_-24px_oklch(0_0_0/90%)]"
              >
                <span className="font-display text-xs tracking-[0.3em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-display text-xl font-semibold">{topic.title}</h2>
                <p className="mt-3 grow whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {topic.description}
                </p>
                <a
                  href={topic.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl border border-primary/50 bg-primary/10 px-4 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
                >
                  Explore Portfolio
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 py-16">
          <div className="glass-card mx-auto max-w-xl rounded-2xl border-primary/25 p-8 text-center">
            <h2 className="font-display text-xl font-semibold">Have a Question?</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              For any queries, feedback, or issues related to this website, feel free to contact us.
            </p>
            <a
              href={`mailto:${siteConfig.CONTACT_EMAIL}`}
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold break-all transition-colors duration-200 hover:border-primary/60 hover:text-primary"
            >
              <Mail className="size-4 shrink-0" aria-hidden="true" />
              {siteConfig.CONTACT_EMAIL}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 bg-background/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 py-8 text-center text-xs text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
          <p>
            © 2026 {siteConfig.TEAM_NAME}. All Rights Reserved. · {siteConfig.INSTITUTION_NAME}
          </p>
          <a href="#top" className="transition-colors hover:text-foreground">
            Back to Top
          </a>
        </div>
      </footer>
    </div>
  );
}
