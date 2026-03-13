import Header from "@/components/header"
import Footer from "@/components/footer"
import Disclaimer from "@/components/disclaimer"
import Link from "next/link"
import { ExternalLink, Shield, BarChart3, ArrowRight } from "lucide-react"

const partners = [
  { name: "Jegy.hu", url: "https://jegy.hu", desc: "Magyarország egyik legnagyobb jegyértékesítője. Koncertektől sportig, fesztiváloktól színházig. Magyar felület, hazai ügyfélszolgálat.", specialty: "Koncert, Sport, Fesztivál", note: "Erős hazai eseménykínálat." },
  { name: "Eventim HU", url: "https://www.eventim.hu", desc: "Az európai Eventim magyar leányvállalata. Nemzetközi sztárok, nagy arénás show-k, színház, klasszikus koncertek.", specialty: "Koncert, Színház, Sport", note: "Gyakran jó árak a nagy eseményekre." },
  { name: "StubHub", url: "https://stubhub.com", desc: "Globális másodpiaci jegyplatform. Sold-out eseményekre kínál jegyeket. Nemzetközi kínálat.", specialty: "Másodpiac, sold-out", note: "Hasznos, ha már nincs hivatalos jegy." },
  { name: "Viagogo", url: "https://viagogo.com", desc: "Nemzetközi másodpiaci jegyértékesítő. Koncertek, sport, fesztiválok. Gyakran elérhetők máshol kifogytak események.", specialty: "Koncert, Sport, Fesztivál", note: "Érdemes árakat hasonlítani." },
  { name: "Tixa", url: "https://tixa.hu", desc: "Magyar fókuszú jegyértékesítő. Erős a fesztiválok és helyi rendezvények terén. Barátságos felület, akciók.", specialty: "Fesztivál, Helyi", note: "Jó választás fesztiválokhoz." },
  { name: "Jegymester", url: "https://jegymester.hu", desc: "Megbízható hazai jegyértékesítő. Koncertek, sport, színház, kultúra. Gyors kiszolgálás.", specialty: "Koncert, Sport, Kultúra", note: "Erős a hazai sport és kultúra." },
]

const whatWeCompare = [
  "Jegyárak minden partnernél, eseményenként",
  "Közvetlen link a partner weboldalára",
  "Koncertek, fesztiválok, sport, színház egy helyen",
  "A vásárlás kizárólag a partnerrel történik",
]

const selectionCriteria = [
  "Érvényes üzleti tevékenység és megbízható működés",
  "Átlátható árazás és vásárlási feltételek",
  "Bevált ügyfélszolgálat és panaszkezelés",
  "A Jegyspot nem kap jutalékot – objektív összehasonlítás",
]

export default function PartnersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section
          className="relative py-14 md:py-20 px-4 bg-foreground text-background"
          style={{ backgroundImage: "url(/images/hero-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-foreground/85" />
          <div className="relative z-10 max-w-3xl mx-auto text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Akikkel összehasonlítunk
            </h1>
            <p className="text-white/90 text-sm md:text-base">
              A Jegyspot nem értékesít jegyeket – csak ezeknek a partnereknek az árait jelenítjük meg. A vásárlás mindig a partner weboldalán történik.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-6">
          <Disclaimer />
        </div>

        {/* Two columns: left = What we compare + How we select; right = Partner list */}
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid lg:grid-cols-10 gap-8 lg:gap-10">
            <aside className="lg:col-span-3 space-y-6">
              <div className="rounded-xl border border-border bg-muted/30 p-5">
                <h2 className="font-bold text-foreground flex items-center gap-2 mb-3">
                  <BarChart3 className="w-5 h-5 text-accent" />
                  Mit hasonlítunk?
                </h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {whatWeCompare.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-muted/30 p-5">
                <h2 className="font-bold text-foreground flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-accent" />
                  Hogyan választjuk?
                </h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {selectionCriteria.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mt-4">A Jegyspot nem kap jutalékot a partnerektől.</p>
              </div>
            </aside>
            <div className="lg:col-span-7 space-y-4">
              {partners.map((partner, index) => (
                <article
                  key={partner.name}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-accent/40 transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-accent/15 text-accent font-bold text-sm flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground">{partner.name}</h3>
                    <p className="text-xs text-accent font-medium mt-0.5">{partner.specialty}</p>
                    <p className="text-sm text-muted-foreground mt-2">{partner.desc}</p>
                    {partner.note && <p className="text-xs text-foreground/80 mt-1">{partner.note}</p>}
                  </div>
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90"
                    aria-label={`${partner.name} weboldala`}
                  >
                    Weboldal <ExternalLink className="w-4 h-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>

        <section className="border-t border-border py-10 px-4 bg-muted/20">
          <div className="max-w-2xl mx-auto text-center">
            <Link href="/esemenyek" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-accent-foreground font-semibold text-sm hover:opacity-90">
              Események böngészése <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
