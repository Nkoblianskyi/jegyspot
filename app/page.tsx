import Link from "next/link"
import { ArrowRight, Shield, Zap, BarChart3, ChevronDown, Users, Ticket, Music2, Calendar } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSearch from "@/components/hero-search"
import Disclaimer from "@/components/disclaimer"
import EventCard from "@/components/event-card"
import { allEvents } from "@/lib/events"

const featuredEvents = allEvents.slice(0, 3)
const partnerNames = ["Jegy.hu", "Eventim HU", "StubHub", "Viagogo", "Tixa", "Jegymester"]

const steps = [
  { step: 1, title: "Keresés", desc: "Írja be az esemény nevét vagy helyszínét a keresőmezőbe." },
  { step: 2, title: "Összehasonlítás", desc: "Egy helyen láthatja több partner aktuális árait." },
  { step: 3, title: "Kiválasztás", desc: "Válassza ki a legjobb ajánlatot, kattintson az „Ajánlat” gombra." },
  { step: 4, title: "Vásárlás", desc: "A vásárlás a partner oldalán, biztonságosan történik." },
]

const stats = [
  { value: "6+", label: "partner", icon: Users },
  { value: "0 Ft", label: "díj", icon: Ticket },
  { value: "100%", label: "független", icon: Shield },
]

const whyBlocks = [
  { icon: Zap, title: "Gyors és egyszerű", text: "Egy kereséssel láthatja az összes ajánlatot. Nincs regisztráció, nincs rejtett díj." },
  { icon: Shield, title: "Csak megbízható partnerek", text: "Csak ellenőrzött jegyértékesítőket jelenítünk meg. A vásárlás náluk történik." },
  { icon: BarChart3, title: "Átlátható árak", text: "Minden partner ára egy táblázatban. A legjobb ajánlat egy kattintással választható." },
]

const faqs = [
  { q: "Mit csinál a Jegyspot?", a: "A Jegyspot egy független összehasonlító szolgáltatás. Egy eseményhez összegyűjtjük több jegyértékesítő (Jegy.hu, Eventim, StubHub stb.) árait, így egy helyen láthatja, hol a legjobb ár. Magunk nem adunk el jegyeket – a vásárlás mindig a kiválasztott partner oldalán történik." },
  { q: "Ingyenes a szolgáltatás?", a: "Igen. A Jegyspot teljesen ingyenesen használható, regisztráció nélkül. Nem számolunk fel díjat, és nem kapunk jutalékot a partnerektől – az összehasonlítás objektív marad." },
  { q: "Miért más az ár minden partnernél?", a: "Minden jegyértékesítő saját árazást, akciókat és szolgáltatási díjakat alkalmaz. Mi ezeket jelenítjük meg egy táblázatban, hogy Ön a legkedvezőbb ajánlatot választhassa." },
  { q: "Biztonságos a partner oldalán vásárolni?", a: "Igen. Csak olyan partnereket jelenítünk meg, akik megbízható, ismert jegyértékesítők. A tranzakció a partner weboldalán, annak biztonsági és adatvédelmi feltételei szerint történik." },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero: SPLIT SCREEN – left = full-bleed image, right = solid panel with content + search */}
        <section
          className="relative min-h-[90vh] md:min-h-[88vh] flex flex-col md:flex-row"
          aria-label="Kezdőlap"
        >
          {/* Left half: only image, no text */}
          <div
            className="relative w-full md:w-1/2 min-h-[40vh] md:min-h-0 shrink-0"
            style={{ backgroundImage: "url(/images/hero-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-primary/60 md:bg-primary/40" />
          </div>

          {/* Right half: light base + decorative shapes, floating cards, icons */}
          <div className="relative w-full md:w-1/2 flex flex-col border-t md:border-t-0 md:border-l border-border overflow-hidden bg-[oklch(0.97_0.02_260)]">
            {/* Decorative blob shapes */}
            <div className="absolute top-0 right-0 w-[280px] h-[280px] md:w-[380px] md:h-[380px] translate-x-[30%] -translate-y-[20%]" aria-hidden>
              <svg viewBox="0 0 200 200" className="w-full h-full text-accent/20">
                <path fill="currentColor" d="M45.7,-78.2C58.2,-69.8,66.4,-54.2,72.8,-38.2C79.2,-22.2,83.8,-5.8,82.2,9.8C80.6,25.4,72.8,40.2,61.4,51.8C50,63.4,35,71.8,19.2,76.2C3.4,80.6,-13.2,81,-28.4,76.4C-43.6,71.8,-57.4,62.2,-68.2,49.6C-79,37,-86.8,21.4,-88.4,4.8C-90,-11.8,-85.4,-29.4,-76.2,-43.8C-67,-58.2,-53.2,-69.4,-38.2,-76.8C-23.2,-84.2,-7,-87.8,8.2,-87.4C23.4,-87,37.6,-82.6,45.7,-78.2Z" transform="translate(100 100)" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[260px] md:h-[260px] -translate-x-[40%] translate-y-[30%]" aria-hidden>
              <svg viewBox="0 0 200 200" className="w-full h-full text-accent/15">
                <path fill="currentColor" d="M35.2,-58.9C45.1,-52.2,52.2,-41.2,57.8,-29.2C63.4,-17.2,67.4,-4.2,66.2,8.4C65,20.9,58.6,33.2,49.2,42.8C39.8,52.4,27.4,59.3,14.8,63.5C2.2,67.7,-10.6,69.2,-22.2,65.4C-33.8,61.6,-44.2,52.5,-52.4,41.4C-60.6,30.3,-66.6,17.2,-68,3.4C-69.4,-10.4,-66.2,-24.8,-59.2,-36.4C-52.2,-48,-41.4,-56.8,-29.8,-62.6C-18.2,-68.4,-5.8,-71.2,6.2,-69.6C18.2,-68,29.8,-62,35.2,-58.9Z" transform="translate(100 100)" />
              </svg>
            </div>
            {/* Large decorative circle (ring) */}
            <div className="absolute top-1/2 right-0 w-64 h-64 -translate-y-1/2 translate-x-1/2 rounded-full border-[20px] border-accent/10 pointer-events-none" aria-hidden />
            <div className="absolute bottom-8 left-8 w-24 h-24 rounded-full border-[12px] border-accent/10 pointer-events-none" aria-hidden />
            {/* Floating stat cards */} 
            <div className="absolute top-[32%] right-[8%] md:top-[28%] md:right-[10%] px-3 py-2 rounded-xl bg-white/90 shadow-lg border border-border/60 backdrop-blur-sm" aria-hidden>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <Users className="w-4 h-4 text-accent" /> 6+ partner
              </span>
            </div>
            <div className="absolute bottom-[32%] left-[10%] md:bottom-[8%] md:left-[14%] px-3 py-2 rounded-xl bg-white/90 shadow-lg border border-border/60 backdrop-blur-sm" aria-hidden>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <Music2 className="w-4 h-4 text-accent" /> Koncertek
              </span>
            </div>
            <div className="absolute bottom-[18%] left-[6%] md:bottom-[14%] md:left-[8%] px-3 py-2 rounded-xl bg-white/90 shadow-lg border border-border/60 backdrop-blur-sm" aria-hidden>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <Calendar className="w-4 h-4 text-accent" /> Események
              </span>
            </div>
            {/* Content */}
            <div className="relative flex-1 flex flex-col px-4 sm:px-6 lg:px-10 py-6 md:py-10 justify-center z-10">
              <Disclaimer variant="default" />
              <div className="mt-6 md:mt-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
                  Jegyárak <span className="text-accent">egy helyen</span>
                </h1>
                <p className="text-muted-foreground text-base md:text-lg mt-3 max-w-md">
                  Keressen, hasonlítson, spóroljon. Ingyenes, regisztráció nélkül.
                </p>
              </div>
              <div className="mt-8 md:mt-10">
                <HeroSearch />
                <p className="text-muted-foreground text-xs mt-3">Összehasonlítjuk: {partnerNames.join(", ")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works: vertical timeline left, steps right */}
        <section className="py-16 md:py-24 px-4 bg-muted/40" aria-labelledby="how-heading">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-start">
              <div className="md:col-span-4">
                <h2 id="how-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Hogyan működik?
                </h2>
                <p className="text-muted-foreground">
                  Négy egyszerű lépésben a legjobb jegyárat találja meg.
                </p>
              </div>
              <div className="md:col-span-8 space-y-0">
                {steps.map((s, i) => (
                  <div key={s.step} className="flex gap-6">
                    <div className="flex flex-col items-center shrink-0">
                      <span className="w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold text-sm flex items-center justify-center">
                        {s.step}
                      </span>
                      {i < steps.length - 1 && <div className="w-px flex-1 min-h-[40px] bg-border mt-2" />}
                    </div>
                    <div className="pb-10 md:pb-12">
                      <h3 className="font-bold text-foreground text-lg mb-1">{s.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured events: title left, cards in a horizontal scroll on small, grid on large */}
        <section className="py-16 md:py-24 px-4 bg-background" aria-labelledby="featured-heading">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <h2 id="featured-heading" className="text-2xl md:text-4xl font-bold text-foreground">
                Kiemelt programok
              </h2>
              <Link href="/esemenyek" className="text-accent font-semibold text-sm hover:underline inline-flex items-center gap-1 shrink-0">
                Összes esemény <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats: one row, dividers between */}
        <section className="py-14 md:py-18 px-4 bg-foreground text-background" aria-label="Statisztikák">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:divide-x md:divide-white/20">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center justify-center gap-4 py-6 md:py-8 md:px-10 first:md:pl-0 last:md:pr-0">
                <span className="text-accent">
                  <s.icon className="w-8 h-8 md:w-9 md:h-9" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-3xl md:text-4xl font-bold">{s.value}</p>
                  <p className="text-sm text-white/80">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why: one row of 3, icon above title above text, no card border – just spacing */}
        <section className="py-16 md:py-24 px-4 bg-background" aria-labelledby="why-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="why-heading" className="text-2xl md:text-4xl font-bold text-foreground text-center mb-4">
              Miért a Jegyspot?
            </h2>
            <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
              Független platform – csak összehasonlítunk, nem adunk el jegyeket.
            </p>
            <div className="grid md:grid-cols-3 gap-10 md:gap-8">
              {whyBlocks.map((b) => (
                <div key={b.title} className="text-center">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/15 text-accent mb-4">
                    <b.icon className="w-7 h-7" aria-hidden="true" />
                  </span>
                  <h3 className="font-bold text-foreground text-lg mb-2">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners: two columns – left "What we compare" panel, right partner pills in grid */}
        <section className="py-16 md:py-24 px-4 bg-muted/40" aria-labelledby="partners-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="partners-heading" className="text-2xl md:text-4xl font-bold text-foreground text-center mb-10">
              Akikkel összehasonlítunk
            </h2>
            <div className="grid md:grid-cols-5 gap-8 md:gap-10">
              <div className="md:col-span-2 p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-accent" />
                  Mit hasonlítunk?
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Jegyárak minden partnernél</li>
                  <li>• Link a partner oldalára</li>
                  <li>• Koncertek, fesztiválok, sport, színház</li>
                  <li>• Vásárlás a partner oldalán történik</li>
                </ul>
                <Link href="/partnerek" className="inline-flex items-center gap-1 mt-4 text-accent font-semibold text-sm hover:underline">
                  Részletek <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="md:col-span-3 flex flex-wrap items-center gap-3">
                {partnerNames.map((p) => (
                  <span
                    key={p}
                    className="px-4 py-2.5 rounded-lg bg-card border border-border text-sm font-medium text-foreground hover:border-accent/50 transition-colors"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About: big number strip + text block */}
        <section className="py-16 md:py-24 px-4 bg-background" aria-labelledby="about-us-heading">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
              <div className="lg:max-w-md">
                <h2 id="about-us-heading" className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                  Rólunk
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A Jegyspot egy független magyar jegyár-összehasonlító. Egy helyen láthatja a legjobb ajánlatokat, ingyenesen és regisztráció nélkül.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Nem adunk el jegyeket. Csak összehasonlítjuk a partnereink árait.
                </p>
                <Link
                  href="/rolunk"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-accent-foreground font-semibold text-sm hover:opacity-90"
                >
                  <Users className="w-4 h-4" /> Tudjon meg többet
                </Link>
              </div>
              <div className="flex gap-4 w-full lg:max-w-md lg:ml-auto">
                {["6+ partner", "0 Ft díj", "100% független"].map((t) => (
                  <div key={t} className="flex-1 py-6 px-4 rounded-xl bg-muted text-center font-semibold text-foreground text-sm">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ: numbered list style, no cards */}
        <section className="py-16 md:py-24 px-4 bg-muted/40" aria-labelledby="faq-heading">
          <div className="max-w-2xl mx-auto">
            <h2 id="faq-heading" className="text-2xl md:text-4xl font-bold text-foreground text-center mb-10">
              Gyakori kérdések
            </h2>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <details key={faq.q} className="group border-b border-border pb-4">
                  <summary className="flex items-center gap-3 cursor-pointer list-none py-3 font-medium text-foreground">
                    <span className="text-accent font-bold tabular-nums">{i + 1}.</span>
                    {faq.q}
                    <span className="ml-auto shrink-0 text-accent group-open:rotate-180 transition-transform">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-8 pt-1">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
